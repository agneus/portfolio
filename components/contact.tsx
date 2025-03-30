"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import { HackerButton } from "@/components/ui/hacker-button"
import { MatrixText } from "@/components/ui/matrix-text"
import { ScrollGlitchContainer } from "@/components/scroll-glitch-container"
import { CodeBuildEffect } from "@/components/code-build-effect"

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-gray-800">
      <div className="container">
        <ScrollGlitchContainer className="text-center mb-16" threshold={0.5}>
          <h2 className="font-mono text-3xl font-bold tracking-tighter mb-4">
            <span className="text-green-500">+</span> <MatrixText text="CONTACT" className="inline-block" />{" "}
            <span className="text-green-500">+</span>
          </h2>
          <p className="font-mono text-sm text-gray-400 max-w-2xl mx-auto digital-rain">
            GET IN TOUCH FOR COLLABORATIONS OR OPPORTUNITIES
          </p>
        </ScrollGlitchContainer>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <CodeBuildEffect lines={6} threshold={0.3}>
            <Card className="bg-black border-gray-800 hover:border-green-500/50 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-mono text-lg">
                  <MatrixText text="Contact Information" className="inline-block" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-500 mr-3" />
                  <p className="font-mono text-sm digital-rain">saminshararnafi@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 flex items-center justify-center text-green-500 mr-3">
                    <span className="text-lg">📍</span>
                  </div>
                  <p className="font-mono text-sm text-scramble">Waterloo, ON, Canada</p>
                </div>
              </CardContent>
            </Card>
          </CodeBuildEffect>

          <CodeBuildEffect lines={6} threshold={0.3} delay={200}>
            <Card className="bg-black border-gray-800 hover:border-green-500/50 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-mono text-lg">
                  <MatrixText text="Social Media" className="inline-block" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                  >
                    <a href="https://github.com/agneus" target="_blank" rel="noopener noreferrer">
                      <HackerButton
                        variant="outline"
                        size="icon"
                        className="border-gray-700 text-gray-400 hover:text-white hover:border-white"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </HackerButton>
                    </a>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                  >
                    <a href="https://www.linkedin.com/in/saminshararnafi/" target="_blank" rel="noopener noreferrer">
                      <HackerButton
                        variant="outline"
                        size="icon"
                        className="border-gray-700 text-gray-400 hover:text-white hover:border-white"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </HackerButton>
                    </a>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                  >
                    <a href="mailto:saminshararnafi@gmail.com">
                      <HackerButton
                        variant="outline"
                        size="icon"
                        className="border-gray-700 text-gray-400 hover:text-white hover:border-white"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </HackerButton>
                    </a>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </CodeBuildEffect>
        </div>
      </div>
    </section>
  )
}

