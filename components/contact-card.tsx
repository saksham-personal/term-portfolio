import React from "react"
import { LucideProps } from "lucide-react"

interface ContactCardProps {
  icon: React.ComponentType<LucideProps>
  title: string
  href?: string
  text: string
}

export function ContactCard({ icon: Icon, title, href, text }: ContactCardProps) {
  const content = href ? (
    <a href={href} target={href.startsWith("mailto:") || href.startsWith("tel:") ? "_self" : "_blank"} rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors break-all">
      {text}
    </a>
  ) : (
    <p className="text-sm">{text}</p>
  )

  return (
    <div className="p-4 border border-primary/20 rounded bg-primary/5 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <h3 className="text-primary font-bold mb-3 flex items-center">
        <Icon className="h-4 w-4 mr-2" />
        {title}
      </h3>
      {content}
    </div>
  )
}