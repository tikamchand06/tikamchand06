import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

import { SocialIcon } from "@/components/social-icon"
import { profile } from "@/lib/content"

export const metadata = {
  title: "Contact Me",
  description: `Get in touch with ${profile.name}.`,
}

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="aurora pointer-events-none absolute -inset-x-40 -top-48 h-[440px] opacity-70"
      />

      <div className="shell relative pt-16 pb-20 md:pt-20">
        <p className="meta text-muted-foreground">Contact</p>
        <h1 className="display mt-4 max-w-3xl text-title text-balance">
          Have something <span className="text-gradient">worth building?</span>
        </h1>
        <p className="mt-6 max-w-xl text-lead text-pretty text-muted-foreground">
          I take on a small number of projects each year and reply to everything
          within a couple of days.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <div
            className="lift relative flex min-h-[420px] flex-col justify-between gap-10 overflow-hidden rounded-2xl p-8 text-white shadow-glow md:p-10"
            style={{
              background:
                "linear-gradient(135deg, var(--hue-1-from), var(--hue-2-from))",
            }}
          >
            <Image
              src="/contact.webp"
              alt=""
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
              priority
            />
            <span className="meta relative opacity-80">Mail me on</span>
            <ul className="display relative grid gap-3 text-subhead">
              {profile.phone && (
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 hover:underline"
                  >
                    <Phone aria-hidden className="size-5 shrink-0" />
                    {profile.phone}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 break-all hover:underline"
                >
                  <Mail aria-hidden className="size-5 shrink-0" />
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin aria-hidden className="size-5 shrink-0" />
                {profile.location}
              </li>
            </ul>
          </div>

          <ul className="grid content-start gap-4">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="lift group flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-2 hover:border-primary/40"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-muted">
                    <SocialIcon name={social.icon} className="size-5" />
                  </span>
                  <span className="display text-subhead">{social.label}</span>
                  <ArrowUpRight
                    aria-hidden
                    className="ml-auto size-5 shrink-0 text-muted-foreground transition-all duration-[var(--motion-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
