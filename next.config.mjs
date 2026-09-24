/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/my-work", permanent: true },
      { source: "/about", destination: "/about-me", permanent: true },
      { source: "/contact", destination: "/contact-me", permanent: true },
    ]
  },
}

export default nextConfig
