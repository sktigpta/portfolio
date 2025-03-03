"use client"

import { useState, useEffect, useCallback } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Games from "@/components/games"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import PixelRunner from "@/components/games/pixel-runner"
import RocketWar from "@/components/games/rocket-war"
import RaceRunner from "@/components/games/race-runner"
import CarTherapy from "@/components/games/car-therapy"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [showGame, setShowGame] = useState(false)
  const [currentGame, setCurrentGame] = useState("")

  const handleScroll = useCallback(() => {
    const sections = ["home", "about", "skills", "projects", "games", "contact"]
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const renderGame = () => {
    switch (currentGame) {
      case "Pixel Runner":
        return <PixelRunner />
      case "Rocket War":
        return <RocketWar />
      case "Race Runner":
        return <RaceRunner />
      case "Car Therapy":
        return <CarTherapy />
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-black text-white pixelated-bg">
      <Navbar activeSection={activeSection} />
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Games setShowGame={setShowGame} setCurrentGame={setCurrentGame} />
      <Contact />
      <Footer />

      {showGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-black border-4 border-pixel-green p-4 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-pixel text-pixel-green">{currentGame}</h3>
              <button onClick={() => setShowGame(false)} className="text-white hover:text-pixel-red font-pixel">
                [X] CLOSE
              </button>
            </div>
            <div className="game-container">{renderGame()}</div>
          </div>
        </div>
      )}
    </main>
  )
}

