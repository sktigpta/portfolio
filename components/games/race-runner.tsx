"use client"

import { useEffect, useRef, useState } from "react"
import PixelatedButton from "../pixelated-button"

export default function RaceRunner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 400

    // Game loop
    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw game elements here
      ctx.fillStyle = "#FFFFFF"
      ctx.font = "20px 'Press Start 2P', monospace"
      ctx.fillText(`Score: ${score}`, 20, 30)

      // Request next frame
      requestAnimationFrame(gameLoop)
    }

    gameLoop()

    return () => {
      // Clean up
    }
  }, [gameStarted, score])

  const startGame = () => {
    setGameStarted(true)
    setGameOver(false)
    setScore(0)
  }

  return (
    <div className="flex flex-col items-center">
      {!gameStarted && !gameOver ? (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-pixel text-pixel-green mb-4">Race Runner</h3>
          <p className="font-pixel-text mb-6">Race against time in this high-speed pixelated racing game!</p>
          <PixelatedButton onClick={startGame}>Start Game</PixelatedButton>
        </div>
      ) : gameOver ? (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-pixel text-pixel-red mb-4">Game Over!</h3>
          <p className="font-pixel-text mb-2">Your score: {score}</p>
          <PixelatedButton onClick={startGame} className="mt-4">
            Play Again
          </PixelatedButton>
        </div>
      ) : (
        <div className="relative">
          <canvas
            ref={canvasRef}
            className="border-4 border-pixel-green"
            style={{ imageRendering: "pixelated" }}
          ></canvas>
        </div>
      )}
    </div>
  )
}

