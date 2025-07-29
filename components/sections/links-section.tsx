import { AsciiArt } from "@/components/ascii-art"
import { LinkCard } from "@/components/link-card"
import { Music, Code, Instagram, ExternalLink } from "lucide-react"

const linksData = [
  {
    icon: Music,
    title: "Spotify",
    href: "https://open.spotify.com/user/31xs4tck5kfa3wsyjyikkge3yy3y",
    text: "Spotify Profile",
  },
  {
    icon: Music,
    title: "Last.fm",
    href: "https://www.last.fm/user/dededit",
    text: "Last.fm Profile",
  },
  {
    icon: Code,
    title: "LeetCode",
    href: "https://leetcode.com/potui",
    text: "Leetcode",
  },
  {
    icon: Instagram,
    title: "Instagram",
    href: "https://instagram.com/mdspanpair",
    text: "@mdspanpair",
  },
  {
    icon: ExternalLink,
    title: "Pinterest",
    href: "https://www.pinterest.com/sakshamkaushalofficial",
    text: "Pinterest Profile",
  },
  {
    icon: ExternalLink,
    title: "Twitter",
    href: "https://twitter.com",
    text: "i forgot my handle 😅",
  },
]

export function LinksSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="links" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {linksData.map((link, i) => (
          <LinkCard key={i} {...link} />
        ))}
      </div>
    </div>
  )
}
