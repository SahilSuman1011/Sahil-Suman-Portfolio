import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { CardHoverEffect } from "./card-hover-effect"
import { motion } from "framer-motion"

export function ProfileCard() {
  const socialLinks = [
    {
      href: "https://github.com/SahilSuman1011",
      icon: <Github className="w-5 h-5" />,
    },
    {
      href: "https://www.linkedin.com/in/sahilsuman11/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      href: "https://x.com/SahilSuman1111",
      icon: <Twitter className="w-5 h-5" />,
    },
    
  ]

  return (
    <CardHoverEffect className="h-full flex flex-col justify-center p-4">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-center">Socials</h3>
        <div className="grid grid-cols-3 gap-4">
          {socialLinks.map((link, i) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: i * 0.1,
              }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-full hover:bg-white/10 transition-colors"
              >
                {link.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </CardHoverEffect>
  )
}

