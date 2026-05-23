import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { properties } from "@/lib/properties";

const Button = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-5 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]">{children}</Link>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-3xl leading-[1.12] tracking-tight text-slate-900 md:text-4xl">{children}</h2>
);

export default function Home() {
  const featured = properties.slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden bg-[#f4f0ea]">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block">
          <Image src="/images/hero.svg" alt="Suites Angelica apartments in Bucerias Golden Zone" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,240,234,0.98)_0%,rgba(244,240,234,0.72)_36%,rgba(244,240,234,0.18)_74%,rgba(244,240,234,0)_100%)]" />
        </div>
        <Container>
          <div className="relative z-10 max-w-[700px] py-16 md:py-24">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-900/50">Bucerias Golden Zone · Nayarit, Mexico</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.015em] text-slate-900 sm:text-5xl md:text-6xl">
              Your own easy home base in Bucerias’ Golden Zone.
            </h1>
            <p className="mt-6 max-w-[640px] text-[18px] leading-[1.75] text-slate-900/72">
                Suites Angelica is a small tower of 8 warm, rustic-style apartments in one of Bucerias’ most walkable areas. A comfortable option for expats, remote workers, retirees, and long-stay visitors looking for an affordable place to settle into.
            </p>
            <div className="mt-8 flex flex-wrap gap-4"><Button href="/properties">View Apartments</Button><Link href="/contact" className="inline-flex h-11 items-center text-[15px] font-medium underline underline-offset-4">Ask About Availability</Link></div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f1f4f8]">
        <Container>
          <div className="mx-auto max-w-[860px] py-16 text-center md:py-24">
            <SectionTitle>Relaxed, affordable apartments in a location that makes daily life easy.</SectionTitle>
              <p className="mt-5 text-[17px] leading-[1.8] text-slate-900/70">
                Suites Angelica offers relaxed coastal living with warm rustic character, a shared pool, and a small-building atmosphere. The best part is the location: walk to the beach, restaurants, cafes, shops, and everyday essentials.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
            <div>
              <SectionTitle>Stay in the area many Canadian visitors choose year after year.</SectionTitle>
              <p className="mt-5 text-[17px] leading-[1.8] text-slate-900/70">Suites Angelica is in Bucerias’ Golden Zone, one of the most walkable and desirable parts of town. From here, you can enjoy simple daily routines without depending on a car.</p>
              <ul className="mt-6 space-y-3 text-[16px] leading-[1.75] text-slate-900/75">
                {['About 3 blocks from the beach','Shared pool for residents and guests','Close to restaurants, cafes, and everyday essentials','Small building with only 8 apartments','A practical option for annual, monthly, and seasonal stays'].map((item) => <li key={item} className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />{item}</li>)}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3]"><Image src="/images/location.svg" alt="Bucerias Golden Zone near restaurants and beach" fill className="object-cover" /></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f0e8]">
        <Container>
          <div className="py-16 md:py-24">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionTitle>Explore the apartments</SectionTitle><Button href="/properties">See All 8 Apartments</Button></div>
            <p className="mt-4 max-w-[720px] text-[16px] leading-[1.75] text-slate-900/68">Each apartment has its own simple charm, with the same main advantages: an affordable setup, a convenient Golden Zone location, and access to the shared pool.</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {featured.map((property) => (
                <Link href={`/properties/${property.slug}`} key={property.slug} className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition hover:-translate-y-[2px] hover:shadow-lg">
                  <Image src={property.image} alt={property.name} width={900} height={650} className="h-64 w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                  <div className="p-6"><h3 className="font-serif text-2xl text-slate-900">{property.name}</h3><p className="mt-3 text-[15px] leading-[1.65] text-slate-600">{property.summary}</p></div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="mx-auto max-w-[780px] py-16 text-center md:py-24">
            <SectionTitle>Looking for a place you can come back to every year?</SectionTitle>
            <p className="mt-5 text-[17px] leading-[1.75] text-slate-900/70">Ask us about annual leases, seasonal stays, monthly rentals, or shorter visits. Many guests like having a familiar place in Bucerias they can return to year after year.</p>
            <div className="mt-8"><Button href="/contact">Contact Us</Button></div>
          </div>
        </Container>
      </section>
    </>
  );
}
