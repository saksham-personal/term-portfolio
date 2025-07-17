"use client"

import { useState, useEffect } from "react"
import { Music } from "lucide-react"
import Image from "next/image"

interface SpotifyTrack {
  name: string
  artist: string
  album: string
  albumImageUrl: string
  songUrl: string
  isPlaying: boolean
}

export function SpotifyWidget() {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch('/api/spotify');
        const data = await response.json();
        if (data.isPlaying) {
          setCurrentTrack({
            name: data.title,
            artist: data.artist,
            album: data.album,
            albumImageUrl: data.albumImageUrl,
            songUrl: data.songUrl,
            isPlaying: data.isPlaying,
          });
        } else {
          setCurrentTrack(null);
        }
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
        setCurrentTrack(null);
      }
    };

    // Initial check
    fetchSpotifyData();

    // Check every 30 seconds
    const interval = setInterval(fetchSpotifyData, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!currentTrack || !currentTrack.isPlaying) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 sm:bottom-4 sm:right-4 sm:left-auto sm:w-auto z-40">
      <div className="relative" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        <a href={currentTrack.songUrl} target="_blank" rel="noopener noreferrer" className="spotify-widget flex items-center gap-3 bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 sm:rounded-full shadow-lg transition-all duration-300 sm:hover:scale-105">
          <Music className="h-5 w-5" />
          <div className="hidden sm:block">
            <div className="font-bold text-sm">{currentTrack.name}</div>
            <div className="text-xs text-white/80">{currentTrack.artist}</div>
          </div>
          <div className="sm:hidden overflow-hidden whitespace-nowrap flex-1">
            <div className="marquee-container">
              <span className="marquee-text text-sm font-bold tracking-wider">
                {currentTrack.name} — {currentTrack.artist}
              </span>
              <span className="marquee-text text-sm font-bold tracking-wider" aria-hidden="true">
                {currentTrack.name} — {currentTrack.artist}
              </span>
            </div>
          </div>
        </a>

        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 w-72 h-24 bg-black/90 border border-white/20 rounded-md p-3 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="flex items-center gap-3">
              <Image
                src={currentTrack.albumImageUrl || "/placeholder.svg"}
                alt={currentTrack.album}
                className="w-12 h-12 rounded"
                width={48}
                height={48}
              />
              <div className="flex-1 min-w-0">
                <div className="text-white font-medium text-sm truncate">{currentTrack.name}</div>
                <div className="text-white/70 text-xs truncate">by {currentTrack.artist}</div>
                <div className="text-white/50 text-xs truncate">{currentTrack.album}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs">Now playing on Spotify</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
