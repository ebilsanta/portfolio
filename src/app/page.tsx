import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"

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
