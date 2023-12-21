import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 sm:p-12 selection:bg-rose-100">
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  )
}
