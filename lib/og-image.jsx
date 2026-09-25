import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { profile } from "@/lib/content"

export const ogSize = { width: 1200, height: 630 }

export async function renderOgImage({ title, subtitle, tagline }) {
  const photo = await readFile(join(process.cwd(), "public", profile.photo))
  const fonts = join(process.cwd(), "assets", "fonts")
  const [bricolage, interRegular, interSemiBold] = await Promise.all([
    readFile(join(fonts, "BricolageGrotesque-ExtraBold.ttf")),
    readFile(join(fonts, "Inter-Regular.ttf")),
    readFile(join(fonts, "Inter-SemiBold.ttf")),
  ])
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "radial-gradient(circle at 85% 20%, rgba(14,165,233,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(109,59,255,0.4), transparent 50%), #0b0a14",
        color: "#fff",
        fontFamily: "Inter",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 80,
          bottom: 48,
          fontSize: 24,
          fontWeight: 600,
          color: "#a5a3b8",
        }}
      >
        {profile.url.replace(/^https?:\/\//, "")}
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #6d3bff, #0ea5e9)",
              fontSize: 24,
              fontWeight: 800,
              fontFamily: "Bricolage",
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: 26, color: "#a5a3b8" }}>
            github.com/tikamchand06
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 72,
            fontWeight: 800,
            fontFamily: "Bricolage",
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 36,
            fontWeight: 600,
            backgroundImage: "linear-gradient(90deg, #8b5cf6, #38bdf8)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {subtitle}
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "#a5a3b8",
            lineHeight: 1.4,
          }}
        >
          {tagline}
        </div>
      </div>

      <div
        style={{
          width: 340,
          height: 340,
          borderRadius: 9999,
          padding: 8,
          display: "flex",
          background: "linear-gradient(135deg, #6d3bff, #0ea5e9)",
        }}
      >
        <img
          src={photoSrc}
          width={324}
          height={324}
          style={{ borderRadius: 9999, objectFit: "cover" }}
        />
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: "Bricolage", data: bricolage, weight: 800, style: "normal" },
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
      ],
    }
  )
}
