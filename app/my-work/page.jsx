import { WorkBrowser } from "@/components/work-browser"
import { projects } from "@/lib/content"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "My Work",
  description:
    "Web apps, products and browser extensions built by Tikam Chand Meghwanshi.",
  path: "/my-work",
})

export default function WorkPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="aurora pointer-events-none absolute -inset-x-40 -top-48 h-[440px] opacity-70"
      />

      <div className="shell relative pt-16 pb-8 md:pt-20 md:pb-20">
        <p className="meta text-muted-foreground">My Work</p>
        <h1 className="display mt-4 text-title">
          Things I&rsquo;ve <span className="text-gradient">built</span>
        </h1>
        <p className="mt-6 max-w-xl text-lead text-pretty text-muted-foreground">
          Products and browser extensions I&rsquo;ve designed and shipped. Pick
          a technology to filter, or click a tag on any card.
        </p>

        <h2 className="sr-only">Projects</h2>
        <div className="mt-12">
          <WorkBrowser projects={projects} />
        </div>
      </div>
    </section>
  )
}
