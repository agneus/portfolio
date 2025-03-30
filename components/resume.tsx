"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"
import { MatrixText } from "@/components/ui/matrix-text"
import { ScrollGlitchContainer } from "@/components/scroll-glitch-container"
import { CodeBuildEffect } from "@/components/code-build-effect"
import { motion } from "framer-motion"
import { useState } from "react"

// JSON data for Education and Experience
const educationData = [
  {
    title: "Bachelor of Computer Science",
    subtitle: "University of Waterloo, Waterloo, ON",
    duration: "Sept 2020 ‑ Apr 2025 (Expected)",
    content: [
      "Term Distinction in every term; President's Scholarship",
      "Skills: TypeScript/Javascript, React, Kotlin, Java, C#, C++, CSS",
    ],
  },
]

const experienceData = [
  {
    title: "Software Developer in Test Intern",
    subtitle: "Sony Interactive Entertainment | PlayStation, Waterloo, ON",
    duration: "May 2024 ‑ Dec 2024",
    content: [
      "Authored PACT contract tests for gRPC services using Java and JUnit 5, completely eliminating integration issues caused by mismatched proto files between provider and consumer services",
      "Modified a Kotlin integration test helper for provider tests, using CountDownLatch to resolve concurrency issues and ensure the application was fully initialized, enabling reliable test execution",
      "Implemented branch‑specific test execution for consumer tests using Maven profiles, automating contract generation and publication on the master branch, reducing CI/CD overhead by preventing unintended updates",
      "Built a devcontainer with a Dockerfile for a Kotlin backend service, integrating with IntelliJ to reduce setup time for new developers and ensure consistency across development environments",
      "Integrated devcontainers into CI/CD by configuring a GitHub webhook and Jenkins job to automate image builds, publish to Artifactory, and update configurations ensuring up‑to‑date development environments",
    ],
  },
  {
    title: "Software Developer Intern",
    subtitle: "Dayforce, Toronto, ON",
    duration: "Sept 2023 ‑ Dec 2023",
    content: [
      "Enhanced key frontend features for the Dayforce Jobs website using React and TypeScript, including the Saved Searches form and Job Application page, simplifying workflows for thousands of daily users",
      "Resolved critical accessibility bugs by implementing JavaScript logic to fix tab navigation issues with radio buttons and invisible elements, ensuring seamless navigation and compliance with WCAG 2.1 standards",
      "Developed robust backend validation and collation logic in C# for job applications, ensuring accurate handling of user data such as addresses and phone numbers to maintain data integrity and improve system reliability",
    ],
  },
  {
    title: "Backend Engineering Intern",
    subtitle: "Faire, Waterloo, ON",
    duration: "Sept 2022 ‑ Dec 2022",
    content: [
      "Implemented event batching in Kotlin for an internal event tracking tool, reducing database write frequency by grouping user actions into timed batches, lowering API calls and server load for improved efficiency",
      "Redesigned the database schema with SQL to enable event batching, replacing individual event storage with grouped entries, which reduced storage overhead and improved query performance for large datasets",
      "Implemented a Jenkins job to keep e2e‑green branch synced with main branch, overriding end‑to‑end test checks when lag exceeded 300 commits, reducing merge conflicts and accelerating deployment to production",
    ],
  },
  {
    title: "Software Test Engineering Intern",
    subtitle: "Faire, Waterloo, ON",
    duration: "Jan 2022 ‑ Apr 2022",
    content: [
      "Developed and debugged end‑to‑end tests with Cypress for critical functionalities, including login, navigation, add‑to‑cart, and checkout, ensuring reliable user workflows and reducing production bugs",
      "Authored unit tests in TypeScript with Jest to validate tabbing and focus functionality, catching critical accessibility issues early and ensuring seamless navigation for users with assistive technologies",
      "Reviewed test specifications and conducted manual QA testing for 20+ new features on web and mobile",
    ],
  },
]

// Replace the ResumeCard function with this simplified version that keeps content readable

function ResumeCard({ title, subtitle, duration, content, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <ScrollGlitchContainer delay={index * 100} threshold={0.2}>
      <motion.div onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} className="relative">
        {/* Subtle border glitch effect - only visible on hover */}
        {isHovered && (
          <>
            {/* Border highlight effects */}
            <motion.div
              className="absolute h-[1px] bg-green-500/70 left-0 right-0 z-10 pointer-events-none"
              style={{ top: "0%" }}
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: [0, 1, 0.5, 1],
                opacity: [0, 1, 0.5, 1],
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute h-[1px] bg-green-500/70 left-0 right-0 z-10 pointer-events-none"
              style={{ bottom: "0%" }}
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: [0, 1, 0.5, 1],
                opacity: [0, 1, 0.5, 1],
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <motion.div
              className="absolute w-[1px] bg-green-500/70 top-0 bottom-0 z-10 pointer-events-none"
              style={{ left: "0%" }}
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: [0, 1, 0.5, 1],
                opacity: [0, 1, 0.5, 1],
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              className="absolute w-[1px] bg-green-500/70 top-0 bottom-0 z-10 pointer-events-none"
              style={{ right: "0%" }}
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: [0, 1, 0.5, 1],
                opacity: [0, 1, 0.5, 1],
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />

            {/* Subtle glitching lines */}
            <motion.div
              className="absolute h-[1px] bg-green-500/40 left-0 right-0 z-10 pointer-events-none"
              style={{ top: "30%" }}
              initial={{ scaleX: 0, x: -100 }}
              animate={{
                scaleX: [0, 0.3, 0.7, 0.2, 0],
                x: [-100, 0, 50, 100, 200],
                opacity: [0, 0.7, 0.3, 0.5, 0],
              }}
              transition={{
                duration: 0.7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
            <motion.div
              className="absolute h-[1px] bg-green-500/40 left-0 right-0 z-10 pointer-events-none"
              style={{ top: "70%" }}
              initial={{ scaleX: 0, x: 100 }}
              animate={{
                scaleX: [0, 0.5, 0.2, 0.8, 0],
                x: [100, 50, 0, -50, -100],
                opacity: [0, 0.5, 0.2, 0.6, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: 0.2,
              }}
            />
            <motion.div
              className="absolute w-[1px] bg-green-500/40 top-0 bottom-0 z-10 pointer-events-none"
              style={{ left: "40%" }}
              initial={{ scaleY: 0, y: -50 }}
              animate={{
                scaleY: [0, 0.4, 0.2, 0.6, 0],
                y: [-50, 0, 20, -20, -50],
                opacity: [0, 0.6, 0.3, 0.5, 0],
              }}
              transition={{
                duration: 0.9,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: 0.1,
              }}
            />
          </>
        )}

        <Card
          className={`bg-black border-gray-800 relative overflow-hidden transition-all duration-300 ${isHovered ? "border-green-500/50 shadow-[0_0_10px_rgba(0,255,0,0.2)]" : ""}`}
        >
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="font-mono text-lg">
                  <MatrixText text={title} className="inline-block" />
                </CardTitle>
                <CardDescription className="font-mono text-gray-400">
                  <span className="digital-rain">{subtitle}</span>
                </CardDescription>
              </div>
              <Badge className="bg-green-500/20 text-green-500 font-mono text-scramble">{duration}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {Array.isArray(content) ? (
              <ul className="font-mono text-sm text-gray-400 space-y-2 list-disc pl-5">
                {content.map((item, idx) => (
                  <li key={idx} className={idx % 2 === 0 ? "digital-rain" : "text-scramble"}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-mono text-sm text-gray-400">{content}</p>
            )}
          </CardContent>

          {/* Very subtle scan line effect - only visible on hover */}
          {isHovered && (
            <motion.div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent pointer-events-none z-10"
              initial={{ top: "-10%", opacity: 0 }}
              animate={{
                top: ["0%", "100%"],
                opacity: [0, 0.3, 0.3, 0],
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.1, 0.9, 1],
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          )}
        </Card>
      </motion.div>
    </ScrollGlitchContainer>
  )
}

export function Resume() {
  return (
    <section id="resume" className="py-20 border-t border-gray-800">
      <div className="container">
        <ScrollGlitchContainer className="text-center mb-16" threshold={0.5}>
          <h2 className="font-mono text-3xl font-bold tracking-tighter mb-4">
            <span className="text-green-500">+</span> <MatrixText text="RESUME" className="inline-block" />{" "}
            <span className="text-green-500">+</span>
          </h2>
          <p className="font-mono text-sm text-gray-400 max-w-2xl mx-auto">MY EDUCATION AND WORK EXPERIENCE</p>
        </ScrollGlitchContainer>

        <div className="space-y-16">
          {/* Experience Section */}
          <div>
            <CodeBuildEffect className="mb-8" threshold={0.8} lines={3}>
              <div className="flex items-center">
                <Briefcase className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <h3 className="font-mono text-xl font-bold">
                  <MatrixText text="EXPERIENCE" className="inline-block" />
                </h3>
              </div>
            </CodeBuildEffect>
            <div className="space-y-6">
              {experienceData.map((xp, index) => (
                <ResumeCard
                  key={index}
                  index={index}
                  title={xp.title}
                  subtitle={xp.subtitle}
                  duration={xp.duration}
                  content={xp.content}
                />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <CodeBuildEffect className="mb-8" threshold={0.8} lines={3}>
              <div className="flex items-center">
                <GraduationCap className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <h3 className="font-mono text-xl font-bold">
                  <MatrixText text="EDUCATION" className="inline-block" />
                </h3>
              </div>
            </CodeBuildEffect>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <ResumeCard
                  key={index}
                  index={index}
                  title={edu.title}
                  subtitle={edu.subtitle}
                  duration={edu.duration}
                  content={edu.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

