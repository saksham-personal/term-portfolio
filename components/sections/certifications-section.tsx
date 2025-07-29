import { AsciiArt } from "@/components/ascii-art"
import { Award, Trophy, Flag } from "lucide-react"

export function CertificationsSection() {
  return (

    <div className="space-y-4">
      <AsciiArt art="certifications" /> 
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl font-bold text-center">To Do</h2>
        <p className="text-gray-600 text-sm text-center max-w-md">
          To Do 
        </p>

      </div>
    </div>
  ) 
}
