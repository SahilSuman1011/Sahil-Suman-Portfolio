"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-lg dark:bg-black/10">
      <ul className="flex gap-1">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors relative",
                activeSection === item.name.toLowerCase()
                  ? "text-zinc-900 dark:text-zinc-100"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100",
              )}
              onClick={() => setActiveSection(item.name.toLowerCase())}
            >
              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="active"
                  className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

