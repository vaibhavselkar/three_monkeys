"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Healthcare",
  "Retail",
  "Hospitality",
  "Creative",
  "Gaming",
] as const

type Category = (typeof categories)[number]

const projects = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive healthcare platform with patient records, appointment scheduling, billing integration, and real-time health monitoring dashboards for modern medical facilities.",
    image: "/images/project-hospital.jpg",
    category: "Healthcare" as Category,
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Smart POS for Mobile Shops",
    description:
      "Intelligent point-of-sale system with real-time inventory tracking, sales analytics, supplier management, and multi-location support for mobile retail chains.",
    image: "/images/project-pos.jpg",
    category: "Retail" as Category,
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Restaurant Ordering Platform",
    description:
      "End-to-end restaurant management with digital menus, table-side ordering, kitchen display systems, delivery integration, and revenue analytics.",
    image: "/images/project-restaurant.jpg",
    category: "Hospitality" as Category,
    tech: ["Next.js", "Prisma", "PostgreSQL", "WebSockets"],
  },
  {
    title: "Creative Portfolio Templates",
    description:
      "A collection of stunning, performant portfolio website templates for designers, developers, and creatives with CMS integration and smooth animations.",
    image: "/images/project-portfolio.jpg",
    category: "Creative" as Category,
    tech: ["Next.js", "Framer Motion", "MDX", "Vercel"],
  },
  {
    title: "Gaming Applications",
    description:
      "Immersive gaming experiences with real-time multiplayer support, leaderboards, achievements, and cross-platform compatibility for web and mobile.",
    image: "/images/project-gaming.jpg",
    category: "Gaming" as Category,
    tech: ["React", "Canvas API", "WebSockets", "Redis"],
  },
]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="mt-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              activeCategory === category
                ? "neon-btn bg-primary text-primary-foreground"
                : "glass-card text-muted-foreground hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.title}
            className="glass-card group overflow-hidden rounded-xl"
          >
            {/* Image with blue overlay */}
            <div className="blue-overlay relative aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ zIndex: 10 }}>
                <span className="neon-btn flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                  View Details
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                {project.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary/80 ring-1 ring-inset ring-primary/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
