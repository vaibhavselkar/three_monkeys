"use client"

import { useState } from "react"
import { Mail, MapPin, ArrowUpRight, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "threemonkeys009@gmail.com",
    href: "mailto:threemonkeys009@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Wardha, India",
    href: "#map",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: undefined,
  },
]

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus("Message sent successfully 🚀")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("Server error. Please try later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Contact Us
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            {"Let's Turn Your Idea Into Reality"}
          </h1>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind? Reach out and let's build something great together.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold">Get in Touch</h2>

            <div className="mt-8 flex flex-col gap-4">
              {contactInfo.map((item) => {
                const Wrapper = item.href ? "a" : "div"
                const wrapperProps = item.href ? { href: item.href } : {}

                return (
                  <Wrapper
                    key={item.label}
                    {...wrapperProps}
                    className="glass-card group flex items-start gap-4 rounded-xl p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs uppercase text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-1 font-medium">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                    )}
                  </Wrapper>
                )
              })}
            </div>

            {/* Map */}
            <div id="map" className="glass-card mt-6 overflow-hidden rounded-xl">
              <iframe
                title="Wardha Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251453.79379489333!2d78.02966006683731!3d20.745291663559408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd531ce1a4c2e7d%3A0x5f09a93ca8e0270a!2sWardha%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-xl font-bold">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-lg border p-3"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-lg border p-3"
                />

                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="rounded-lg border p-3"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg bg-primary p-3 text-white"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <p className="text-sm mt-2">
                    {status}
                  </p>
                )}
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
