"use client"

import Link from "next/link"
import { Code, FileText, Home, Layers, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { HackerLink } from "@/components/ui/hacker-link"
import { HackerButton } from "@/components/ui/hacker-button"

export function MainNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div variants={itemVariants}>
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-green-500" />
            <span className="font-mono text-lg font-bold uppercase tracking-wider text-green-500 matrix-glitch">
              Portfolio
            </span>
          </Link>
        </motion.div>

        <motion.nav className="hidden md:flex items-center space-x-6" variants={navVariants}>
          <motion.div variants={itemVariants}>
            <HackerLink
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
              }}
              effect="glitch"
            >
              Home
            </HackerLink>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HackerLink
              href="#resume"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })
              }}
              effect="glitch"
            >
              Resume
            </HackerLink>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HackerLink
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              effect="glitch"
            >
              Projects
            </HackerLink>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HackerLink
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              effect="glitch"
            >
              Contact
            </HackerLink>
          </motion.div>
        </motion.nav>

        <motion.div className="flex items-center space-x-2" variants={itemVariants}>
          <a href="https://agneus.github.io/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <HackerButton
              variant="outline"
              className="font-mono text-xs border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
              effect="glitch"
            >
              Download CV
            </HackerButton>
          </a>
        </motion.div>
      </div>

      {/* Mobile navigation */}
      <motion.div className="md:hidden border-t border-gray-800" variants={navVariants}>
        <div className="container flex justify-between py-2">
          <motion.a
            variants={itemVariants}
            href="#home"
            className="flex flex-col items-center p-2"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Home className="h-5 w-5 text-gray-400" />
            <span
              className="font-mono text-xs text-gray-400 mt-1 text-scramble"
              data-text="HOME"
              data-scramble-1="XPQR"
              data-scramble-2="LMNO"
              data-scramble-3="ABCD"
              data-scramble-4="EFGH"
              data-scramble-5="IJKL"
            >
              HOME
            </span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#resume"
            className="flex flex-col items-center p-2"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <FileText className="h-5 w-5 text-gray-400" />
            <span
              className="font-mono text-xs text-gray-400 mt-1 text-scramble"
              data-text="RESUME"
              data-scramble-1="RTSUQE"
              data-scramble-2="PQRSMN"
              data-scramble-3="ABCDEF"
              data-scramble-4="GHIJKL"
              data-scramble-5="MNOPQR"
            >
              RESUME
            </span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#projects"
            className="flex flex-col items-center p-2"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Layers className="h-5 w-5 text-gray-400" />
            <span
              className="font-mono text-xs text-gray-400 mt-1 text-scramble"
              data-text="PROJECTS"
              data-scramble-1="PQRSTUVW"
              data-scramble-2="ABCDEFGH"
              data-scramble-3="IJKLMNOP"
              data-scramble-4="QRSTUVWX"
              data-scramble-5="YZABCDEF"
            >
              PROJECTS
            </span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#contact"
            className="flex flex-col items-center p-2"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Mail className="h-5 w-5 text-gray-400" />
            <span
              className="font-mono text-xs text-gray-400 mt-1 text-scramble"
              data-text="CONTACT"
              data-scramble-1="CQNTRCT"
              data-scramble-2="ABCDEFG"
              data-scramble-3="HIJKLMN"
              data-scramble-4="OPQRSTU"
              data-scramble-5="VWXYZAB"
            >
              CONTACT
            </span>
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  )
}

