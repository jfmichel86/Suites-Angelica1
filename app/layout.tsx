import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://suitesangelica.com"),
  title: {
    default: "Suites Angelica | Furnished Apartments for Rent in Bucerías, Mexico",
    template: "%s | Suites Angelica",
  },
  description: "Furnished apartments for rent in Bucerías, Nayarit. Quiet monthly, seasonal, and long-term rentals in the Golden Zone, about three blocks from the beach.",
  keywords: [
  "Bucerias apartments",
  "Bucerías apartments",
  "Bucerías condos",
   "Bucerias condos",
  "furnished apartments Bucerias",
  "long term rentals Bucerias",
  "monthly rentals Bucerias",
  "seasonal rentals Bucerias",
  "Bucerias Golden Zone",
  "condos near Bucerias beach",
  "expat rentals Bucerias",
  "digital nomad rentals Bucerias",
],
  openGraph: {
    title: "Suites Angelica | Furnished Apartments for Rent in Bucerías",
    description: "Furnished apartments in Bucerías' Golden Zone for monthly, seasonal, and long-term stays near the beach.",
    url: "https://www.suitesangelica.com",
    siteName: "Suites Angelica",
    images: [{ url: "/images/hero.svg", width: 1200, height: 630, alt: "Suites Angelica apartments in Bucerias" }],
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Suites Angelica",
              url: "https://www.suitesangelica.com",
              email: "info@suitesangelica.com",
              telephone: "+523313619889",
              address: { "@type": "PostalAddress", addressLocality: "Bucerias", addressRegion: "Nayarit", addressCountry: "MX" },
              amenityFeature: [{ "@type": "LocationFeatureSpecification", name: "Shared pool", value: true }],
              description: "Furnished apartments for rent in Bucerías' Golden Zone, ideal for monthly, seasonal, and long-term stays near the beach.",
            }),
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
