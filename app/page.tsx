import { Navigation } from "@/app/components/navigation"
import { Hero } from "@/app/components/hero"
import { Projects } from "@/app/components/projects"
import { Skills } from "@/app/components/skills"
import { Experience } from "@/app/components/experience"
import { Contact } from "@/app/components/contact"
import { Footer } from "@/app/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
