"use client"

import { useState } from "react"
import Link from "next/link"
import PixelatedButton from "./pixelated-button"
import { Download, Menu, X } from "lucide-react"
import PixelatedCard from "./pixelated-card"


interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [showVerification, setShowVerification] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleDownloadClick = () => {
    setShowVerification(true)
  }

  const handleVerify = () => {
    setShowVerification(false)
    window.open("/doc/resume.pdf", "_blank")
  }

  return (
    <>
      {/* Verification Modal */}
      {showVerification && (
        <PixelatedCard className="p-6">
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
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
              </PixelatedCard>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b-4 border-pixel-green">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-pixel-green text-2xl font-pixel">Shakti</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center space-x-6">
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

          {/* Resume Button */}
          <div className="hidden md:block">
            <PixelatedButton onClick={handleDownloadClick}>
              <Download className="w-4 h-4 mr-2" />
              Resume
            </PixelatedButton>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-b-4 border-pixel-green">
            <div className="flex flex-col items-center py-4 space-y-4">
              {["home", "about", "skills", "projects", "games", "contact"].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={`font-pixel uppercase ${
                    activeSection === section ? "text-pixel-green" : "text-white"
                  } hover:text-pixel-green transition-colors`}
                  onClick={() => setMenuOpen(false)}
                >
                  {section}
                </Link>
              ))}
              <PixelatedButton onClick={handleDownloadClick}>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </PixelatedButton>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
