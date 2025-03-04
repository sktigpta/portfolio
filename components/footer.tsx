import { Mail, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-pixel-green py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-pixel-green text-xl font-pixel mb-4 md:mb-0">Shakti</div>
          <div className="flex space-x-4">
            <a href="mailto:sktigpta@gmail.com" className="text-white hover:text-pixel-green">
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sktigpta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pixel-green"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sktigpta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pixel-green"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="text-sm font-pixel-text text-white mt-4 md:mt-0">
            © 2024 Shaktidhar Gupta. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

