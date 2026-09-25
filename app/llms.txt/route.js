import { about, profile, projects } from "@/lib/content"

export const dynamic = "force-static"

export function GET() {
  const body = [
    `# ${profile.name}`,
    "",
    `> ${profile.tagline}`,
    "",
    ...about,
    "",
    "## Pages",
    "",
    `- [My Work](${profile.url}/my-work): all projects, filterable by technology`,
    `- [About Me](${profile.url}/about-me): experience, education and tech stack`,
    `- [Contact Me](${profile.url}/contact-me): email, phone and social links`,
    "",
    "## Projects",
    "",
    ...projects.map(
      (project) => `- [${project.name}](${project.url}): ${project.description}`
    ),
    "",
  ].join("\n")

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
