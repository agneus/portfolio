import { CircuitBackground } from "@/components/circuit-background"
import { MainNav } from "@/components/main-nav"
import { Hero } from "@/components/hero"
import { Resume } from "@/components/resume"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <CircuitBackground />
      <div className="relative z-10">
        <MainNav />
        <main>
          <Hero />
          <Resume />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

