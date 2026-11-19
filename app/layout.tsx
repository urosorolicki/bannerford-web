import type { Metadata } from "next"
import "./globals.css"

const title = "Bannerford | A Medieval Settlement Builder"
const description =
  "Raise a village by the river and follow the lives, trades, and journeys that turn it into a medieval town."

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title,
  description,
  applicationName: "Bannerford",
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Bannerford",
    images: siteUrl ? [{ url: "/art/bannerford-social.jpg", width: 1200, height: 630, alt: "Concept art of a medieval settlement and its stone bridge" }] : undefined,
  },
  twitter: { card: "summary_large_image", title, description, images: siteUrl ? ["/art/bannerford-social.jpg"] : undefined },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
