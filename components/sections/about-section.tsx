export function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left side - Content */}
      <div className="flex-1 pr-0 md:pr-8 space-y-6">
        {" "}
        <div className="mb-8">
          <h1 className="text-lg sm:text-4xl md:text-5xl font-bold text-white mb-2">Saksham Kaushal</h1>
        </div>
        <div className="space-y-4 text-left">

      
           <p className="text-left">
            Thank you for taking interest in getting to know me better. 
          </p>
          <p>
                       {"Hi! I'm Saksham Kaushal aka potui or whimsy, a passionate developer specializing in creating innovative digital experiences and building robust applications. "}

          </p>
          <p> { "I am passionate about building new things and always eager and open to learn. Whether it's a personal project or a collaborative effort, I love turning ideas into reality. "}
</p>
          <p>
            { "I am a linux enthusiast. When I am not not coding or working, you'll probably find me scrolling interrnet \"blogs\" or hackernews while listening to my favourite music, particularly eletronic. "}
          </p>

          <p>
           { "My fav artists include : Aphex Twin, Boards of Canada, Susume Yokata, SquarePusher, Pink Floyd, Radiohead, Yeat, Chief Keef, CAS. " } 
          {"  I particularly enjoy the works of Bach and Tchaikovsky, fav ones being Goldberg Variations, Nutcracker Suite and Valse Sentimentale. "}
          </p>

          <p>
            Try the command <code className="bg-primary/10 px-2 py-1 rounded text-xs">ncmpcpp</code> in the terminal 😉
          </p>




          <div className="mt-6 p-4 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold mb-3">Quick Facts:</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Location:</span>
                <span>Delhi, India</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Education:</span>
                <span>Major in Software Engineering, Minor in Data Analytics</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Specialty:</span>
                <span>Full-Stack Development, GenAI, Web Scraping</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Interests:</span>
                <span>Technology, Skincare, Fitness, Music, Finance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right side - Gothic  */}
      <div className="flex-shrink-0 flex items-center justify-center w-full md:w-64 mt-8 md:mt-0">
        {" "}
        <div
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-white gothic-text"
          style={{
            fontFamily: "serif",
            textShadow:
              "0 0 20px rgba(139, 69, 19, 0.8), 0 0 40px rgba(139, 69, 19, 0.6), 0 0 60px rgba(139, 69, 19, 0.4)",
            filter: "drop-shadow(0 0 10px rgba(139, 69, 19, 0.5))",
          }}
        >
          𝖕𝖔𝖙𝖚𝖎
        </div>
      </div>
    </div>
  )
}
