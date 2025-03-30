"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  delay?: number
}

export function GlitchText({ text, className, delay = 0 }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Initial delay before starting
    const initialTimeout = setTimeout(() => {
      let currentIndex = 0

      // Type out the text character by character
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)

          // Start occasional glitching after typing is complete
          const glitchInterval = setInterval(() => {
            if (Math.random() > 0.7) {
              setIsGlitching(true)
              setTimeout(() => setIsGlitching(false), 200)
            }
          }, 2000)

          return () => clearInterval(glitchInterval)
        }
      }, 50)

      return () => clearInterval(typingInterval)
    }, delay)

    return () => clearTimeout(initialTimeout)
  }, [text, delay])

  return (
    <motion.span
      className={cn("inline-block font-mono", isGlitching ? "text-green-500" : "", className)}
      animate={
        isGlitching
          ? {
              x: [0, -2, 2, -1, 1, 0],
              opacity: [1, 0.8, 0.9, 0.7, 1],
            }
          : {}
      }
      transition={{ duration: 0.2 }}
    >
      {displayText}
      {displayText.length < text.length && (
        <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-blink"></span>
      )}
    </motion.span>
  )
}

