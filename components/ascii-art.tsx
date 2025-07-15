export function AsciiArt({ art }: { art: string }) {
  switch (art) {
    case "about":
      return (
        <div className="flex justify-start my-8">
          <div
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white animate-pulse"
            style={{
              fontFamily: "serif",
              textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)",
              animation: "gothic-glow 3s ease-in-out infinite alternate",
            }}
          >
            𝔭𝔬𝔱𝔲𝔦
          </div>
        </div>
      )
    case "education":
      return (
        <pre className="text-white whitespace-pre overflow-x-auto text-xs sm:text-sm font-mono">
          {`
 _____    _                 _   _             
| ____|__| |_   _  ___ __ _| |_(_) ___  _ __  
|  _| / _\` | | | |/ __/ _\` | __| |/ _ \\| '_ \\ 
| |__| (_| | |_| | (_| (_| | |_| | (_) | | | |
|_____\\__,_|\\__,_|\\___\\__,_|\\__|_|\\___/|_| |_|
                                              
`}
        </pre>
      )
    case "skills":
      return (
        <pre className="text-white whitespace-pre overflow-x-auto text-xs sm:text-sm font-mono">
          {`
 ____  _    _ _ _     
/ ___|| | _(_) | |___ 
\\___ \\| |/ / | | / __|
 ___) |   <| | | \\__ \\
|____/|_|\\_\\_|_|_|___/
                      
`}
        </pre>
      )
    case "experience":
      return (
        <pre className="text-white whitespace-pre overflow-x-auto text-xs sm:text-sm font-mono">
          {`
 _____                      _                      
| ____|_  ___ __   ___ _ __(_) ___ _ __   ___ ___ 
|  _| \\ \\/ / '_ \\ / _ \\ '__| |/ _ \\ '_ \\ / __/ _ \\
| |___ >  <| |_) |  __/ |  | |  __/ | | | (_|  __/
|_____/_/\\_\\ .__/ \\___|_|  |_|\\___|_| |_|\\___\\___|
           |_|                                    
`}
        </pre>
      )
    case "projects":
      return (
        <pre className="text-white whitespace-pre overflow-x-auto text-xs sm:text-sm font-mono">
          {`
 ____            _           _       
|  _ \\ _ __ ___ (_) ___  ___| |_ ___ 
| |_) | '__/ _ \\| |/ _ \\/ __| __/ __|
|  __/| | | (_) | |  __/ (__| |_\\__ \\
|_|   |_|  \\___// |\\___|\\___|\\__|___/
              |__/                   
`}
        </pre>
      )
    case "contact":
      return (
        <pre className="text-white whitespace-pre overflow-x-auto text-xs sm:text-sm font-mono">
          {`
  ____            _             _   
 / ___|___  _ __ | |_ __ _  ___| |_ 
| |   / _ \\| '_ \\| __/ _\` |/ __| __|
| |__| (_) | | | | || (_| | (__| |_ 
 \\____\\___/|_| |_|\\__\\__,_|\\___|\\__|
                                    
`}
        </pre>
      )
    case "links":
      return (
        <pre className="text-white whitespace-pre overflow-x-auto text-xs sm:text-sm font-mono">
          {`
 _     _       _        
| |   (_)_ __ | | _____ 
| |   | | '_ \\| |/ / __|
| |___| | | | |   <\\__ \\
|_____|_|_| |_|_|\\_\\___/
                        
`}
        </pre>
      )
    default:
      return null
  }
}