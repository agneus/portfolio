"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CodeBuildEffectProps {
  children: React.ReactNode
  className?: string
  delay?: number
  lines?: number
  threshold?: number
}

export function CodeBuildEffect({ children, className, delay = 0, lines = 5, threshold = 0.3 }: CodeBuildEffectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasBuilt, setHasBuilt] = useState(false)
  const [isBuilding, setIsBuilding] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

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

  // Trigger build effect when element comes into view
  useEffect(() => {
    if (isInView && !hasBuilt) {
      const timer = setTimeout(() => {
        setIsBuilding(true)

        // End build effect after animation
        setTimeout(() => {
          setIsBuilding(false)
          setHasBuilt(true)
        }, 1500)
      }, delay)

      return () => clearTimeout(timer)
    }

    // Reset when out of view
    if (!isInView && hasBuilt) {
      setHasBuilt(false)
    }
  }, [isInView, hasBuilt, delay])

  // Add these hover animation variants
  const hoverVariants = {
    normal: {
      x: 0,
      y: 0,
      filter: "none",
      boxShadow: "0 0 0 rgba(0, 255, 0, 0)",
    },
    hover: {
      x: [0, -2, 3, -1, 0],
      filter: [
        "none",
        "brightness(1.1) contrast(1.2)",
        "brightness(0.9) contrast(1.1) hue-rotate(10deg)",
        "brightness(1.05) contrast(1.1)",
        "none",
      ],
      boxShadow: [
        "0 0 0 rgba(0, 255, 0, 0)",
        "0 0 5px rgba(0, 255, 0, 0.3)",
        "0 0 2px rgba(0, 255, 0, 0.2)",
        "0 0 7px rgba(0, 255, 0, 0.4)",
        "0 0 0 rgba(0, 255, 0, 0)",
      ],
      transition: {
        duration: 0.8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    },
  }

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Code typing effect overlay */}
      {isBuilding && (
        <div className="absolute inset-0 font-mono text-xs text-green-500 overflow-hidden pointer-events-none z-10">
          {[...Array(lines)].map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center h-[20px] overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15 + 0.1,
                ease: "easeInOut",
              }}
            >
              <span className="text-green-700 mr-2">{i + 1}</span>
              <span className="text-blue-500 mr-2">const</span>
              <span className="text-yellow-500 mr-2">{`element${i}`}</span>
              <span className="mr-2">=</span>
              <span className="text-green-400 mr-2">{`document.createElement('div');`}</span>
            </motion.div>
          ))}

          <motion.div
            className="mt-2 flex items-center h-[20px] overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 0.5,
              delay: lines * 0.15 + 0.5,
              ease: "easeInOut",
            }}
          >
            <span className="text-green-700 mr-2">{lines + 1}</span>
            <span className="text-purple-500 mr-2">render</span>
            <span className="mr-2">(</span>
            <span className="text-yellow-500 mr-2">element</span>
            <span className="mr-2">);</span>
          </motion.div>
        </div>
      )}

      {/* Add hover glitch effect */}
      {isHovered && hasBuilt && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Subtle border highlight effect */}
          <motion.div
            className="absolute inset-0 border border-green-500/0"
            animate={{
              borderColor: ["rgba(0,255,0,0)", "rgba(0,255,0,0.3)", "rgba(0,255,0,0)"],
              boxShadow: ["0 0 0 rgba(0,255,0,0)", "0 0 5px rgba(0,255,0,0.2)", "0 0 0 rgba(0,255,0,0)"],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </div>
      )}

      {/* Content with build animation - update with hover animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          hasBuilt
            ? { opacity: 1 }
            : isBuilding
              ? {
                  opacity: [0, 0.3, 0.5, 0.7, 1],
                }
              : {
                  opacity: 0,
                }
        }
        transition={{
          duration: isBuilding ? 1.2 : 0.5,
          delay: isBuilding ? 0.8 : 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

