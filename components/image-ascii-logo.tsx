"use client"

export function ImageAsciiLogo() {
  return (
    <div className="bg-black p-2 font-mono text-white">
      <pre className="text-white whitespace-pre-wrap break-words text-xs sm:text-sm md:text-base">
        {`
$ echo "POTUI"
POTUI

$ whoami
potui@portfolio - Saksham Kaushal

$ pwd
/home/potui/portfolio

$ ls
about  education  skills  experience  projects  contact

$ ncmpcpp
Music Player Daemon (MPD) client
Connecting to MPD server...
`}
      </pre>
      <p className="text-white mt-2 text-xs sm:text-sm md:text-base">
        To download my resume -{'>'}{' '}
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 glowing-green-link"
        >
          click here
        </a>
      </p>
    </div>
  )
}
