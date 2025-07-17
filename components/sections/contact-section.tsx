import { AsciiArt } from "@/components/ascii-art"
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from "lucide-react"

export function ContactSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="contact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold mb-3 flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </h3>
          <a href="mailto:saksham.kaushal.official@gmail.com" className="text-sm hover:text-primary transition-colors break-all">
          saksham.kaushal.official@gmail.com
          </a>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold mb-3 flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            Phone
          </h3>
          <a href="tel:+919289027684" className="text-sm hover:text-primary transition-colors">
            +91 9289027684
          </a>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold mb-3 flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            Location
          </h3>
          <p className="text-sm">Delhi, India</p>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold mb-3 flex items-center">
            <Linkedin className="h-4 w-4 mr-2" />
            LinkedIn
          </h3>
          <a
            href="https://www.linkedin.com/in/sakshamkaushal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors break-all"
          >
            linkedin.com/in/sakshamkaushal
          </a>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold mb-3 flex items-center">
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </h3>
          <a
            href="https://github.com/saksham-personal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors"
          >
            github.com/saksham-personal
          </a>
        </div>


        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold mb-3 flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            Discord
          </h3>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors"
          >
            potui__
          </a>
        </div>
        
      </div>


    </div>
  )
}
