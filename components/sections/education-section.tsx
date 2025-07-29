import { AsciiArt } from "@/components/ascii-art"
import { EducationCard } from "@/components/education-card"

const educationData = [
  {
    university: "Delhi Technological University (Formerly DCE)",
    degree: "B.Tech in Software Engineering, Minor in Data Analytics | CGPA: 8.7",
    duration: "2022-2026",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Object Oriented Design",
      "Machine Learning",
      "Databases",
      "Computer Networking",
      "Operating System",
      "Compilers",
      "Software Testing",
    ],
    otherCoursework: [
      "Introduction to Biological Sciences",
      "Introduction to Economics",
      "Microeconomics",
      "Money, Banking and Finance",
      "Indian Economy",
    ],
  },
]

export function EducationSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="education" />

      <div className="space-y-6">
        {educationData.map((edu, i) => (
          <EducationCard key={i} {...edu} />
        ))}
      </div>
    </div>
  )
}
