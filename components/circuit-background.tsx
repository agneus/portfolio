"use client"

import { useEffect, useRef } from "react"

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawCircuitPattern()
    }

    // Draw circuit pattern
    const drawCircuitPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = "#0f1f0f"
      ctx.lineWidth = 1

      const gridSize = 30
      const rows = Math.ceil(canvas.height / gridSize)
      const cols = Math.ceil(canvas.width / gridSize)

      // Draw horizontal lines
      for (let i = 0; i < rows; i++) {
        const y = i * gridSize
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw circuit nodes and connections
      ctx.fillStyle = "#0f1f0f"
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (Math.random() > 0.7) {
            const x = j * gridSize
            const y = i * gridSize

            // Draw node
            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fill()

            // Draw random connections
            if (Math.random() > 0.5) {
              ctx.beginPath()
              ctx.moveTo(x, y)

              // Decide direction
              const direction = Math.floor(Math.random() * 4)
              let endX = x
              let endY = y

              switch (direction) {
                case 0: // right
                  endX = x + gridSize * (Math.floor(Math.random() * 3) + 1)
                  break
                case 1: // down
                  endY = y + gridSize * (Math.floor(Math.random() * 3) + 1)
                  break
                case 2: // left
                  endX = x - gridSize * (Math.floor(Math.random() * 3) + 1)
                  break
                case 3: // up
                  endY = y - gridSize * (Math.floor(Math.random() * 3) + 1)
                  break
              }

              ctx.lineTo(endX, endY)
              ctx.stroke()
            }
          }
        }
      }
    }

    // Initial setup
    resizeCanvas()

    // Handle window resize
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full opacity-30" />
}

