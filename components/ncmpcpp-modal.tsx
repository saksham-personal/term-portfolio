"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { X } from "lucide-react"

interface Track {
  id: number
  artist: string
  title: string
  album: string
  duration: string
  file: string
  actualDuration?: number
}

interface NCMPCPPModalProps {
  isOpen: boolean
  onClose: () => void
  onBackground: () => void
  isInBackground: boolean
  tracks: Track[]
  setTracks: React.Dispatch<React.SetStateAction<Track[]>>
  currentTrack: number | null
  isPlaying: boolean
  currentTime: number
  duration: number
  playTrack: (trackIndex: number) => void
  togglePlayPause: () => void
  stopMusic: () => void
}

export function NCMPCPPModal({
  isOpen,
  onClose,
  onBackground,
  tracks,
  setTracks,
  currentTrack,
  isPlaying,
  currentTime,
  duration,
  playTrack,
  togglePlayPause,
  stopMusic,
}: NCMPCPPModalProps) {
  const [loading, setLoading] = useState(true)
  const [selectedTrack, setSelectedTrack] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const startPos = useRef({ x: 0, y: 0 })
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [hasFocus, setHasFocus] = useState(true)

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (e.button !== 0) return; // Only drag with left mouse button
    setIsDragging(true)
    startPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !modalRef.current) return
      e.preventDefault()
      requestAnimationFrame(() => {
        if (modalRef.current) {
          const newX = e.clientX - startPos.current.x
          const newY = e.clientY - startPos.current.y
          modalRef.current.style.transform = `translate(${newX}px, ${newY}px)`
        }
      })
    }

    const handleMouseUp = (e: MouseEvent) => {
      if (!isDragging) return
      setIsDragging(false)
      const newX = e.clientX - startPos.current.x
      const newY = e.clientY - startPos.current.y
      setPosition({ x: newX, y: newY })
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])


  useEffect(() => {
    if (!isOpen) {
      setPosition({ x: 0, y: 0 })
      if(modalRef.current) {
        modalRef.current.style.transform = `translate(0px, 0px)`;
      }
    }
  }, [isOpen])

  // Extract metadata from audio file
  const extractMetadata = async (file: string): Promise<Partial<Track>> => {
    return new Promise((resolve) => {
      const audio = new Audio(file)

      audio.addEventListener("loadedmetadata", () => {
        const fileName =
          file
            .split("/")
            .pop()
            ?.replace(/\.[^/.]+$/, "") || "Unknown"

        // Try to parse filename for metadata (Artist - Title format)
        const parts = fileName.split(" - ")
        let artist = "Unknown Artist"
        let title = fileName
        const album = "Unknown Album"

        if (parts.length >= 2) {
          artist = parts[0].trim()
          title = parts.slice(1).join(" - ").trim()
        }

        const minutes = Math.floor(audio.duration / 60)
        const seconds = Math.floor(audio.duration % 60)
        const durationStr = `${minutes}:${seconds.toString().padStart(2, "0")}`

        resolve({
          artist,
          title,
          album,
          duration: durationStr,
          actualDuration: audio.duration,
        })
      })

      audio.addEventListener("error", () => {
        const fileName =
          file
            .split("/")
            .pop()
            ?.replace(/\.[^/.]+$/, "") || "Unknown"
        resolve({
          artist: "Unknown Artist",
          title: fileName,
          album: "Unknown Album",
          duration: "0:00",
          actualDuration: 0,
        })
      })

      // Set a timeout to avoid hanging
      setTimeout(() => {
        const fileName =
          file
            .split("/")
            .pop()
            ?.replace(/\.[^/.]+$/, "") || "Unknown"
        resolve({
          artist: "Unknown Artist",
          title: fileName,
          album: "Unknown Album",
          duration: "0:00",
          actualDuration: 0,
        })
      }, 5000)
    })
  }

  // Fetch music files from public/music directory
  const fetchMusicFiles = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/music")
      const data = await response.json()

      if (data.error) {
        console.error(data.error)
        setTracks([])
        return
      }

      const foundTracks: Track[] = []
      let id = 1

      for (const filename of data.files) {
        const filePath = `/music/${filename}`
        const metadata = await extractMetadata(filePath)
        foundTracks.push({
          id: id++,
          file: filePath,
          artist: metadata.artist || "Unknown Artist",
          title: metadata.title || filename.replace(/\.[^/.]+$/, ""),
          album: metadata.album || "Unknown Album",
          duration: metadata.duration || "0:00",
          actualDuration: metadata.actualDuration || 0,
        })
      }

      setTracks(foundTracks)
      if (foundTracks.length > 0) {
        setSelectedTrack(0)
      }
    } catch (error) {
      console.error("Error fetching music files:", error)
      setTracks([])
    } finally {
      setLoading(false)
    }
  }, [setTracks])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const createProgressBar = (current: number, total: number) => {
    const progress = total > 0 ? current / total : 0
    const barLength = 40
    const filledLength = Math.floor(progress * barLength)
    const bar =
      "=".repeat(Math.max(0, filledLength - 1)) +
      (filledLength > 0 ? ">" : "") +
      "-".repeat(Math.max(0, barLength - filledLength))
    return `[${bar}]`
  }

  const handleClose = useCallback(() => {
    stopMusic()
    onClose()
  }, [onClose, stopMusic])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Only handle keys when modal is open and has focus
      if (!isOpen || !hasFocus) return

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault()
          setSelectedTrack((prev) => Math.max(0, prev - 1))
          break
        case "ArrowDown":
          e.preventDefault()
          setSelectedTrack((prev) => Math.min(tracks.length - 1, prev + 1))
          break
        case "Enter":
          e.preventDefault()
          if (tracks.length > 0) {
            playTrack(selectedTrack)
          }
          break
        case "p":
        case "P":
          e.preventDefault()
          togglePlayPause()
          break
        case "q":
        case "Q":
          e.preventDefault()
          handleClose()
          break
      }
    },
    [isOpen, hasFocus, selectedTrack, tracks.length, playTrack, togglePlayPause, handleClose],
  )

  const handleModalClick = () => {
    setHasFocus(true)
  }

  const handleBackground = () => {
    onBackground()
    setHasFocus(false)
  }

  // Initialize music files when modal opens
  useEffect(() => {
    if (isOpen && tracks.length === 0) {
      fetchMusicFiles()
    }
    if (isOpen) {
      setHasFocus(true)
      setLoading(false)
    }
  }, [isOpen, tracks.length, fetchMusicFiles])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  if (!isOpen) return null

  const totalDuration = tracks.reduce((acc, track) => {
    if (track.actualDuration) {
      return acc + track.actualDuration
    }
    const [mins, secs] = track.duration.split(":").map(Number)
    return acc + mins * 60 + secs
  }, 0)

  const totalHours = Math.floor(totalDuration / 3600)
  const totalMinutes = Math.floor((totalDuration % 3600) / 60)
  const totalSeconds = Math.floor(totalDuration % 60)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={handleBackground}>
      <div
        ref={modalRef}
        className={`relative bg-black border border-white/30 rounded font-mono text-sm animate-in zoom-in-95 duration-300 ${
          hasFocus ? "ring-2 ring-white/50" : ""
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: "800px",
          height: "600px",
        }}
        onClick={(e) => {
          e.stopPropagation()
          handleModalClick()
        }}
      >
        {/* Header */}
        <div onMouseDown={onMouseDown} className="flex items-center justify-between p-2 border-b border-white/30 bg-black" style={{ cursor: 'grab' }}>
          <span className="text-white text-xs">ncmpcpp</span>
          <div className="flex items-center gap-1">
            <button onClick={handleBackground} className="px-2 py-1 text-xs text-white hover:bg-white/10 rounded">
              Background
            </button>
            <button onClick={handleClose} className="p-1 text-white hover:bg-white/10 rounded">
              <X className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-2 h-[calc(100%-40px)] flex flex-col">
          {loading ? (
            <div className="flex-1 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-sm mb-2">Loading music files...</div>
                <div className="text-xs text-white/60">Scanning /public/music/ directory</div>
              </div>
            </div>
          ) : tracks.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-sm mb-2">No music in directory</div>
                <div className="text-xs text-white/60">Add .mp3 or .wav files to /public/music/</div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              <div className="text-white text-xs mb-2">
                Playlist ({tracks.length} items, length:{" "}
                {totalHours > 0 ? `${totalHours} hour${totalHours > 1 ? "s" : ""}, ` : ""}
                {totalMinutes} minute{totalMinutes !== 1 ? "s" : ""}, {totalSeconds} second
                {totalSeconds !== 1 ? "s" : ""}) Volume: n/a
              </div>

              {/* Header row */}
              <div className="grid grid-cols-12 gap-2 text-white/70 text-xs border-b border-white/20 pb-1 mb-1">
                <div className="col-span-1 text-right">#</div>
                <div className="col-span-3">Artist</div>
                <div className="col-span-4">Track Title</div>
                <div className="col-span-3">Album</div>
                <div className="col-span-1 text-right">Time</div>
              </div>

              {/* Track list */}
              <div className="flex-1 space-y-0 overflow-y-auto">
                {tracks.map((track, index) => (
                  <div
                    key={track.id}
                    className={`grid grid-cols-12 gap-2 text-xs py-0.5 cursor-pointer transition-colors duration-200 ${
                      currentTrack === index
                        ? "text-white bg-white/10"
                        : index === selectedTrack
                        ? "text-green-400 bg-green-900/50"
                        : "text-white/60 hover:bg-white/10"
                    }`}
                    onClick={() => setSelectedTrack(index)}
                    onDoubleClick={() => playTrack(index)}
                  >
                    <div className="col-span-1 text-right">{String(track.id).padStart(2, "0")}</div>
                    <div className="col-span-3 truncate">{track.artist}</div>
                    <div className="col-span-4 truncate">{track.title}</div>
                    <div className="col-span-3 truncate">{track.album}</div>
                    <div className="col-span-1 text-right">{track.duration}</div>
                  </div>
                ))}
              </div>

              {/* Controls info */}
              <div className="text-white/60 text-xs mt-auto pt-2 border-t border-white/20">
                <div>Controls: ↑↓ to navigate, Enter to play, P to pause/play, Q to quit</div>
              </div>

              {/* Now playing */}
              {currentTrack !== null && (
                <div className="border-t border-white/20 pt-2 mt-2">
                  <div className="text-green-400 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="flex-1 w-0 truncate">
                        Playing: {tracks[currentTrack]?.artist} - {tracks[currentTrack]?.title}
                      </span>
                      <span className="ml-2 whitespace-nowrap">
                        [{formatTime(currentTime)}/{formatTime(duration)}]
                      </span>
                    </div>
                    <div className="font-mono text-xs text-green-500 overflow-x-hidden">{createProgressBar(currentTime, duration)}</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
