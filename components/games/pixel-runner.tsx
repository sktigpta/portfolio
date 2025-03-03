"use client";

import { useEffect, useRef, useState } from "react";
import PixelatedButton from "../pixelated-button";

export default function PixelRunner() {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playerY, setPlayerY] = useState(300);
  const [playerX, setPlayerX] = useState(50);
  const [velocityY, setVelocityY] = useState(0);
  const [velocityX, setVelocityX] = useState(0);
  const gravity = 1;
  const jumpStrength = -15;
  const moveSpeed = 5;
  const gameDuration = 120000; // 2 minutes in milliseconds
  let obstacles = [];
  let frame = 0;
  let animationFrameId;
  let gameStartTime;

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 400;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp" && playerY === 300) {
        setVelocityY(jumpStrength);
      }
      if (e.key === "ArrowLeft") {
        setVelocityX(-moveSpeed);
      }
      if (e.key === "ArrowRight") {
        setVelocityX(moveSpeed);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setVelocityX(0);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = "#f7f7f7";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ground
      ctx.fillStyle = "#888";
      ctx.fillRect(0, 350, canvas.width, 50);

      // Player
      setVelocityY((v) => v + gravity);
      setPlayerY((y) => Math.min(y + velocityY, 300));
      setPlayerX((x) => Math.max(0, Math.min(x + velocityX, canvas.width - 30)));

      ctx.fillStyle = "#555";
      ctx.fillRect(playerX, playerY, 30, 30);

      // Obstacles
      if (frame % 100 === 0) {
        obstacles.push({ x: canvas.width, width: 30, height: 30 });
      }

      obstacles = obstacles.map((obs) => ({ ...obs, x: obs.x - 5 }));
      obstacles = obstacles.filter((obs) => obs.x + obs.width > 0);

      ctx.fillStyle = "#000";
      obstacles.forEach((obs) => {
        ctx.fillRect(obs.x, 320, obs.width, obs.height);
      });

      // Collision Detection
      obstacles.forEach((obs) => {
        if (
          playerX < obs.x + obs.width &&
          playerX + 30 > obs.x &&
          playerY + 30 > 320
        ) {
          setGameOver(true);
          setGameStarted(false);
        }
      });

      // Score
      setScore((s) => s + 1);
      frame++;

      // Check Game Duration
      if (Date.now() - gameStartTime >= gameDuration) {
        setGameOver(true);
        setGameStarted(false);
      }

      if (!gameOver) {
        animationFrameId = requestAnimationFrame(gameLoop);
      }
    };

    gameStartTime = Date.now();
    gameLoop();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameStarted, gameOver, velocityX]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setPlayerY(300);
    setPlayerX(50);
    setVelocityY(0);
    setVelocityX(0);
    obstacles = [];
    frame = 0;
  };

  return (
    <div className="flex flex-col items-center">
      {!gameStarted && !gameOver ? (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-pixel text-pixel-green mb-4">
            Pixel Runner
          </h3>
          <p className="font-pixel-text mb-6">
            Run and jump over obstacles to survive!
          </p>
          <PixelatedButton onClick={startGame}>Start Run</PixelatedButton>
        </div>
      ) : gameOver ? (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-pixel text-pixel-red mb-4">Game Over</h3>
          <p className="font-pixel-text mb-2">Score: {score}</p>
          {Date.now() - gameStartTime >= gameDuration ? (
            <p className="font-pixel-text mb-2">
              Congratulations! You've earned a reward!
            </p>
          ) : null}
          <PixelatedButton onClick={startGame} className="mt-4">
            Retry
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
  );
}
