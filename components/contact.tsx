"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!formRef.current) return

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "service_ocnakxl",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "template_2of4vj9",
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || "0nK8EEfSLsuj_xxJn",
      )

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })

      formRef.current.reset()
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again later.",
      })
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "areesha.faisal02@gmail.com",
      link: "mailto:areesha.faisal02@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+92 320 8656944",
      link: "tel:+923208656944",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Faisalabad, Pakistan",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "areesha-faisal-685651347",
      link: "https://linkedin.com/in/areesha-faisal-685651347",
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "areeshafaisal",
      link: "https://github.com/areeshafaisal44",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border border-primary/20 bg-card h-full">
            <CardHeader>
              <CardTitle className="text-primary">Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => {
                    navigator.clipboard.writeText("areesha.faisal02@gmail.com")
                    toast({
                      title: "Email copied!",
                      description: "The email address has been copied to your clipboard.",
                    })
                  }}
                >
                  Copy Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-primary">Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="rounded-none bg-secondary border-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="rounded-none bg-secondary border-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="phone"
                    type="text"
                    placeholder="Your Phone"
                    required
                    className="rounded-none bg-secondary border-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="rounded-none bg-secondary border-primary/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

