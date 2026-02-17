import {
  Activity,
  Smartphone,
  UtensilsCrossed,
  Layout,
  Gamepad2,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Hospital Web Applications",
    description:
      "Comprehensive healthcare platforms with patient management, scheduling, and electronic health records for modern medical facilities.",
  },
  {
    icon: Smartphone,
    title: "Mobile Shop Management",
    description:
      "Smart POS and inventory systems that streamline mobile shop operations with real-time tracking and analytics.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Systems",
    description:
      "End-to-end restaurant management solutions including ordering, kitchen display systems, and delivery integration.",
  },
  {
    icon: Layout,
    title: "Portfolio Websites",
    description:
      "Stunning, performant portfolio websites that showcase your work with elegant design and smooth interactions.",
  },
  {
    icon: Gamepad2,
    title: "Gaming Applications",
    description:
      "Engaging gaming experiences built with modern technologies, optimized for performance and player enjoyment.",
  },
]

export function ServicesSection() {
  return (
    <section className="section-glow py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            What We Build
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Solutions Across Industries
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            From healthcare to gaming, we craft digital products that solve real
            problems and drive business growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card group rounded-xl p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
