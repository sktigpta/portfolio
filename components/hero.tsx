"use client"

import PixelatedButton from "./pixelated-button"

export default function Hero() {
 

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="pixel-animation">
              <h1 className="text-4xl md:text-6xl font-pixel text-white">
                Hi, I'm <span className="text-pixel-green">Shaktidhar</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-pixel mt-2 text-pixel-blue">Software Development Engineer</h2>
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
              <PixelatedButton variant="secondary">
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
  )
}

