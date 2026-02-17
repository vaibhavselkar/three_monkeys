import Link from "next/link"

const navigation = {
  company: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Hospital Web Apps", href: "/projects" },
    { name: "Shop Management", href: "/projects" },
    { name: "Restaurant Systems", href: "/projects" },
    { name: "Portfolio Websites", href: "/projects" },
    { name: "Gaming Apps", href: "/projects" },
  ],
}

export function Footer() {
  return (
    <footer className="section-glow border-t border-primary/5 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="h-2 w-2 rounded-full bg-primary/70" />
                <div className="h-2 w-2 rounded-full bg-primary/40" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                ThreeMonkeys
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building scalable, secure, and powerful digital products that
              connect businesses to their customers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary/5 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {"2026 ThreeMonkeys. All rights reserved."}
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with precision in India.
          </p>
        </div>
      </div>
    </footer>
  )
}
