import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Page not found",
}

const suggestions = [
  { href: "/my-work", label: "My Work" },
  { href: "/about-me", label: "About Me" },
  { href: "/contact-me", label: "Contact Me" },
]

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="aurora pointer-events-none absolute -inset-x-40 -top-40 h-[520px]"
      />

      <div className="shell relative flex flex-col items-center py-24 text-center md:py-32">
        <p className="meta text-muted-foreground">Error 404</p>

        <p
          aria-hidden
          className="display text-gradient mt-6 text-[120px] leading-none md:text-[200px]"
        >
          404
        </p>

        <h1 className="display mt-6 text-heading text-balance">
          This page took a wrong turn
        </h1>

        <p className="mt-4 max-w-md text-lead text-pretty text-muted-foreground">
          The link may be broken, or the page may have moved. Try one of these
          instead.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform duration-[var(--motion-fast)] hover:-translate-y-0.5"
          >
            <ArrowLeft aria-hidden className="size-4" />
            Back to home
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-2">
          {suggestions.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2 text-[14px] font-semibold transition-colors duration-[var(--motion-fast)] hover:bg-muted"
              >
                {link.label}
                <ArrowRight aria-hidden className="size-3.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
