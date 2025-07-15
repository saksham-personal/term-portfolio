import { AsciiArt } from "@/components/ascii-art"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="space-y-6">
        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center">
            <h3 className="text-primary font-bold">PDFLion</h3>
            <span className="mx-2 text-muted-foreground">—</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
              View Project
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
          <p className="text-sm mb-2">
            Introduction
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: Python, AWS
          </p>
        </div>

        <div className="p-3 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center">
            <h3 className="text-primary font-bold">Evo2 Variant Analysis</h3>
            <span className="mx-2 text-muted-foreground">—</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
              View Project
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
          <p className="text-sm mb-2">
            Introduction
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            Technologies: JavaScript, Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}
