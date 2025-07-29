import React from "react"

interface EducationCardProps {
  university: string
  degree: string
  duration: string
  relevantCoursework: string[]
  otherCoursework: string[]
}

export function EducationCard({
  university,
  degree,
  duration,
  relevantCoursework,
  otherCoursework,
}: EducationCardProps) {
  return (
    <div className="p-3 border border-primary/20 rounded bg-primary/5 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <h3 className="text-primary font-bold">{university}</h3>
      <p className="text-sm">{degree}</p>
      <p className="text-xs text-muted-foreground">{duration}</p>
      <div className="mt-2">
        <h4 className="text-sm font-semibold">Relevant Coursework:</h4>
        <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
          {relevantCoursework.map((course, i) => (
            <li key={i}>{course}</li>
          ))}
        </ul>

        <h4 className="text-sm font-semibold mt-4">Other Coursework:</h4>
        <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
          {otherCoursework.map((course, i) => (
            <li key={i}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}