import Intro from "@/components/intro"
import Projects from "@/components/projects"
import Experience from "@/components/experience"

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 sm:p-12 selection:bg-rose-100">
      <Intro/>
      <Experience/>
      <Projects/>
    </main>
  )
}
