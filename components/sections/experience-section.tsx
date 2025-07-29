import { AsciiArt } from "@/components/ascii-art"
import { ExperienceCard } from "@/components/experience-card"

const experienceData = [
  {
    role: "Automation Intern",
    company: "Saarthi Erickshaw, Delhi, India",
    duration: "May 2024 - August 2024",
    points: [
      "Developed a tool using Playwright to automate VAHAAN 4.0 RTO Registrations.",
      "Trained a custom CNN to bypass the captcha.",
      "Reduced the need of manual entry by 70%",
    ],
  },
]

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="experience" />

      <div className="space-y-6">
        {experienceData.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </div>
  )
}
