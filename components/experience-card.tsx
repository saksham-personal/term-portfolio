import React from "react"

interface ExperienceCardProps {
  role: string
  company: string
  duration: string
  points: string[]
}

export function ExperienceCard({ role, company, duration, points }: ExperienceCardProps) {
  return (
    <div className="relative pl-5 border-l border-primary/30 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
      <div className="mb-1">
        <h3 className="text-primary font-bold">{role}</h3>
        <p className="text-xs text-muted-foreground">{company} | {duration}</p>
      </div>
      <ul className="text-sm space-y-1 list-disc pl-4">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  )
}