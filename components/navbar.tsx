"use client"

import { useState } from "react"
import Link from "next/link"
import PixelatedButton from "./pixelated-button"
import { Download } from "lucide-react"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [showVerification, setShowVerification] = useState(false)

  const handleDownloadClick = () => {
    setShowVerification(true) // Show verification modal
  }

  const handleVerify = () => {
    setShowVerification(false) // Close verification modal
    window.open("/doc/resume.pdf", "_blank") // Download resume
  }

  return (
    <>
      {showVerification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-green-950 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4 text-white">Are you human?</h2>
            <button
              onClick={handleVerify}
              className="bg-pixel-green text-black px-4 py-2 rounded-lg font-bold"
            >
              Verify & Download
            </button>
          </div>
        </div>
      )}

      <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b-4 border-pixel-green">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-pixel-green text-2xl font-pixel">SHAKTIDHAR.DEV</div>
            <div className="flex-grow flex justify-center space-x-6">
              {["home", "about", "skills", "projects", "games", "contact"].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={`font-pixel uppercase ${
                    activeSection === section ? "text-pixel-green" : "text-white"
                  } hover:text-pixel-green transition-colors`}
                >
                  {section}
                </Link>
              ))}
            </div>
            <PixelatedButton onClick={handleDownloadClick}>
              <Download className="w-4 h-4 mr-2" />
              Resume
            </PixelatedButton>
          </div>
        </div>
      </nav>
    </>
  )
}
