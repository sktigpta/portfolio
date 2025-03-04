"use client"

import { useState } from "react"
import PixelatedButton from "./pixelated-button"

export default function Hero() {
  const [showVerification, setShowVerification] = useState(false)

  const handleDownloadClick = () => {
    setShowVerification(true) // Show verification modal
  }

  const handleVerify = () => {
    setShowVerification(false) // Close verification modal
    window.open("/doc/Shaktidhar Gupta CV.pdf", "_blank") // Download resume
  }

  return (
    <>
      {showVerification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-green-950 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4 text-white">Are you human?</h2>
            <button
              onClick={handleVerify}
              className="bg-pixel-green text-black px-4 py-2 rounded-lg font-bold cursor-pointer"
            >
              Verify & Download
            </button>
          </div>
        </div>
      )}

      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="pixel-animation">
                <h1 className="text-4xl md:text-6xl font-pixel text-white">
                  Hi, I'm <span className="text-pixel-green">Shaktidhar</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-pixel mt-2 text-pixel-blue">
                  Software Development Engineer
                </h2>
              </div>
              <p className="text-lg font-pixel-text">
                Third-year BTech IT student graduating in 2026. Passionate about creating innovative software solutions
                and interactive digital experiences.
              </p>
              <div className="flex space-x-4">
                <PixelatedButton
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me
                </PixelatedButton>
                <PixelatedButton onClick={handleDownloadClick} variant="secondary">
                  Download CV
                </PixelatedButton>
              </div>
            </div>
            {/* <div className="pixel-portrait-container animate-float">
              <img src="/images/profile-picture.jpg" alt="Shaktidhar Gupta" className="w-full h-full object-cover" />
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
