import { AsciiArt } from "@/components/ascii-art"
import { ContactCard } from "@/components/contact-card"
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from "lucide-react"

const contactData = [
  {
    icon: Mail,
    title: "Email",
    href: "mailto:saksham.kaushal.official@gmail.com",
    text: "saksham.kaushal.official@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    href: "tel:+919289027684",
    text: "+91 9289027684",
  },
  {
    icon: MapPin,
    title: "Location",
    text: "Delhi, India",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sakshamkaushal/",
    text: "linkedin.com/in/sakshamkaushal",
  },
  {
    icon: Github,
    title: "GitHub",
    href: "https://github.com/saksham-personal",
    text: "github.com/saksham-personal",
  },
  {
    icon: MessageSquare,
    title: "Discord",
    href: "https://discord.com/",
    text: "potui__",
  },
]

export function ContactSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="contact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactData.map((contact, i) => (
          <ContactCard key={i} {...contact} />
        ))}
      </div>
    </div>
  )
}
