import { AsciiArt } from "@/components/ascii-art"
import { ProjectCard } from "@/components/project-card"
import { link } from "fs"
import { title } from "process"

const projects = [
  {
    title: "PDFLion",
    link: "https://pdflion.xyz",
    introduction: "A powerful tool for all your PDF needs.",
    points: [
      "Convert PDFs to notes, flashcards, summaries",
      "Credit system for premium features",
      "Payment integration with ...",
    ],
    technologies: ["React", "Next.js", "Vercel", "Node.js", "Express.js", "RabbitMQ", "PostgreSQL"],
  },
  {
    title: "Evo2 Variant Analysis",
    link: "",
    introduction: "An in-depth analysis of Evo2 variants.",
    points: [
      "Track and analyze genetic variations.",
      "Visualize variant data with interactive charts.",
      "Collaborate with other researchers.",
    ],
    technologies: ["JavaScript", "Tailwind CSS", "D3.js", "Firebase"],
  },
  {
    title: "Forever Ecom",
    link: "",
    introduction: "An e-commerce platform for sustainable products.",
    points: [
      "Browse and purchase eco-friendly products.",
      "Support local artisans and businesses.",
      "Track your carbon footprint with every purchase.",
    ],
    technologies: ["React", "NodeJS", "Stripe", "MongoDB"],  
  },
  {
    title: "CasePrep AI",
    link: "",
    introduction: "AI-powered case preparation tool for lawyers.",
    points: [
      "Automate document review and analysis.",
      "Generate case summaries and insights.",
      "Collaborate with team members in real-time.",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "React"],  
  },
  {
    title: "Gmail Account Creator",
    link: "",
    introduction: "Automate the creation of Gmail accounts.",
    points: [
      "Create multiple Gmail accounts quickly.",
      "Bypass CAPTCHA challenges with advanced techniques.",
      "Manage accounts with a user-friendly interface.",
    ],
    technologies: ["Python", "Selenium", "Flask", "SQLite"],  
  },
  {
    title: "pyaraCensorBot",
    link: "",
    introduction: "A bot for censoring text in images.",
    points: [
      "Detect and blur sensitive information in images.",
      "Support for multiple image formats.",
      "Easy integration with existing workflows.",
    ],
    technologies: ["Python", "OpenCV", "Flask", "TensorFlow"],
  }, 
  {
    title: "AI Podcast Clipper",
    link: "",
    introduction: "AI-powered tool for clipping podcast episodes.",
    points: [
      "Automatically detect and clip highlights from podcast episodes.",
      "Support for multiple audio formats.",
      "Easy integration with popular podcast platforms.",
    ],
    technologies: ["Python", "Pydub", "Flask", "TensorFlow"],   
  },
  {
    title: "Course Registrar",
    link: "#",
    introduction: "A tool for managing course registrations.",
    points: [
      "Register for courses and track your progress.",
      "View course schedules and materials.",
      "Collaborate with classmates and instructors.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],  
  },
  {
    title: "Vibe - Lovable Clone",
    link: "#",
    introduction: "A clone of the popular Vibe app.",
    points: [
      "Experience a similar interface and features.",
      "Enjoy seamless integration with your existing Vibe account.",
      "Discover new content and recommendations.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],  
  },
  // {
  //   title: "ScrapeFlow",
  //   link: "#",
  //   introduction: "A web scraping tool for data extraction.",
  //   points: [
  //     "Extract data from websites with ease.",
  //     "Support for multiple data formats.",
  //   ],
  //   technologies: ["Python", "Beautiful Soup", "Scrapy", "Pandas"], 
  // },
  // {
  //   title: "ElevenLabs Clone",
  //   link: "#",
  //   introduction: "A clone of the ElevenLabs voice synthesis platform.",
  //   points: [
  //     "Generate high-quality voiceovers from text.",
  //     "Support for multiple languages and accents.",
  //     "Easy integration with existing applications.",
  //   ],
  //   technologies: ["Python", "Flask", "TensorFlow", "React"],
  // },
  {
    title: "OpenCV Sudoku Solver",
    link: "#",
    introduction: "A Sudoku solver using OpenCV.",
    points: [
      "Automatically detect and solve Sudoku puzzles.",
      "Support for various Sudoku formats.",
      "Visualize the solution with interactive graphics.",
    ],
    technologies: ["Python", "OpenCV", "NumPy", "Flask"], 
  },
  {
    title: "SQL Datawarehouse Project",
    link: "#",
    introduction: "A project for building a data warehouse using SQL.",
    points: [
      "Design and implement a star schema for the data warehouse.",
      "Develop ETL processes for data extraction, transformation, and loading.",
      "Create interactive dashboards and reports for data analysis.",
    ],
    technologies: ["SQL", "PostgreSQL", "Apache Airflow", "Tableau"],
  },
  {
    title: "Chat and Video Call App",
    link: "#",
    introduction: "A real-time chat and video call application.",
    points: [
      "Send messages and make video calls with friends and family.",
      "Support for group chats and video conferences.",
      "End-to-end encryption for secure communication.",
    ],
    technologies: ["React", "Node.js", "WebRTC", "Socket.io"],  
  },
  // {
  //   title: "Python anti-fingerprinting library",
  //   link: "#",
  //   introduction: "A library to help protect user privacy by reducing browser fingerprinting.",
  //   points: [
  //     "Randomize browser characteristics to prevent tracking.",
  //     "Support for multiple browsers and platforms.",
  //     "Easy integration with existing web applications.",
  //   ],
  //   technologies: ["Python", "Flask", "Selenium", "Beautiful Soup"],
  // },
  // {
  //   title: "tempmail SMTP protocol",
  //   link: "#",
  //   introduction: "A temporary email service for privacy protection.",
  //   points: [
  //     "Create temporary email addresses for one-time use.",
  //     "Receive emails without revealing your personal address.",
  //   ],
  //   technologies: ["Python", "Flask", "Selenium", "Beautiful Soup"],
  // },
  // {
  //   title: "Youtube Clone",
  //   link: "#",
  //   introduction: "A clone of the popular YouTube platform.",
  //   points: [
  //     "Upload and share videos with ease.",
  //     "Discover new content through personalized recommendations.",
  //     "Engage with other users through comments and likes.",
  //   ],
  //   technologies: ["React", "Node.js", "MongoDB", "Express.js"],  
  // },
  // {
  //   title: "AI Agents",
  //   link: "#",
  //   introduction: "A platform for creating and managing AI agents.",
  //   points: [
  //     "Build custom AI agents for various tasks.",
  //   ],
  //   technologies: ["Llamaindex", "Langchain", "Langgraph", "RAG"],
  // },
  // {
  //   title: "Scalable URL Shortener",
  //   link: "#",
  //   introduction: "A URL shortening service with advanced features.",
  //   points: [
  //     "Generate short links with custom aliases.",
  //     "Track link analytics and performance metrics.",
  //     "Integrate with popular messaging platforms.",
  //   ],
  //   technologies: ["Node.js", "Express.js", "MongoDB", "Redis"],
  // },
  // {
  //   title: "Hinge clone - dating app",
  //   link: "#",
  //   introduction: "A clone of the popular Hinge dating app.",
  //   points: [
  //     "Create a profile and match with potential partners.",
  //     "Engage in meaningful conversations with matches.",
  //     "Discover new connections through personalized recommendations.",
  //   ],
  //   technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  // },
  

]

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  )
}
