"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Smartphone, Laptop, TestTube, Workflow } from "lucide-react"

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  id: string
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("mobile")

  const skillCategories: SkillCategory[] = [
    {
      id: "mobile",
      name: "Mobile Development",
      icon: <Smartphone className="h-4 w-4" />,
      skills: [
        { name: "Java (Android)", level: 80 },
        { name: "Android SDK", level: 90 },
        { name: "UI/UX Design", level: 85 },
      ],
    },
    {
      id: "web",
      name: "Web Development",
      icon: <Code className="h-4 w-4" />,
      skills: [
        { name: "HTML/CSS", level: 80 },
        { name: "JavaScript", level: 60 },
        { name: "React", level: 70 },
        { name: "Node.js", level: 65 },
      ],
    },
    {
      id: "database",
      name: "Databases",
      icon: <Database className="h-4 w-4" />,
      skills: [
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 },
      ],
    },
    {
      id: "testing",
      name: "Testing",
      icon: <TestTube className="h-4 w-4" />,
      skills: [
        { name: "Unit Testing", level: 85 },
        { name: "Selenium", level: 80 },
        { name: "JUnit", level: 90 },
        { name: "Test Driven Development", level: 85 },
      ],
    },
    {
      id: "other",
      name: "Other Skills",
      icon: <Workflow className="h-4 w-4" />,
      skills: [
        { name: "Git", level: 70 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Jira", level: 80 },
        { name: "SonarQube", level: 75 },
        { name: "JMeter", level: 70 },
        { name: "Quality Assurance", level: 85 },
      ],
    },
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My technical skills and proficiency levels in various technologies.
        </p>
      </motion.div>

      <Tabs defaultValue="mobile" value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
        {/* Modified TabsList for better spacing and responsive design */}
        <div className="overflow-x-auto mb-8 pb-2">
          <TabsList className="inline-flex min-w-full bg-card border border-primary p-1 rounded-none">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center justify-center gap-2 rounded-none px-4 py-2.5 min-w-[120px] sm:min-w-[140px] text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.icon}
                <span className="inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <motion.div
              variants={container}
              initial="hidden"
              animate={activeTab === category.id ? "show" : "hidden"}
              className="space-y-6"
            >
              {category.skills.map((skill) => (
                <motion.div key={skill.name} variants={item} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-secondary" indicatorClassName="bg-primary" />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

