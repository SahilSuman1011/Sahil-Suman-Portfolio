"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <div className="container max-w-3xl pt-16 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-zinc-200 bg-white/50 p-8 dark:border-zinc-800 dark:bg-black/50 relative"
      >
        {/* Top-right border decoration */}
        <div className="absolute -top-px -right-px w-[150px] h-[150px] pointer-events-none">
          <div className="absolute top-0 right-0 h-px w-[150px] bg-gradient-to-l from-transparent via-[#0ea5e9] to-transparent" />
          <div className="absolute top-0 right-0 h-[150px] w-px bg-gradient-to-b from-[#0ea5e9] to-transparent" />
        </div>

        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold">Sahil Suman</h1>
              <p className="text-lg font-light">Full stack Developer</p>
              <p className="text-sm">
              Building Scalable and Production ready Softwares.</p>
            </div>
            <Link
              href="https://drive.google.com/file/d/1_cjj-6DLVoNISIf_Shd6kSkZRqzf8RxQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 text-sm border border-dashed border-[#0ea5e9] rounded-full hover:bg-[#0ea5e9]/10 transition-colors"
            >
              View Resume
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="max-w-[600px] text-zinc-400 dark:text-zinc-400">
            Find me on{" "}
            <Link
              href="https://github.com/SahilSuman1011"
              className="text-[#0EA5E9] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>{" "}
            for code and{" "}
            <Link
              href="https://www.linkedin.com/in/sahilsuman11/"
              className="text-[#0EA5E9] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>{" "}
            
            for updates.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

