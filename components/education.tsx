"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

interface Education {
  id: number
  degree: string
  institution: string
  duration: string
  description?: string
}

export default function Education() {
  const educationHistory: Education[] = [
    {
      id: 1,
      degree: "Bachelors In Software Engineering",
      institution: "Fast National University of Computer & Emerging Sciences",
      duration: "2021 - 2025",
      description: "Focused on software development, mobile applications, and computer science fundamentals.",
    },
    {
      id: 2,
      degree: "A-Levels (Pre-Engineering)",
      institution: "Beaconhouse College Programme",
      duration: "2018 - 2020",
    },
    {
      id: 3,
      degree: "O-Levels (Computer Major)",
      institution: "Faisalabad Grammar School",
      duration: "2016 - 2018",
    },
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">My academic background and qualifications.</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-8"
      >
        {educationHistory.map((edu) => (
          <motion.div key={edu.id} variants={item}>
            <Card className="relative border-l border-primary bg-card">
              <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <GraduationCap className="h-3 w-3 text-primary-foreground" />
              </div>
              <CardHeader>
                <CardTitle className="text-primary">{edu.degree}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span>{edu.institution}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {edu.duration}
                  </span>
                </CardDescription>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

