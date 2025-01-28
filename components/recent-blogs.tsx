"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogs = [
  {
    title: "Building AutoComm - A Communication Automation Platform",
    views: "2,145 views",
    href: "/blog/building-autocomm",
  },
  {
    title: "Implementing Real-time Features with Socket.io",
    views: "1,892 views",
    href: "/blog/socketio-realtime",
  },
]

export function RecentBlogs() {
  return (
    <section className="container max-w-3xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-bold">Recent Blogs</h2>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <Link
              key={blog.title}
              href={blog.href}
              className="group flex items-center justify-between rounded-lg p-4 transition-colors hover:bg-muted"
            >
              <span className="font-medium group-hover:text-foreground">{blog.title}</span>
              <span className="text-sm text-muted-foreground">{blog.views}</span>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="ghost" className="gap-2">
            See All Blogs
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

