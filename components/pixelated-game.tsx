"use client"

import { useEffect, useRef, useState } from "react"
import PixelatedButton from "./pixelated-button"

export default function PixelatedGame() {
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

    // Game variables
    let animationFrameId: number
    let playerX = 50
    let playerY = canvas.height - 50
    const playerSize = 20
    const playerSpeed = 5
    let jumping = false
    let jumpVelocity = 0
    const gravity = 0.5
    const obstacles: { x: number; y: number; width: number; height: number }[] = []
    const obstacleSpeed = 3
    let frameCount = 0
    let localScore = 0

    // Controls
    const keys: { [key: string]: boolean } = {}

    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key] = true
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    // Game loop
    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw ground
      ctx.fillStyle = "#00FF00"
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.fillRect(i, canvas.height - 20, 20, 20)
      }

      // Update player
      if (keys["ArrowLeft"] && playerX > 0) {
        playerX -= playerSpeed
      }
      if (keys["ArrowRight"] && playerX < canvas.width - playerSize) {
        playerX += playerSpeed
      }
      if ((keys["ArrowUp"] || keys[" "]) && !jumping) {
        jumping = true
        jumpVelocity = -12
      }
      if (keys["ArrowDown"] && !jumping) {
        // Duck or speed up falling
        playerY += 5
      }

      // Apply gravity
      if (jumping) {
        playerY += jumpVelocity
        jumpVelocity += gravity

        if (playerY >= canvas.height - playerSize - 20) {
          playerY = canvas.height - playerSize - 20
          jumping = false
        }
      }

      // Draw player (pixelated character)
      ctx.fillStyle = "#00AAFF"
      // Head
      ctx.fillRect(playerX, playerY, playerSize, playerSize)
      // Eyes
      ctx.fillStyle = "#000"
      ctx.fillRect(playerX + 5, playerY + 5, 3, 3)
      ctx.fillRect(playerX + 12, playerY + 5, 3, 3)
      // Mouth
      ctx.fillRect(playerX + 5, playerY + 12, 10, 3)

      // Generate obstacles
      if (frameCount % 100 === 0) {
        const height = 20 + Math.random() * 40
        obstacles.push({
          x: canvas.width,
          y: canvas.height - height - 20,
          width: 20,
          height: height,
        })
      }

      // Update and draw obstacles
      for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i]
        obstacle.x -= obstacleSpeed

        // Draw obstacle
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height)

        // Check collision
        if (
          playerX < obstacle.x + obstacle.width &&
          playerX + playerSize > obstacle.x &&
          playerY < obstacle.y + obstacle.height &&
          playerY + playerSize > obstacle.y
        ) {
          setGameOver(true)
          cancelAnimationFrame(animationFrameId)
          return
        }

        // Remove obstacles that are off-screen
        if (obstacle.x + obstacle.width < 0) {
          obstacles.splice(i, 1)
          i--
          localScore++
          setScore(localScore)
        }
      }

      // Draw score
      ctx.fillStyle = "#FFFFFF"
      ctx.font = "20px 'Press Start 2P', monospace"
      ctx.fillText(`Score: ${localScore}`, 20, 30)

      frameCount++
      animationFrameId = requestAnimationFrame(gameLoop)
    }

    gameLoop()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [gameStarted])

  const startGame = () => {
    setGameStarted(true)
    setGameOver(false)
    setScore(0)
  }

  return (
    <div className="flex flex-col items-center">
      {!gameStarted && !gameOver ? (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-pixel text-pixel-green mb-4">Pixel Runner</h3>
          <p className="font-pixel-text mb-6">
            Use arrow keys (left, right, up, down) to move and spacebar to jump. Avoid the obstacles!
          </p>
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
          <div className="absolute top-2 right-2">
            <p className="font-pixel text-white">Controls: Arrow Keys or Space</p>
          </div>
        </div>
      )}
    </div>
  )
}

