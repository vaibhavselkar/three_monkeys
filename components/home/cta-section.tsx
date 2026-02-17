import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="section-glow py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-card relative overflow-hidden rounded-2xl p-12 text-center sm:p-16">
          {/* Background accent orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="hero-glow absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 opacity-20" />
            <div className="hero-glow absolute right-0 bottom-0 h-[200px] w-[200px] translate-x-1/4 translate-y-1/4 opacity-10" />
          </div>

          <div className="relative">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {"Let's Build Something Great Together"}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
              Ready to transform your idea into a powerful digital product? We
              are here to make it happen.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="neon-btn group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
