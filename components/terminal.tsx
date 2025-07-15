"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import {
  TerminalIcon,
  User,
  Briefcase,
  Code,
  Mail,
  GraduationCap,
  Shield,
  FileDown,
  BookOpen,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AboutSection } from "@/components/sections/about-section"
import { EducationSection } from "@/components/sections/education-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { LinksSection } from "@/components/sections/links-section"
import { ImageAsciiLogo } from "@/components/image-ascii-logo"
import { NCMPCPPModal } from "@/components/ncmpcpp-modal"
import { SpotifyWidget } from "@/components/spotify-widget"

type Command = {
  input: string
  output: React.ReactNode
  timestamp: Date
}

interface Track {
  id: number
  artist: string
  title: string
  album: string
  duration: string
  file: string
  actualDuration?: number
}

export default function Terminal() {
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<Command[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const [showNCMPCPP, setShowNCMPCPP] = useState(false)
  const [ncmpcppInBackground, setNCMPCPPInBackground] = useState(false)
  const [terminalHasFocus, setTerminalHasFocus] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // NCMPCPP State
  const [tracks, setTracks] = useState<Track[]>([])
  const [currentTrack, setCurrentTrack] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Use useCallback to memoize the scrollToBottom function
  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [])

  const executeCommand = useCallback((command: string) => {
    let output: React.ReactNode

    switch (command) {
      case "help":
        output = (
          <div className="space-y-2 text-white">
            <p className="font-bold">Available commands:</p>
            <ul className="space-y-1">
              <li>
                <span className="text-white font-bold">about</span> - Learn about Saksham
              </li>
              <li>
                <span className="text-white font-bold">education</span> - View educational background
              </li>
              <li>
                <span className="text-white font-bold">skills</span> - See technical skills
              </li>
              <li>
                <span className="text-white font-bold">experience</span> - View work experience
              </li>
              <li>
                <span className="text-white font-bold">projects</span> - View projects
              </li>
              <li>
                <span className="text-white font-bold">contact</span> - Get contact information
              </li>
              <li>
                <span className="text-white font-bold">links</span> - View social media links
              </li>
              <li>
                <span className="text-white font-bold">{"echo \"text\""}</span> - Print text to terminal
              </li>
              <li>
                <span className="text-white font-bold">whoami</span> - Display current user
              </li>
              <li>
                <span className="text-white font-bold">pwd</span> - Show current directory
              </li>
              <li>
                <span className="text-white font-bold">ls</span> - List directory contents
              </li>
              <li>
                <span className="text-white font-bold">ncmpcpp</span> - Open music player
              </li>
              <li>
                <span className="text-white font-bold">clear</span> - Clear the terminal
              </li>
              <li>
                <span className="text-white font-bold">resume</span> - Download resume
              </li>
              <li>
                <span className="text-white font-bold">blog</span> - View blog posts
              </li>
            </ul>
          </div>
        )
        setCurrentSection(null)
        break

      case "about":
        output = <AboutSection />
        setCurrentSection("about")
        break

      case "education":
        output = <EducationSection />
        setCurrentSection("education")
        break

      case "skills":
        output = <SkillsSection />
        setCurrentSection("skills")
        break

      case "experience":
        output = <ExperienceSection />
        setCurrentSection("experience")
        break

      case "projects":
        output = <ProjectsSection />
        setCurrentSection("projects")
        break

      case "contact":
        output = <ContactSection />
        setCurrentSection("contact")
        break

      case "links":
        output = <LinksSection />
        setCurrentSection("links")
        break

      case "resume":
        const link = document.createElement("a")
        link.href = "/resume/resume.pdf"
        link.download = "Saksham_Kaushal_Resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        output = <p className="text-white">Downloading Saksham_Kaushal_Resume.pdf...</p>
        setCurrentSection(null)
        break

      case "blog":
        output = (
          <div className="space-y-2 text-white">
            <p>Blog posts coming soon...</p>
            <p>Stay tuned for technical articles and insights!</p>
          </div>
        )
        setCurrentSection("blog")
        break

      case "ncmpcpp":
        setShowNCMPCPP(true)
        setNCMPCPPInBackground(false)
        setTerminalHasFocus(false)
        output = <p className="text-white">Opening ncmpcpp music player...</p>
        setCurrentSection(null)
        break

      case "whoami":
        output = <p className="text-white">potui@portfolio - Saksham Kaushal</p>
        setCurrentSection(null)
        break

      case "pwd":
        output = <p className="text-white">/home/potui/portfolio</p>
        setCurrentSection(null)
        break

      case "ls":
        output = <p className="text-white">about education skills experience projects contact links</p>
        setCurrentSection(null)
        break

      case "sudo rm -rf /":
        output = <p className="text-red-500">Permission denied. Just kidding! Closing tab...</p>
        setTimeout(() => {
          window.close()
        }, 2000)
        setCurrentSection(null)
        break

      case "clear":
        setCommandHistory([])
        setCurrentSection(null)
        setInput("")
        return

      default:
        // Handle echo command with quotes
        if (command.startsWith('echo "') && command.endsWith('"')) {
          const text = command.slice(6, -1) // Remove 'echo "' and '"'
          output = <p className="text-white">{text}</p>
          setCurrentSection(null)
        } else if (command.startsWith("echo ")) {
          const text = command.slice(5) // Remove 'echo '
          output = <p className="text-white">{text}</p>
          setCurrentSection(null)
        } else {
          output = (
            <p className="text-white">
              Command not found: {command}. Type <span className="text-white font-bold">help</span> to see available
              commands.
            </p>
          )
          setCurrentSection(null)
        }
    }

    // Add command to history
    setCommandHistory((prev) => [
      ...prev,
      {
        input: command,
        output,
        timestamp: new Date(),
      },
    ])
  }, [])

  // Create audio element on mount
  useEffect(() => {
    if (typeof window !== "undefined" && !audioRef.current) {
      audioRef.current = new Audio()
    }
  }, [])

  const playTrack = useCallback(
    (trackIndex: number) => {
      if (audioRef.current && tracks[trackIndex]) {
        const track = tracks[trackIndex]
        audioRef.current.src = track.file
        audioRef.current.load()

        audioRef.current
          .play()
          .then(() => {
            setCurrentTrack(trackIndex)
            setIsPlaying(true)
          })
          .catch((error) => {
            console.error("Error playing track:", error)
            setIsPlaying(false)
          })
      }
    },
    [tracks],
  )

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration || 0)
    }

    const handleEnded = () => {
      if (currentTrack !== null && currentTrack < tracks.length - 1) {
        playTrack(currentTrack + 1)
      } else {
        setIsPlaying(false)
        setCurrentTrack(null)
      }
    }

    const handleLoadStart = () => {
      setCurrentTime(0)
      setDuration(0)
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("loadedmetadata", updateTime)
    audio.addEventListener("loadstart", handleLoadStart)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("loadedmetadata", updateTime)
      audio.removeEventListener("loadstart", handleLoadStart)
    }
  }, [currentTrack, tracks.length, playTrack])

  const togglePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        if (currentTrack !== null) {
          audioRef.current.play().catch((error) => {
            console.error("Error resuming track:", error)
          })
          setIsPlaying(true)
        } else if (tracks.length > 0) {
          playTrack(0)
        }
      }
    }
  }, [isPlaying, currentTrack, tracks, playTrack])

  const stopMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ""
      setIsPlaying(false)
      setCurrentTrack(null)
      setCurrentTime(0)
      setDuration(0)
    }
  }, [])

  useEffect(() => {
    const handleClick = () => {
      if (terminalHasFocus) {
        inputRef.current?.focus()
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [terminalHasFocus])

  useEffect(() => {
    // Add welcome message only once on initial render
    if (commandHistory.length === 0) {
      setCommandHistory([
        {
          input: "welcome",
          output: (
            <div className="space-y-2">
              <ImageAsciiLogo />
              <p className="font-mono text-white">
                Welcome to Saksham Kaushal&apos;s portfolio! Type help to see available commands.
              </p>
            </div>
          ),
          timestamp: new Date(),
        },
      ])
    }
  }, [commandHistory.length])

  useEffect(() => {
    scrollToBottom()
  }, [commandHistory, currentSection, scrollToBottom])

  useEffect(() => {
    if (terminalHasFocus) {
      inputRef.current?.focus()
    }
  }, [terminalHasFocus])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || !terminalHasFocus) return

    const command = input.trim().toLowerCase()
    executeCommand(command)
    setInput("")
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!terminalHasFocus) return

    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex].input)
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex].input)
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  const handleButtonClick = (command: string) => {
    if (!terminalHasFocus) return

    executeCommand(command)
    setInput("")
    setHistoryIndex(-1)
  }

  const handleNCMPCPPClose = () => {
    stopMusic()
    setShowNCMPCPP(false)
    setNCMPCPPInBackground(false)
    setTerminalHasFocus(true)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)
  }

  const handleNCMPCPPBackground = () => {
    setShowNCMPCPP(false)
    setNCMPCPPInBackground(true)
    setTerminalHasFocus(true)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="bg-black border border-white/30 rounded-t-md p-2 flex items-center">
          <TerminalIcon className="h-4 w-4 text-white mr-2" />
          <span className="text-sm font-mono text-white">
            potui@portfolio ~ {currentSection ? `/${currentSection}` : ""}
          </span>
          {ncmpcppInBackground && (
            <span className="ml-2 text-xs text-white/60">[ncmpcpp in background]</span>
          )}
          {ncmpcppInBackground && isPlaying && currentTrack !== null && (
            <span className="ml-4 text-xs text-white/60">
              Playing: {tracks[currentTrack]?.title} [{formatTime(currentTime)}/{formatTime(duration)}]
            </span>
          )}
        </div>

        <div ref={terminalRef} className="flex-1 bg-black border-x border-white/30 p-4 overflow-y-auto font-mono text-sm pb-16">
          {commandHistory.map((cmd, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center text-white/70">
                <span className="text-white mr-2">$</span>
                <span>{cmd.input}</span>
              </div>
              <div className="mt-1 ml-4">{cmd.output}</div>
            </div>
          ))}
        </div>

        <div className="bg-black border border-white/30 rounded-b-md p-2">
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-white mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none font-mono text-white"
              aria-label="Terminal input"
              autoComplete="off"
              spellCheck="false"
              disabled={!terminalHasFocus}
            />
          </form>
        </div>

        <nav className="mt-4 flex flex-wrap justify-center gap-2 mb-16 sm:mb-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleButtonClick("about")}
           className="text-xs bg-black/50 hover:bg-white hover:text-black text-white border-white/30 transition-all duration-200"
            disabled={!terminalHasFocus}
          >
            <User className="h-3 w-3 mr-1" />
            About
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleButtonClick("education")}
           className="text-xs bg-black/50 hover:bg-white hover:text-black text-white border-white/30 transition-all duration-200"
            disabled={!terminalHasFocus}
          >
            <GraduationCap className="h-3 w-3 mr-1" />
            Education
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleButtonClick("skills")}
           className="text-xs bg-black/50 hover:bg-white hover:text-black text-white border-white/30 transition-all duration-200"
            disabled={!terminalHasFocus}
          >
            <Shield className="h-3 w-3 mr-1" />
            Skills
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleButtonClick("experience")}
           className="text-xs bg-black/50 hover:bg-white hover:text-black text-white border-white/30 transition-all duration-200"
            disabled={!terminalHasFocus}
          >
            <Briefcase className="h-3 w-3 mr-1" />
            Experience
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleButtonClick("projects")}
           className="text-xs bg-black/50 hover:bg-white hover:text-black text-white border-white/30 transition-all duration-200"
            disabled={!terminalHasFocus}
          >
            <Code className="h-3 w-3 mr-1" />
            Projects
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleButtonClick("contact")}
           className="text-xs bg-black/50 hover:bg-white hover:text-black text-white border-white/30 transition-all duration-200"
            disabled={!terminalHasFocus}
          >
            <Mail className="h-3 w-3 mr-1" />
            Contact
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleButtonClick("links")}
           className="text-xs bg-black/50 hover:bg-white hover:text-black text-white border-white/30 transition-all duration-200"
            disabled={!terminalHasFocus}
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Links
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleButtonClick("resume")}
           className="text-xs bg-black/50 hover:bg-white hover:text-black text-white border-white/30 transition-all duration-200"
            disabled={!terminalHasFocus}
          >
            <FileDown className="h-3 w-3 mr-1" />
            Resume
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleButtonClick("blog")}
           className="text-xs bg-black/50 hover:bg-white hover:text-black text-white border-white/30 transition-all duration-200"
            disabled={!terminalHasFocus}
          >
            <BookOpen className="h-3 w-3 mr-1" />
            Blog
          </Button>
        </nav>

        {showNCMPCPP && (
          <NCMPCPPModal
            isOpen={showNCMPCPP}
            onClose={handleNCMPCPPClose}
            onBackground={handleNCMPCPPBackground}
            isInBackground={ncmpcppInBackground}
            tracks={tracks}
            setTracks={setTracks}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            playTrack={playTrack}
            togglePlayPause={togglePlayPause}
            stopMusic={stopMusic}
          />
        )}
      </div>
      <SpotifyWidget />
    </>
  )
}
