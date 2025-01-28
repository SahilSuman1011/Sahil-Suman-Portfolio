"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#blogs", label: "Blogs" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [active, setActive] = React.useState("home")

  // Use React.useCallback to memoize handleScroll
  const handleScroll = React.useCallback(() => {
    const sections = document.querySelectorAll("section[id]")
    const scrollPosition = window.scrollY + 100

    sections.forEach((section) => {
      if (!section) return
      const sectionTop = (section as HTMLElement).offsetTop
      const sectionHeight = (section as HTMLElement).offsetHeight
      const sectionId = section.getAttribute("id")

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight &&
        sectionId
      ) {
        setActive(sectionId)
      }
    })
  }, []) // Empty dependency array because it doesn't depend on props or state

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll]) // Add handleScroll as a dependency

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-[#1a1a1a] bg-black"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto flex h-16 max-w-screen-md items-center justify-between px-8">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative h-9 w-9 rounded-full bg-zinc-200 p-2 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute top-2.5 left-2.5 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
        <nav className="flex items-center rounded-full bg-[#1a1a1a] p-1">
          {navItems.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector(link.href)
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
                setActive(link.href.replace("#", ""))
              }}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                active === link.href.replace("#", "")
                  ? "text-[#0ea5e9]"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {active === link.href.replace("#", "") && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-[#2a2a2a]"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
