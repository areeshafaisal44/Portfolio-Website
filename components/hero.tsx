"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 dot-pattern"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Areesha Faisal</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-primary">Android Developer</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground"
          >
            Expertise in mobile application development, Java, unit testing and Frontend Development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="default" className="rounded-none" asChild>
              <Link href="/AreeshaCV.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

