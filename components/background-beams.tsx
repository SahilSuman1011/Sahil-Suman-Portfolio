"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"  // Correct import from next-themes

export const BackgroundBeams = () => {
  const { theme } = useTheme()  // Access useTheme directly from next-themes
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const beams = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
    }))

    const animate = () => {
      ctx.fillStyle = theme === "dark" ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.9)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        beam.x += beam.dx
        beam.y += beam.dy

        if (beam.x < 0 || beam.x > canvas.width) beam.dx *= -1
        if (beam.y < 0 || beam.y > canvas.height) beam.dy *= -1

        ctx.beginPath()
        ctx.arc(beam.x, beam.y, beam.radius, 0, Math.PI * 2)
        ctx.fillStyle = theme === "dark" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [theme])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ width: "100%", height: "100%" }} />
}
