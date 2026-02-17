import { Shield, Scaling, Paintbrush, Zap, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure Architecture",
    description:
      "Enterprise-grade security built into every layer of our applications, protecting your data and your users.",
  },
  {
    icon: Scaling,
    title: "Scalable Systems",
    description:
      "Architecture designed to grow with your business, handling increased load without compromising performance.",
  },
  {
    icon: Paintbrush,
    title: "Modern UI/UX",
    description:
      "Beautiful, intuitive interfaces that delight users and drive engagement through thoughtful design.",
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description:
      "Optimized for speed and efficiency, ensuring lightning-fast load times and smooth interactions.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description:
      "We put your customers at the center of every decision, building solutions that truly connect.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="section-glow py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Why ThreeMonkeys
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built Different. Built Better.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We combine technical expertise with a deep understanding of
              business needs to deliver products that stand apart.
            </p>
          </div>

          {/* Right: Feature list with glassmorphism */}
          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card group flex gap-4 rounded-xl p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
