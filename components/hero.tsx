"use client"

import { Terminal } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { HackerButton } from "@/components/ui/hacker-button"
import { GlitchTitle } from "@/components/ui/glitch-title"
import { useEffect, useState, useRef } from "react"
import { useScrollGlitch } from "@/components/scroll-glitch-provider"

export function Hero() {
  const controls = useAnimation()
  const [hasGlitched, setHasGlitched] = useState(false)
  const { scrollDirection, scrollSpeed } = useScrollGlitch()
  const [isVisible, setIsVisible] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const [hasInitialGlitchPlayed, setHasInitialGlitchPlayed] = useState(false)

  // Initial animation on startup
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
      // Trigger initial glitch effect after a short delay
      setTimeout(() => {
        setIsGlitching(true)
        setTimeout(() => {
          setIsGlitching(false)
          setHasInitialGlitchPlayed(true)
        }, 1000)
      }, 300)
    }, 300) // Start shortly after the content appears

    return () => clearTimeout(timeout)
  }, [])

  // Trigger glitch effect when scrolling up to this section
  useEffect(() => {
    if (!hasInitialGlitchPlayed) return // Wait for initial animation to complete

    const handleScroll = () => {
      if (!heroRef.current) return

      const rect = heroRef.current.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight * 0.7 && rect.bottom >= 0

      if (isInView && scrollDirection === "up" && scrollSpeed > 100 && !hasGlitched) {
        setIsGlitching(true)
        setTimeout(() => {
          setIsGlitching(false)
          setHasGlitched(true)
        }, 1000)
      } else if (!isInView) {
        setHasGlitched(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollDirection, scrollSpeed, hasGlitched, hasInitialGlitchPlayed])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Text glitch animation variants
  const glitchTextVariants = {
    normal: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "none",
    },
    glitching: {
      opacity: [1, 0.8, 0.6, 0.9, 1],
      x: [0, -3, 5, -2, 0],
      y: [0, 2, -2, 1, 0],
      filter: [
        "none",
        "blur(2px) hue-rotate(90deg)",
        "blur(0) hue-rotate(0deg)",
        "blur(1px) hue-rotate(-90deg)",
        "none",
      ],
      transition: {
        duration: 0.5,
        times: [0, 0.25, 0.5, 0.75, 1],
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="home" className="relative py-20 md:py-32" ref={heroRef}>
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Glitch overlay - only visible during glitch effect */}
          {isGlitching && (
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Horizontal glitch lines */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-[2px] bg-green-500/70 left-0 right-0"
                  style={{ top: `${30 * (i + 1)}%` }}
                  initial={{ scaleX: 0, x: -100 }}
                  animate={{
                    scaleX: [0, 1, 0.5, 1, 0],
                    x: [-100, 0, 50, 0, 100],
                    opacity: [0, 0.8, 0.2, 0.6, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
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
            </motion.div>
          )}

          <motion.div
            className="inline-flex items-center justify-center rounded-full bg-green-500/10 px-3 py-1 mb-6"
            variants={itemVariants}
            animate={isGlitching ? "glitching" : "normal"}
          >
            <Terminal className="mr-2 h-4 w-4 text-green-500" />
            <motion.span
              className="font-mono text-sm text-green-500 text-scramble"
              data-text="FULL STACK DEVELOPER"
              data-scramble-1="FQLL ST4CK D3V3L0P3R"
              data-scramble-2="F7LL 5T@CK D&V&L0P&R"
              data-scramble-3="F#LL $T@CK D3V3L0P3R"
              data-scramble-4="FULL 5T4CK D3V3L0P3R"
              data-scramble-5="F*LL ST@CK D&V&L0P&R"
              variants={glitchTextVariants}
            >
              FULL STACK DEVELOPER
            </motion.span>
          </motion.div>

          <motion.h1
            className="font-mono text-4xl md:text-6xl font-bold tracking-tighter mb-6"
            variants={itemVariants}
            animate={isGlitching ? "glitching" : "normal"}
          >
            <GlitchTitle text="SAMIN NAFI" isGlitching={isGlitching} className="block" />
            <GlitchTitle text="PORTFOLIO" isGlitching={isGlitching} className="block mt-2" color="text-green-500" />
          </motion.h1>

          <motion.div
            className="relative mx-auto mb-8 max-w-xl"
            variants={itemVariants}
            animate={isGlitching ? "glitching" : "normal"}
          >
            <motion.div
              className="font-mono text-sm md:text-base text-gray-400 leading-relaxed digital-rain"
              variants={glitchTextVariants}
            >
              <span className="text-green-500">$</span> Building innovative web applications with modern technologies.
              <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-blink"></span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
            animate={isGlitching ? "glitching" : "normal"}
          >
            <HackerButton
              size="lg"
              className="font-mono bg-green-500 text-black hover:bg-green-600 min-w-[180px]"
              effect="rain"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              VIEW PROJECTS
            </HackerButton>
            <HackerButton
              variant="outline"
              size="lg"
              className="font-mono border-green-500 text-green-500 hover:bg-green-500 hover:text-black min-w-[180px]"
              effect="binary"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              CONTACT ME
            </HackerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

