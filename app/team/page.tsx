import type { Metadata } from "next"
import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import { Rocket, Flag, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Team | ThreeMonkeys",
  description:
    "Meet the engineering team behind ThreeMonkeys. Three passionate engineers building digital excellence.",
}

const teamMembers = [
  {
    name: "Siddhant",
    role: "Full Stack Engineer",
    bio: "Architect of scalable systems with a passion for clean code and performant applications. Leads the technical vision and ensures every product meets the highest engineering standards.",
    image: "/images/team-siddhant.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Mayur",
    role: "Backend Specialist",
    bio: "Database wizard and API craftsman who builds the robust foundations our applications run on. Specializes in secure architecture and system optimization.",
    image: "/images/team-mayur.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Vaibhav",
    role: "Frontend Engineer",
    bio: "Pixel-perfect UI specialist who transforms designs into seamless user experiences. Champions accessibility and modern interaction patterns.",
    image: "/images/team-vaibhav.jpg",
    linkedin: "#",
    github: "#",
  },
]

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "We embrace new technologies and creative solutions to push boundaries and deliver cutting-edge products.",
  },
  {
    icon: Flag,
    title: "Ownership",
    description:
      "Every team member takes full responsibility for their work, ensuring quality from concept to deployment.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, never settling for good enough when great is achievable.",
  },
]

export default function TeamPage() {
  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            The Team
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Meet the Engineers
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground">
            Three passionate engineers united by a shared mission to build
            digital products that make a difference.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="glass-card group overflow-hidden rounded-xl"
            >
              {/* Photo with blue gradient overlay */}
              <div className="blue-overlay relative aspect-square overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="mt-5 flex gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5 text-muted-foreground ring-1 ring-inset ring-primary/10 transition-all hover:bg-primary/15 hover:text-primary hover:ring-primary/30"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5 text-muted-foreground ring-1 ring-inset ring-primary/10 transition-all hover:bg-primary/15 hover:text-primary hover:ring-primary/30"
                    aria-label={`${member.name} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="mt-24 section-glow pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Our Values
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Innovation. Ownership. Excellence.
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              These principles guide everything we do, from how we write code to
              how we collaborate with clients.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card group rounded-xl p-8 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
