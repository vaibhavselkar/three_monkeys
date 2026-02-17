import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin, ArrowUpRight, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | ThreeMonkeys",
  description:
    "Get in touch with ThreeMonkeys. Let us turn your idea into reality with our software development expertise.",
}

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
  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Contact Us
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {"Let's Turn Your Idea Into Reality"}
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground">
            Have a project in mind? We would love to hear about it. Reach out and
            {"let's"} start building something great together.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-foreground">Get in Touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Whether you have a detailed project brief or just a rough idea,
              we are here to help you figure out the best path forward.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {contactInfo.map((item) => {
                const Wrapper = item.href ? "a" : "div"
                const wrapperProps = item.href
                  ? { href: item.href }
                  : {}
                return (
                  <Wrapper
                    key={item.label}
                    {...wrapperProps}
                    className="glass-card group flex items-start gap-4 rounded-xl p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-1 font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                    {item.href && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </Wrapper>
                )
              })}
            </div>

            {/* Google Maps Embed */}
            <div
              id="map"
              className="glass-card mt-6 overflow-hidden rounded-xl"
            >
              <iframe
                title="ThreeMonkeys Location - Pune, India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251453.79379489333!2d78.02966006683731!3d20.745291663559408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd531ce1a4c2e7d%3A0x5f09a93ca8e0270a!2sWardha%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) saturate(0.8)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form and we will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
