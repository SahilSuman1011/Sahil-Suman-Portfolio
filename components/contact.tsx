"use client"

import { useState } from "react"
import { BackgroundGradient } from "../components/background-gradient"
import { WhatsappIcon } from "../components/icons"

export function Contact() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your email submission logic here
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")
    }, 1000)
  }

  return (
    <section
      id="contact"
      className="py-12 bg-white text-black dark:bg-[#0a0a0a] dark:text-zinc-400 transition-colors duration-300"
    >
      <div className="container max-w-3xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Want to hire me as a freelancer? &apos;Let discuss.</h2>
          <p>Drop your message and &apos;let discuss about your project.</p>

          <BackgroundGradient className="inline-block rounded-full" containerClassName="inline-block">
            <a
              href="https://wa.me/918368413415"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-2 text-sm text-white hover:bg-[#128C7E] transition-colors w-fit"
            >
              <WhatsappIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </BackgroundGradient>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg">Drop in your email ID and I will get back to you.</h3>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="WhatsApp suits me Better Anyways"
              className="flex-1 rounded-lg bg-zinc-100 px-4 py-2 text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] dark:bg-[#1a1a1a] dark:text-white transition-colors duration-300"
              required
            />
            <BackgroundGradient className="rounded-lg" containerClassName="shrink-0">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-zinc-100 px-6 py-2 text-sm font-medium text-black hover:bg-zinc-200 disabled:opacity-50 dark:bg-[#1a1a1a] dark:text-white dark:hover:bg-[#2a2a2a] transition-colors duration-300"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </BackgroundGradient>
          </form>
        </div>
      </div>
    </section>
  )
}

