import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suitesangelica.com"),
  title: {
    default: "Suites Angelica | Bucerias Apartments for Longer Stays",
    template: "%s | Suites Angelica",
  },
  description: "Simple, comfortable apartments with a shared pool in Bucerias' Golden Zone, about three blocks from the beach and close to restaurants.",
  keywords: ["Bucerias apartments", "Bucerias monthly rentals", "Bucerias Golden Zone", "Canadian snowbirds Bucerias", "long term rentals Bucerias", "seasonal rentals Bucerias"],
  openGraph: {
    title: "Suites Angelica | Bucerias Apartments for Longer Stays",
    description: "Small, practical apartments in Bucerias' Golden Zone for monthly, seasonal, and long-term stays.",
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
              description: "Simple, comfortable apartments for monthly, seasonal, and long-term stays in Bucerias' Golden Zone.",
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
