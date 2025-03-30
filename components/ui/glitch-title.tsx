"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlitchTitleProps {
  text: string
  className?: string
  isGlitching?: boolean
  color?: string
}

export function GlitchTitle({ text, className, isGlitching = false, color = "text-white" }: GlitchTitleProps) {
  const [glitchText1, setGlitchText1] = useState("")
  const [glitchText2, setGlitchText2] = useState("")

  // Generate random glitch text
  useEffect(() => {
    const generateGlitchText = () => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?[]\\;',./~`"
      let result1 = ""
      let result2 = ""

      for (let i = 0; i < text.length; i++) {
        if (Math.random() > 0.7) {
          result1 += chars.charAt(Math.floor(Math.random() * chars.length))
        } else {
          result1 += text[i]
        }

        if (Math.random() > 0.7) {
          result2 += chars.charAt(Math.floor(Math.random() * chars.length))
        } else {
          result2 += text[i]
        }
      }

      setGlitchText1(result1)
      setGlitchText2(result2)
    }

    generateGlitchText()

    // Regenerate glitch text periodically when glitching
    let interval: NodeJS.Timeout
    if (isGlitching) {
      interval = setInterval(generateGlitchText, 100)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [text, isGlitching])

  return (
    <div className={cn("relative inline-block font-mono", className)}>
      {/* Main text */}
      <span className={cn("relative z-10", color)}>{text}</span>

      {/* Glitch layers - only visible when glitching */}
      {isGlitching && (
        <>
          <span
            className="absolute left-0 top-0 text-green-500 opacity-70 z-20"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translate(-2px, 0)",
              animation: "glitch-anim 3s infinite linear alternate-reverse",
            }}
          >
            {glitchText1}
          </span>
          <span
            className="absolute left-0 top-0 text-green-300 opacity-70 z-20"
            style={{
              clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)",
              transform: "translate(2px, 0)",
              animation: "glitch-anim 2s infinite linear alternate-reverse",
            }}
          >
            {glitchText2}
          </span>
        </>
      )}
    </div>
  )
}

