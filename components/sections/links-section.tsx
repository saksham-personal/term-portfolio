import { AsciiArt } from "@/components/ascii-art"
import { Music, Code, Instagram, ExternalLink } from "lucide-react"

export function LinksSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="links" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <Music className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">Spotify</h3>
          </div>
          <a
            href="https://open.spotify.com/user/31xs4tck5kfa3wsyjyikkge3yy3y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors flex items-center"
          >
            Spotify Profile
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <Music className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">Last.fm</h3>
          </div>
          <a
            href="https://www.last.fm/user/dededit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors flex items-center"
          >
            Music Scrobbles
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <Code className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">LeetCode</h3>
          </div>
          <a
            href="https://leetcode.com/potui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors flex items-center"
          >
            Coding Problems
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <Instagram className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">Instagram</h3>
          </div>
          <a
            href="https://instagram.com/whimsywobblefog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors flex items-center"
          >
            @whimsywobblefog
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <ExternalLink className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">Pinterest</h3>
          </div>
          <a
            href="https://www.pinterest.com/sakshamkaushalofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors flex items-center"
          >
            Pinterest Profile
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <ExternalLink className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">Twitter</h3>
          </div>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors flex items-center"
          >
            i forgot my handle 😅
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
