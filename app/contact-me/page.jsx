import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

import { SocialIcon } from "@/components/social-icon"
import { profile } from "@/lib/content"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Contact Me",
  description: `Hire ${profile.name}, a Jaipur-based software engineer, for web apps, SaaS products and Chrome or Firefox extensions. Email, phone and social links.`,
  path: "/contact-me",
})

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="aurora pointer-events-none absolute -inset-x-40 -top-48 h-[440px] opacity-70"
      />

      <div className="shell relative pt-16 pb-20 md:pt-20">
        <p className="meta text-muted-foreground">Contact Me</p>
        <h1 className="display mt-4 max-w-3xl text-title text-balance">
          Let&rsquo;s build something{" "}
          <span className="text-gradient">together</span>
        </h1>
        <p className="mt-6 max-w-xl text-lead text-pretty text-muted-foreground">
          Got a product, extension or idea in mind? I take on a small number of
          projects each year and reply to every message within a couple of days.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div
            className="lift relative flex min-h-[440px] flex-col justify-between gap-10 overflow-hidden rounded-2xl p-8 text-white shadow-glow md:p-10"
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
            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <span className="meta opacity-80">Reach me on</span>
              {profile.available ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[13px] font-semibold backdrop-blur-md">
                  <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
                  Available for new work
                </span>
              ) : null}
            </div>
            <ul className="display relative grid gap-2 text-lg sm:text-subhead">
              {profile.phone && (
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="-mx-3 flex min-h-11 items-center gap-3 rounded-full px-3 transition-colors duration-[var(--motion-fast)] hover:bg-white/15"
                  >
                    <Phone aria-hidden className="size-5 shrink-0" />
                    {profile.phone}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="-mx-3 flex min-h-11 items-center gap-3 rounded-full px-3 break-all transition-colors duration-[var(--motion-fast)] hover:bg-white/15"
                >
                  <Mail aria-hidden className="size-5 shrink-0" />
                  {profile.email}
                </a>
              </li>
              <li className="flex min-h-11 items-center gap-3">
                <MapPin aria-hidden className="size-5 shrink-0" />
                {profile.location}
              </li>
            </ul>
          </div>

          <ul className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="lift group flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-3.5 shadow-2 hover:border-primary/40"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-muted transition-colors duration-[var(--motion-fast)] group-hover:bg-primary group-hover:text-primary-foreground">
                    <SocialIcon name={social.icon} className="size-5" />
                  </span>
                  <span className="display text-lg">{social.label}</span>
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
