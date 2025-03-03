"use client"

import { useState, useEffect } from "react"

export default function PixelatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Hide the default cursor
    document.documentElement.style.cursor = "none"

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.documentElement.style.cursor = "auto"
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        .pixelated-cursor {
          pointer-events: none;
          position: fixed;
          z-index: 9999;
          width: 24px;
          height: 24px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M4 4H8V8H4V4Z' fill='%2300FF00'/%3E%3Cpath d='M8 4H12V8H8V4Z' fill='%2300FF00'/%3E%3Cpath d='M12 4H16V8H12V4Z' fill='%2300FF00'/%3E%3Cpath d='M16 4H20V8H16V4Z' fill='%2300FF00'/%3E%3Cpath d='M4 8H8V12H4V8Z' fill='%2300FF00'/%3E%3Cpath d='M16 8H20V12H16V8Z' fill='%2300FF00'/%3E%3Cpath d='M4 12H8V16H4V12Z' fill='%2300FF00'/%3E%3Cpath d='M16 12H20V16H16V12Z' fill='%2300FF00'/%3E%3Cpath d='M4 16H8V20H4V16Z' fill='%2300FF00'/%3E%3Cpath d='M8 16H12V20H8V16Z' fill='%2300FF00'/%3E%3Cpath d='M12 16H16V20H12V16Z' fill='%2300FF00'/%3E%3Cpath d='M16 16H20V20H16V16Z' fill='%2300FF00'/%3E%3C/svg%3E");
          image-rendering: pixelated;
          transform: translate(-50%, -50%);
          transition: transform 0.05s ease-out;
        }

        .pixelated-cursor.clicked {
          transform: translate(-50%, -50%) scale(0.8);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M4 4H8V8H4V4Z' fill='%23FF0000'/%3E%3Cpath d='M8 4H12V8H8V4Z' fill='%23FF0000'/%3E%3Cpath d='M12 4H16V8H12V4Z' fill='%23FF0000'/%3E%3Cpath d='M16 4H20V8H16V4Z' fill='%23FF0000'/%3E%3Cpath d='M4 8H8V12H4V8Z' fill='%23FF0000'/%3E%3Cpath d='M16 8H20V12H16V8Z' fill='%23FF0000'/%3E%3Cpath d='M4 12H8V16H4V12Z' fill='%23FF0000'/%3E%3Cpath d='M16 12H20V16H16V12Z' fill='%23FF0000'/%3E%3Cpath d='M4 16H8V20H4V16Z' fill='%23FF0000'/%3E%3Cpath d='M8 16H12V20H8V16Z' fill='%23FF0000'/%3E%3Cpath d='M12 16H16V20H12V16Z' fill='%23FF0000'/%3E%3Cpath d='M16 16H20V20H16V16Z' fill='%23FF0000'/%3E%3C/svg%3E");
        }

        a, button, input, textarea, [role="button"] {
          cursor: none !important;
        }
      `}</style>
      <div
        className={`pixelated-cursor ${clicked ? "clicked" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  )
}

