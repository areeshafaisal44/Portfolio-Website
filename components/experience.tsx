"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

interface Experience {
  id: number
  role: string
  company: string
  duration: string
  description: string
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      id: 5,
      role: "Teaching Assistant - Stochastic Processes",
      company: "FAST NUCES",
      duration: "Spring 2025",
      description:
        "Assisted in teaching advanced probability concepts, stochastic modeling, and applications in computer science.",
    },
    {
      id: 4,
      role: "Teaching Assistant - Software Engineering",
      company: "FAST NUCES",
      duration: "Fall 2024",
      description:
        "Supported core software engineering courses, and provided guidance on software development projects.",
    },
    {
      id: 3,
      role: "Teaching Assistant - Software Quality Engineering",
      company: "FAST NUCES",
      duration: "Fall 2024",
      description:
        "Assisted in teaching software quality assurance principles, testing methodologies, and quality management processes.",
    },
    {
      id: 2,
      role: "Teaching Assistant - Introduction To Software Engineering",
      company: "FAST NUCES",
      duration: "Spring 2024",
      description:
        "Supported faculty in teaching software engineering fundamentals, helped students with projects, and provided feedback on assignments.",
    },
    {
      id: 1,
      role: "Teaching Assistant - Probability and Statistics",
      company: "FAST NUCES",
      duration: "Fall 2023",
      description:
        "Assisted professors in teaching Probability and Statistics courses, graded assignments, and conducted tutorial sessions for students on there projects.",
    }    
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">My academic teaching experience and contributions.</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div key={exp.id} variants={item}>
            <Card className="relative border-l border-primary bg-card">
              <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Briefcase className="h-3 w-3 text-primary-foreground" />
              </div>
              <CardHeader>
                <CardTitle className="text-primary">{exp.role}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span>{exp.company}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {exp.duration}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

