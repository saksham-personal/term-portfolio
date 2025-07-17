import { AsciiArt } from "@/components/ascii-art"

export function EducationSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="education" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold">Delhi Technological University (Formerly DCE)</h3>
          <p className="text-sm">B.Tech in Software Engineering, Minor in Data Analytics | CGPA: 8.7</p>
          <p className="text-xs text-muted-foreground">2022-2026</p>
          <div className="mt-2">
            <h4 className="text-sm font-semibold">Relevant Coursework:</h4>
            <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Data Structures & Algorithms</li>
              <li>Object Oriented Design</li>
              <li>Machine Learning</li>
              <li>Databases</li>
              <li>Computer Networking</li>
              <li>Operating System</li>
              <li>Compilers</li>
              <li>Software Testing</li>
              </ul>

              <h4 className="text-sm font-semibold mt-4">Other Coursework:</h4>
              <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
              <li>Introduction to Biological Sciences</li>
              <li>Introduction to Economics</li>
              <li>Microeconomics</li>
              <li>Money, Banking and Finance</li>
              <li>Indian Economy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
