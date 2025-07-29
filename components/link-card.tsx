import React from "react"
import { ExternalLink, LucideProps } from "lucide-react"

interface LinkCardProps {
  icon: React.ComponentType<LucideProps>
  title: string
  href: string
  text: string
}

export function LinkCard({ icon: Icon, title, href, text }: LinkCardProps) {
  return (
    <div className="p-4 border border-primary/20 rounded bg-primary/5 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <div className="flex items-center mb-3">
        <Icon className="h-5 w-5 text-primary mr-2" />
        <h3 className="text-primary font-bold">{title}</h3>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:text-primary transition-colors flex items-center"
      >
        {text}
        <ExternalLink className="h-3 w-3 ml-1" />
      </a>
    </div>
  )
}