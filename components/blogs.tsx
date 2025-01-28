"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CardHoverEffect } from "../components/card-hover-effect"
import { ProfileCard } from "../components/profile-card"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface Blog {
  title: string
  link: string
  pubDate: string
}

export function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/medium-blogs")
        const data = await response.json()
        setBlogs(data.items.slice(0, 3))
      } catch (error) {
        console.error("Error fetching blogs:", error)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <section id="blogs" className="py-4">
      <div className="container max-w-3xl space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Latest Blogs
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <div className="space-y-4">
              {blogs.map((blog, i) => (
                <motion.div
                  key={blog.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CardHoverEffect>
                    <Link
                      href="https://sahilsuman11.hashnode.dev/embarking-on-my-journey-in-tech-blogging"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 space-y-3"
                    >
                      <h3 className="text-lg font-semibold">{blog.title}</h3>
                      <p className="text-sm text-black-400">{new Date(blog.pubDate).toLocaleDateString()}</p>
                      <div className="flex items-center text-[#0ea5e9]">
                        <span className="text-sm">Read more</span>
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </div>
                    </Link>
                  </CardHoverEffect>
                </motion.div>
              ))}
            </div>
            <div className="pt-4">
              <Link
                href="https://hashnode.com/@SahilSuman11"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#0ea5e9] hover:underline"
              >
                View all posts
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-1">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  )
}

