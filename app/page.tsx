"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CircuitBackground } from "@/components/circuit-background"
import { MainNav } from "@/components/main-nav"
import { Hero } from "@/components/hero"
import { Resume } from "@/components/resume"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MatrixRain } from "@/components/matrix-rain"
import { TerminalLoader } from "@/components/terminal-loader"
import { ScrollGlitchProvider } from "@/components/scroll-glitch-provider"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showTerminal, setShowTerminal] = useState(true)
  const [showMatrix, setShowMatrix] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Sequence of animations
    const sequence = async () => {
      // Step 1: Show terminal for a shorter time
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Step 2: Show matrix rain briefly
      setShowMatrix(true)
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Step 3: Hide terminal
      setShowTerminal(false)

      // Step 4: Show content after matrix rain
      await new Promise((resolve) => setTimeout(resolve, 500))
      setShowContent(true)

      // Step 5: Complete loading
      await new Promise((resolve) => setTimeout(resolve, 300))
      setLoading(false)
    }

    sequence()
  }, [])

  return (
    <ScrollGlitchProvider>
      <div className="relative min-h-screen overflow-hidden bg-black text-white">
        <AnimatePresence>
          {showTerminal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TerminalLoader />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showMatrix && !showContent && (
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MatrixRain />
            </motion.div>
          )}
        </AnimatePresence>

        <CircuitBackground />

        <AnimatePresence>
          {showContent && (
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <MainNav />
              </motion.div>

              <main>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Hero />
                </motion.div>

                <Resume />
                <Projects />
                <Contact />
              </main>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Footer />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollGlitchProvider>
  )
}

