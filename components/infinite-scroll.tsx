"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q279PXfALBdA9QdGshxNsCn8pqmrvb.png",
    alt: "Tech Stack",
  },
]

export function InfiniteScroll() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-12">
      <div className="relative flex w-full overflow-x-hidden">
        <motion.div
          className="flex min-w-full shrink-0 items-center justify-around gap-8"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <div className="relative w-full max-w-[800px]">
            <Image
              src={logos[0].src || "/placeholder.svg"}
              alt={logos[0].alt}
              width={800}
              height={200}
              className="h-auto w-full object-contain"
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute top-0 flex min-w-full shrink-0 items-center justify-around gap-8"
          animate={{
            x: ["100%", "0%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <div className="relative w-full max-w-[800px]">
            <Image
              src={logos[0].src || "/placeholder.svg"}
              alt={logos[0].alt}
              width={800}
              height={200}
              className="h-auto w-full object-contain transform rotate-180"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

