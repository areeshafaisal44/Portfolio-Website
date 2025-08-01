"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  SiReact,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiCplusplus,
  SiGit,
  SiSqlite,
  SiJira,
  SiExpress,
} from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb"
import { FaJava } from "react-icons/fa"

export default function About() {
  const skills = [
    { name: "Java", icon: <FaJava className="h-5 w-5" /> },
    { name: "React", icon: <SiReact className="h-5 w-5" /> },
    { name: "JavaScript", icon: <SiJavascript className="h-5 w-5" /> },
    { name: "Firebase", icon: <SiFirebase className="h-5 w-5" /> },
    { name: "MongoDB", icon: <SiMongodb className="h-5 w-5" /> },
    { name: "SQLite", icon: <SiSqlite className="h-5 w-5" /> },
    { name: "C#", icon: <TbBrandCSharp className="h-5 w-5" /> },
    { name: "C++", icon: <SiCplusplus className="h-5 w-5" /> },
    { name: "Git", icon: <SiGit className="h-5 w-5" /> },
    { name: "Jira", icon: <SiJira className="h-5 w-5" /> },
    { name: "NodeJS", icon: <SiNodedotjs className="h-5 w-5" /> },
    { name: "Express", icon: <SiExpress className="h-5 w-5" /> },
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden border border-primary/20 bg-card">
            <CardContent className="p-0">
              <Image
                src="Areesha2.jpg"
                alt="Areesha Faisal"
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">MERN Stack Developer</h3>
          <p className="text-muted-foreground mb-6">
            Passionate and detail-oriented Mern Stack Developer with experience in designing, developing, and deploying
            Websites. Skilled in JavaScript, Express, NodeJS with a strong understanding of architecture. 
            Adapt at writing clean, maintainable code and collaborating with cross-functional teams to create seamless user experiences.
          </p>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 border-primary/50 bg-card">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

