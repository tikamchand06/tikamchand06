"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { SocialIcon } from "@/components/social-icon"
import { cn } from "@/lib/utils"
import { profile } from "@/lib/content"

const links = [
  { href: "/my-work", label: "My Work" },
  { href: "/about-me", label: "About Me" },
  { href: "/contact-me", label: "Contact Me" },
]

const isCurrent = (pathname, href) =>
  pathname === href || pathname.startsWith(`${href}/`)

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-[var(--motion-normal)]",
        scrolled
          ? "border-border/70 bg-background/80 shadow-2"
          : "border-transparent bg-background/40"
      )}
    >
      <div className="shell flex h-18 items-center justify-between gap-1 py-4 sm:gap-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <span
            aria-hidden
            className="flex size-9 shrink-0 items-center justify-center rounded-sm text-[14px] font-extrabold text-white shadow-glow transition-transform duration-[var(--motion-normal)] group-hover:scale-105 group-hover:-rotate-6"
            style={{
              background:
                "linear-gradient(135deg, var(--hue-1-from), var(--hue-2-from))",
            }}
          >
            {profile.initials}
          </span>
          <span className="display truncate text-[16px] transition-colors duration-[var(--motion-fast)] group-hover:text-primary min-[400px]:text-[18px] min-[430px]:text-[20px] sm:text-subhead">
            {profile.name}
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-0 sm:gap-3">
          <nav
            aria-label="Main"
            className="hidden items-center gap-1 rounded-md bg-muted p-1 lg:flex"
          >
            {links.map((link) => {
              const isActive = isCurrent(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-sm px-4 py-2 text-[15px] font-semibold transition-colors duration-[var(--motion-fast)]",
                    isActive
                      ? "bg-background text-foreground shadow-2"
                      : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <ul className="hidden items-center gap-1 xl:flex">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-9 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-all duration-[var(--motion-fast)] hover:-translate-y-0.5 hover:bg-primary/5 hover:text-primary"
                >
                  <SocialIcon name={social.icon} className="size-4" />
                  <span className="sr-only">
                    {social.label} (opens in a new tab)
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-11 rounded-sm lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu />
                </Button>
              }
            />
            <SheetContent side="right" className="p-6">
              <SheetTitle className="meta text-muted-foreground">
                Menu
              </SheetTitle>
              <nav aria-label="Mobile" className="mt-8 flex flex-col gap-2">
                {links.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        aria-current={
                          isCurrent(pathname, link.href) ? "page" : undefined
                        }
                        className={cn(
                          "display rounded-md px-4 py-4 text-subhead transition-colors duration-[var(--motion-fast)]",
                          isCurrent(pathname, link.href)
                            ? "bg-secondary text-secondary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        {link.label}
                      </Link>
                    }
                  />
                ))}
              </nav>
              <ul className="mt-8 flex flex-wrap gap-2">
                {profile.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex size-11 items-center justify-center rounded-sm border border-border text-muted-foreground transition-all duration-[var(--motion-fast)] hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                    >
                      <SocialIcon name={social.icon} className="size-5" />
                      <span className="sr-only">
                        {social.label} (opens in a new tab)
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
