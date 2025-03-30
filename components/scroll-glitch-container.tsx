"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollGlitchContainerProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
  direction?: "up" | "down" | "both"
}

export function ScrollGlitchContainer({
  children,
  className,
  delay = 0,
  threshold = 0.3,
  direction = "both",
}: ScrollGlitchContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasGlitched, setHasGlitched] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)
  const [isBuilt, setIsBuilt] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)

  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)

  // Track scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up"
    setScrollDirection(direction)
    lastScrollY.current = latest
  })

  // Check if element is in view
  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)
      },
      { threshold },
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [threshold])

  // Trigger glitch effect when element comes into view
  useEffect(() => {
    if (isInView && !hasGlitched) {
      // Check if we should animate based on scroll direction
      if (
        direction === "both" ||
        (direction === "down" && scrollDirection === "down") ||
        (direction === "up" && scrollDirection === "up")
      ) {
        const timer = setTimeout(() => {
          setIsGlitching(true)

          // End glitch effect after animation
          setTimeout(() => {
            setIsGlitching(false)
            setIsBuilt(true)
            setHasGlitched(true)
          }, 1000)
        }, delay)

        return () => clearTimeout(timer)
      }
    }

    // Reset when out of view
    if (!isInView && hasGlitched) {
      setHasGlitched(false)
      setIsBuilt(false)
    }
  }, [isInView, hasGlitched, delay, direction, scrollDirection])

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* Glitch overlay */}
      {isGlitching && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-green-500/10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.2, 0, 0.3, 0.1, 0],
              x: [0, -10, 5, -5, 0],
            }}
            transition={{ duration: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          />

          {/* Horizontal glitch lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[2px] bg-green-500/70 left-0 right-0"
              style={{ top: `${20 * i}%` }}
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: [0, 1, 0.5, 1, 0],
                opacity: [0, 1, 0.5, 1, 0],
                x: [0, 100, -50, 0],
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                times: [0, 0.2, 0.4, 0.6, 1],
              }}
            />
          ))}

          {/* Vertical glitch lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] bg-green-500/70 top-0 bottom-0"
              style={{ left: `${30 * (i + 1)}%` }}
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: [0, 1, 0.5, 1, 0],
                opacity: [0, 1, 0.5, 1, 0],
                y: [0, 100, -50, 0],
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1 + 0.2,
                times: [0, 0.2, 0.4, 0.6, 1],
              }}
            />
          ))}

          {/* Binary code overlay */}
          <motion.div
            className="absolute inset-0 font-mono text-[10px] text-green-500/30 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(20)].map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {[...Array(50)].map((_, j) => (
                  <span key={j}>{Math.round(Math.random())}</span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Content with build animation */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={
          isBuilt
            ? {
                opacity: 1,
                filter: "blur(0px)",
              }
            : isGlitching
              ? {
                  opacity: [0, 0.3, 0.1, 0.7, 0.5, 1],
                  filter: ["blur(10px)", "blur(5px)", "blur(8px)", "blur(2px)", "blur(6px)", "blur(0px)"],
                }
              : {
                  opacity: 0,
                  filter: "blur(4px)",
                }
        }
        transition={{ duration: isGlitching ? 0.8 : 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

