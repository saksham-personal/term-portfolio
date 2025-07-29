import { AsciiArt } from "@/components/ascii-art"
import { Code, Shield, Database, Cloud, BrainCircuit, AreaChart } from "lucide-react"

export function SkillsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <Code className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">Programming Languages</h3>
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">C++</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">JavaScript</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Python</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Bash</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Java</span>
            </div>
          </div>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <Shield className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">Tools</h3>
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Postman</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Vim</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Burp Suite</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">VS Code</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Sublime Text</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Playwright</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Selenium</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Pydoll</span>

            </div>
          </div>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <Cloud className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">Cloud & DevOps</h3>
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">AWS</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Docker</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Git</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Nginx</span>

            </div>
          </div>
        </div>

        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <Database className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">Databases & Query</h3>
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">MySQL</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">MongoDB</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">SQLite</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">PostgreSQL</span>
            </div>
          </div>
        </div>

        
        <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <BrainCircuit className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">GenAI</h3>
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Llamaindex</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Langchain</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Langgraph</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Tensorflow</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Qdrant</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">OpenAI API</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Gemini API</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Modal</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Livekit</span>
               <span className="px-2 py-1 bg-primary/10 rounded text-xs">CrewAI</span>

            </div>
          </div>
        </div>


      <div className="p-4 border border-primary/20 rounded bg-primary/5">
          <div className="flex items-center mb-3">
            <AreaChart className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-primary font-bold">Data Analytics</h3>
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Numpy</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Pandas</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Tableau</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Excel</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">R</span>

            </div>
          </div>
        </div>

       </div>
    
      

      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 border border-primary/20 rounded bg-primary/5">
            <h4 className="font-semibold mb-2">Frameworks</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">React</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">NextJS</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">NodeJS</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">FastAPI</span>

            </div>
          </div>
          <div className="p-3 border border-primary/20 rounded bg-primary/5">
            <h4 className="font-semibold mb-2">Learning</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Vector DBs</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Transformers</span>
              <span className="px-2 py-1 bg-primary/10 rounded text-xs">Go</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
