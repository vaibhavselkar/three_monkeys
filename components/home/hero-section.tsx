"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

export function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      if (!glowRef.current) return
      const scrollY = window.scrollY
      glowRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Parallax glow orbs */}
      <div ref={glowRef} className="pointer-events-none absolute inset-0">
        <div className="hero-glow absolute left-1/2 top-[15%] h-[500px] w-[500px] -translate-x-1/2" />
        <div className="hero-glow absolute right-[10%] top-[40%] h-[300px] w-[300px] opacity-10" style={{ animationDelay: "3s" }} />
        <div className="hero-glow absolute left-[10%] bottom-[20%] h-[250px] w-[250px] opacity-[0.08]" style={{ animationDelay: "5s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(199 89% 48% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(199 89% 48% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Tag */}
          <div className="glass-card mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Software Development Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Engineering Digital
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Excellence.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We build scalable, secure, and powerful digital products that
            connect businesses to their customers.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="neon-btn group flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="glass-card group flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-medium text-foreground"
            >
              Contact Us
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "5+", label: "Industries Served" },
            { value: "20+", label: "Projects Delivered" },
            { value: "3", label: "Engineers" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-5 text-center"
            >
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
