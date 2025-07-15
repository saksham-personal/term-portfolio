"use client"

import { useEffect, useState } from "react"
import Terminal from "@/components/terminal"
import BootSequence from "@/components/boot-sequence"
import { CRTToggle } from "@/components/crt-toggle"
import { SpotifyWidget } from "@/components/spotify-widget"

export default function Home() {
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooting(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-transparent relative">
      <div className="absolute top-4 right-4 z-50">
        <CRTToggle />
      </div>
      {!booting && <SpotifyWidget />}
      <div className="container mx-auto px-4 py-8 h-screen flex flex-col relative z-10 pb-20">
        {" "}
        {/* Added pb-20 */}
        {booting ? <BootSequence /> : <Terminal />}
      </div>
    </main>
  )
}
