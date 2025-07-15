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
    <div className="fixed bottom-4 right-4 z-40">
      <div className="relative" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        <a href={currentTrack.songUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
          <Music className="h-4 w-4" />
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-white rounded-full animate-pulse"
                style={{
                  height: `${12 + Math.sin(Date.now() / 200 + i) * 8}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${0.8 + i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </a>

        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 w-64 bg-black/90 border border-white/20 rounded-lg p-3 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200">
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
