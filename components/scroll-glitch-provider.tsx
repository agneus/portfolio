"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect, useRef } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"

interface ScrollGlitchContextType {
  scrollDirection: "up" | "down" | null
  scrollSpeed: number
  triggerGlitch: () => void
  isGlitching: boolean
}

const ScrollGlitchContext = createContext<ScrollGlitchContextType>({
  scrollDirection: null,
  scrollSpeed: 0,
  triggerGlitch: () => {},
  isGlitching: false,
})

export const useScrollGlitch = () => useContext(ScrollGlitchContext)

interface ScrollGlitchProviderProps {
  children: React.ReactNode
}

export function ScrollGlitchProvider({ children }: ScrollGlitchProviderProps) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [scrollSpeed, setScrollSpeed] = useState(0)
  const [isGlitching, setIsGlitching] = useState(false)
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())
  const { scrollY } = useScroll()

  // Track scroll direction and speed
  useMotionValueEvent(scrollY, "change", (latest) => {
    const now = Date.now()
    const timeDelta = now - lastScrollTime.current

    if (timeDelta > 0) {
      const direction = latest > lastScrollY.current ? "down" : "up"
      setScrollDirection(direction)

      // Calculate scroll speed (pixels per second)
      const distance = Math.abs(latest - lastScrollY.current)
      const speed = distance / (timeDelta / 1000)
      setScrollSpeed(speed)

      // Auto-trigger glitch on fast scrolling
      if (speed > 500 && !isGlitching) {
        triggerGlitch()
      }

      lastScrollTime.current = now
      lastScrollY.current = latest
    }
  })

  const triggerGlitch = () => {
    if (!isGlitching) {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 500)
    }
  }

  // Add global glitch effect on scroll
  useEffect(() => {
    if (isGlitching) {
      document.documentElement.classList.add("scrolling-glitch")
    } else {
      document.documentElement.classList.remove("scrolling-glitch")
    }

    return () => {
      document.documentElement.classList.remove("scrolling-glitch")
    }
  }, [isGlitching])

  return (
    <ScrollGlitchContext.Provider
      value={{
        scrollDirection,
        scrollSpeed,
        triggerGlitch,
        isGlitching,
      }}
    >
      {children}
    </ScrollGlitchContext.Provider>
  )
}

