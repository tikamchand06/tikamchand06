import Link from "next/link"
import { ArrowUpRight, Copyright } from "lucide-react"

import { SocialIcon } from "@/components/social-icon"
import { profile } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border md:mt-28">
      <div className="shell py-12">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-2 md:p-12">
          <div
            aria-hidden
            className="aurora pointer-events-none absolute -inset-16 opacity-50"
          />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="meta text-muted-foreground">
                Let&rsquo;s work together
              </p>
              <p className="display mt-4 max-w-md text-heading text-balance">
                Have something{" "}
                <span className="text-gradient">worth building?</span>
              </p>
            </div>

            <Link
              href="/contact-me"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform duration-[var(--motion-fast)] hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="meta text-muted-foreground">
            <Copyright
              aria-label="Copyright"
              className="inline size-3.5 -translate-y-px align-middle"
            />{" "}
            {new Date().getFullYear()} {profile.name} · Icons by{" "}
            <a
              href="https://lordicon.com/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Lordicon.com
            </a>
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-2">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-9 items-center justify-center rounded-sm text-muted-foreground transition-colors duration-[var(--motion-fast)] hover:bg-muted hover:text-foreground"
                >
                  <SocialIcon name={social.icon} className="size-4" />
                  <span className="sr-only">
                    {social.label} (opens in a new tab)
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
