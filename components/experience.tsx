"use client"

import { motion } from "framer-motion"
import { CardHoverEffect } from "../components/card-hover-effect"

const experiences = [
  {
    title: "Web Development Intern",
    company: "Webstack Academy",
    companyLink: "https://www.linkedin.com/company/webstackacademyit/",
    period: "February 2024 - April 2024",
    description: [
      "Spearheaded frontend development of a home-buying website using React.js",
      "Optimized database efficiency with MongoDB integration",
      "Applied responsive design techniques with CSS",
    ],
  },
  {
    title: "Graphic and UI/UX Design Intern",
    company: "Starplayers",
    companyLink: "https://www.linkedin.com/company/starplayers/",
    period: "March 2023 - May 2023",
    description: [
      "Collaborated with engineering and design teams to enhance user interfaces",
      "Optimized operational workflows by designing user-friendly templates",
      "Boosted user engagement through strategic social media campaigns",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="container max-w-3xl space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CardHoverEffect>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">{experience.title}</h3>
                    <a
                      href={experience.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0ea5e9] hover:underline"
                    >
                      {experience.company}
                    </a>
                    <p className="text-sm text-black-400">{experience.period}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm text-black-400 dark:text-zinc-400">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

