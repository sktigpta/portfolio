import PixelatedButton from "./pixelated-button"
import PixelatedCard from "./pixelated-card"

interface GamesProps {
  setShowGame: (show: boolean) => void
  setCurrentGame: (game: string) => void
}

export default function Games({ setShowGame, setCurrentGame }: GamesProps) {
  const games = [
    {
      name: "Pixel Runner",
      description: "Avoid obstacles and collect pixels in this endless runner game.",
      icon: "🏃",
    },
    {
      name: "Rocket War",
      description: "Engage in space battles with pixel-perfect rocket launches.",
      icon: "🚀",
    },
    {
      name: "Race Runner",
      description: "Race against time in this high-speed pixelated racing game.",
      icon: "🏎️",
    },
    {
      name: "Car Therapy",
      description: "Relax and drive through a soothing pixelated landscape.",
      icon: "🚗",
    },
  ]

  const handleGameClick = (gameName: string) => {
    setCurrentGame(gameName)
    setShowGame(true)
  }

  return (
    <section id="games" className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-pixel text-pixel-green mb-12">Pixelated Games</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {games.map((game) => (
            <PixelatedCard
              key={game.name}
              className="group cursor-pointer hover:border-pixel-green transition-colors duration-300"
              onClick={() => handleGameClick(game.name)}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{game.icon}</span>
                  <h3 className="text-xl font-pixel text-pixel-blue group-hover:text-pixel-green transition-colors">
                    {game.name}
                  </h3>
                </div>
                <p className="font-pixel-text mb-4">{game.description}</p>
                <PixelatedButton
                  onClick={(e) => {
                    e.stopPropagation()
                    handleGameClick(game.name)
                  }}
                  className="w-full"
                >
                  Play Game
                </PixelatedButton>
              </div>
            </PixelatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

