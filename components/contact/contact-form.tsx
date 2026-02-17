"use client"

import React from "react"
import { useState } from "react"
import { Send, CheckCircle2, Loader2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulate API call - replace with Resend API in Phase 2
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
        <div className="neon-btn flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: "", email: "", subject: "", message: "" })
          }}
          className="mt-6 text-sm font-medium text-primary transition-opacity hover:opacity-80"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClasses =
    "mt-2 w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:bg-background/80"

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
      {/* Name & Email row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-foreground"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          placeholder="Project inquiry, partnership, etc."
          className={inputClasses}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Tell us about your project, timeline, and budget..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="neon-btn group flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            Sending...
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground/60 text-center">
        Your data is secure and will never be shared with third parties.
      </p>
    </form>
  )
}
