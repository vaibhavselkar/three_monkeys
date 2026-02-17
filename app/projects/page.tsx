import type { Metadata } from "next"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export const metadata: Metadata = {
  title: "Projects | ThreeMonkeys",
  description:
    "Explore our portfolio of digital products across healthcare, retail, hospitality, creative, and gaming industries.",
}

export default function ProjectsPage() {
  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Work
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Projects That Drive Results
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground">
            Every project we deliver is a testament to our commitment to quality,
            performance, and customer satisfaction.
          </p>
        </div>

        {/* Projects Grid with Filtering */}
        <ProjectsGrid />
      </div>
    </section>
  )
}
