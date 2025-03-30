"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"
import { HackerLink } from "@/components/ui/hacker-link"

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center mb-4 md:mb-0"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Code className="h-5 w-5 text-green-500 mr-2" />
            <span
              className="font-mono text-sm font-bold uppercase tracking-wider text-green-500 text-scramble"
              data-text="Portfolio"
              data-scramble-1="P0rtf0li0"
              data-scramble-2="P@rtf@li@"
              data-scramble-3="P#rtf#li#"
              data-scramble-4="P$rtf$li$"
              data-scramble-5="P%rtf%li%"
            >
              Portfolio
            </span>
          </motion.div>

          <motion.div
            className="flex items-center space-x-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
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

          <motion.div
            className="mt-4 md:mt-0"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p
              className="font-mono text-xs text-gray-500 binary-flash"
              data-binary="01000011 01101111 01110000 01111001 01110010 01101001 01100111 01101000 01110100"
            >
              &copy; {new Date().getFullYear()} Samin Nafi. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

