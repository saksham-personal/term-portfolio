import { AsciiArt } from "@/components/ascii-art"

export function ExperienceSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="experience" />

   
        <div className="relative pl-5 border-l border-primary/30">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
          <div className="mb-1">
            <h3 className="text-primary font-bold">Automation Intern</h3>
            <p className="text-xs text-muted-foreground">Saarthi Erickshaw, Delhi, India | May 2024 - August 2024</p>
          </div>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>
             Developed a tool using Playwright to automate VAHAAN 4.0 RTO Registrations.
            </li>
            <li>Trained a custom CNN to bypass the captcha.</li>
            <li>Reduced the need of manual entry by 70%</li>
          </ul>
        </div>
      </div>
    
  )
}
