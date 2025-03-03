"use client"

import { useState } from "react"
import { Mail, Github, Linkedin } from "lucide-react"
import PixelatedButton from "./pixelated-button"
import PixelatedCard from "./pixelated-card"

export default function Contact() {
  const [showVerification, setShowVerification] = useState(false)

  const handleDownloadClick = () => {
    setShowVerification(true)
  }

  const handleVerify = () => {
    setShowVerification(false)
    window.open("/resume.pdf", "_blank") // Open resume in new tab
  }

  return (
    <>
      {/* Verification Modal */}
      {showVerification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Are you human?</h2>
            <button
              onClick={handleVerify}
              className="bg-pixel-green text-black px-4 py-2 rounded-lg font-bold"
            >
              Verify & Download
            </button>
          </div>
        </div>
      )}

      <section id="contact" className="min-h-screen flex items-center justify-center bg-black">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-5xl font-pixel text-pixel-green mb-12">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* Contact Information */}
              <PixelatedCard className="p-6">
                <h3 className="text-2xl font-pixel text-pixel-blue mb-4">Get In Touch</h3>
                <p className="font-pixel-text mb-6">
                  Feel free to reach out for collaborations, opportunities, or just to say hello!
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:sktigpta@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-pixel text-white hover:text-pixel-green transition-transform transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mr-3" /> sktigpta@gmail.com
                  </a>
                  <a
                    href="https://github.com/sktigpta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-pixel text-white hover:text-pixel-green transition-transform transform hover:scale-105"
                  >
                    <Github className="w-5 h-5 mr-3" /> github.com/sktigpta
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sktigpta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-pixel text-white hover:text-pixel-green transition-transform transform hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5 mr-3" /> linkedin.com/in/sktigpta
                  </a>
                </div>
              </PixelatedCard>

              {/* Resume Download */}
              <PixelatedCard className="p-6">
                <h3 className="text-2xl font-pixel text-pixel-blue mb-4">Resume</h3>
                <p className="font-pixel-text mb-4">
                  Download my resume to learn more about my education, skills, and experience.
                </p>
                <PixelatedButton onClick={handleDownloadClick}>Download Resume</PixelatedButton>
              </PixelatedCard>
            </div>

            {/* Contact Form */}
            <PixelatedCard className="p-6">
              <h3 className="text-2xl font-pixel text-pixel-blue mb-4">Send Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-pixel text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black border-2 border-pixel-blue p-3 font-pixel-text text-white focus:border-pixel-green outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-pixel text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black border-2 border-pixel-blue p-3 font-pixel-text text-white focus:border-pixel-green outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-pixel text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-black border-2 border-pixel-blue p-3 font-pixel-text text-white focus:border-pixel-green outline-none resize-none"
                  ></textarea>
                </div>
                <PixelatedButton type="submit">Send Message</PixelatedButton>
              </form>
            </PixelatedCard>
          </div>
        </div>
      </section>
    </>
  )
}
