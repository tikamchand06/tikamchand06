import { profile } from "@/lib/content"

const siteTitle = `${profile.name} — ${profile.role}`

export function pageMetadata({ title, description, path }) {
  const ogTitle = title ? `${title} — ${profile.name}` : siteTitle

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: profile.name,
      title: ogTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      creator: "@tikamchand06",
    },
  }
}

export const personSchema = {
  "@type": "Person",
  "@id": `${profile.url}/#person`,
  name: profile.name,
  jobTitle: profile.role,
  url: profile.url,
  image: `${profile.url}${profile.photo}`,
  email: `mailto:${profile.email}`,
  worksFor: {
    "@type": "Organization",
    name: "UXArmy",
    url: "https://www.uxarmy.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Browser extensions",
    "Web applications",
  ],
  sameAs: profile.socials.map((social) => social.href),
}

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${profile.url}/#website`,
  url: profile.url,
  name: profile.name,
  publisher: { "@id": personSchema["@id"] },
}
