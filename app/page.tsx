import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Blogs } from "@/components/blogs"

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <Contact />
      <Footer />
    </>
  )
}

