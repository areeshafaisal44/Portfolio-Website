"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  details: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Event Ease",
      description: "A conference management system designed to handle virtual conferences and paper submissions.",
      tags: ["JavaScript","MySQL", "React"],
      github: "https://github.com/areeshafaisal44/FYP",
      details:
        "Features include paper submission management, virtual event scheduling, and attendee engagement tools. The system allows conference organizers to manage submissions, schedule virtual events, and engage with attendees through various interactive tools.",
    },
    {
      id: 2,
      title: "Arabic Poem Dictionary",
      description:
        "A dictionary application for storing and retrieving Arabic poems, providing quick access to verses and translations.",
      // image: "/placeholder.svg?height=400&width=600",
      tags: ["Java", "SQLite"],
      github: "https://github.com/areeshafaisal44/Arabic_Poems_Dictionary",
      details:
        "This application allows users to store and retrieve Arabic poems, providing quick access to verses and translations. It features a comprehensive search functionality, categorization by poet or theme, and the ability to save favorites.",
    },
    {
      id: 3,
      title: "Inventory Management System",
      description: "A comprehensive inventory management system built with C#.",
      // image: "/placeholder.svg?height=400&width=600",
      tags: ["C#", "SQL", "Oracle"],
      github: "https://github.com/areeshafaisal44/Inventory-Management-System",
      details:
        "Allows businesses to track product stock levels, manage sales and purchases, and generate inventory reports. The system includes features for barcode scanning, automated reordering, and detailed analytics dashboards.",
    },
    {
      id: 4,
      title: "Word Suggestion",
      description:
        "A word suggestion tool utilizing Tree Data Structures to suggest words based on user input from a dictionary.",
      // image: "/placeholder.svg?height=400&width=600",
      tags: ["C++", "Data Structures", "Algorithms"],
      github: "https://github.com/areeshafaisal44/WordSuggestion",
      details:
        "This tool uses advanced tree data structures to efficiently suggest words based on user input from a dictionary. It implements predictive text algorithms to provide real-time suggestions as users type.",
    },
    {
      id: 5,
      title: "Candy Crush Game",
      description: "A simple Candy Crush-style game developed using C++ with levels, scoring, and game mechanics.",
      // image: "/placeholder.svg?height=400&width=600",
      tags: ["C++", "Graphics"],
      github: "https://github.com/areeshafaisal44/Candy-Crush-Game",
      details:
        "A fun and engaging Candy Crush-style game with multiple levels, scoring systems, and game mechanics. Features colorful graphics, sound effects, and progressively challenging gameplay.",
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my recent projects showcasing my skills in mobile and web development.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-primary/20 bg-card">
              <div className="relative h-48 overflow-hidden">
                {/* <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                /> */}
              </div>
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-primary/50 bg-secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                  className="rounded-none border-primary text-primary hover:bg-primary/10"
                >
                  View Details
                </Button>
                <div className="flex gap-2">
                  {project.github && (
                    <Button variant="ghost" size="icon" asChild className="rounded-full hover:text-primary">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="ghost" size="icon" asChild className="rounded-full hover:text-primary">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null)
        }}
      >
        {selectedProject && (
          <DialogContent className="max-w-3xl bg-card">
            <DialogHeader>
              <DialogTitle className="text-primary">{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.description}</DialogDescription>
            </DialogHeader>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-md">
              {/* <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              /> */}
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-primary/50 bg-secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p>{selectedProject.details}</p>
              <div className="flex gap-4">
                {selectedProject.github && (
                  <Button asChild className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button
                    variant="outline"
                    asChild
                    className="rounded-none border-primary text-primary hover:bg-primary/10"
                  >
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

