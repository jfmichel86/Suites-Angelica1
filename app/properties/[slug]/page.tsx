import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProperty, properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const property = getProperty(params.slug);
  if (!property) return { title: "Apartment" };
  return {
    title: `${property.name} in Bucerias`,
    description: property.summary,
  };
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = getProperty(params.slug);
  if (!property) notFound();

  return (
    <main className="bg-white">
      <section className="relative">
        <div className="relative h-[54vh] min-h-[420px] w-full">
          <Image src={property.image} alt={property.name} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>
        <div className="absolute bottom-10 left-0 right-0">
          <div className="mx-auto max-w-[1180px] px-6 text-white">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/75">{property.floor} · {property.bedrooms}</p>
            <h1 className="mt-3 font-serif text-5xl leading-none tracking-tight md:text-6xl">{property.name}</h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`https://wa.me/523313619889?text=${encodeURIComponent(`Hi, I am interested in ${property.name} at Suites Angelica. Could you please share availability and monthly rates?`)}`} className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-[14px] font-medium text-slate-900 transition hover:bg-slate-100">Ask on WhatsApp</a>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-white/35 bg-white/10 px-6 py-3 text-[14px] font-medium text-white backdrop-blur-sm transition hover:bg-white/15">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 md:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h2 className="font-serif text-3xl leading-tight text-slate-900 md:text-4xl">   Simple comfort in Bucerias’ Golden Zone. </h2>
            <p className="mt-5 text-[17px] leading-[1.85] text-slate-900/72">{property.description}</p>
            <ul className="mt-6 space-y-3 text-[17px] leading-[1.7] text-slate-900/72">
  <li>• About 3 blocks from the beach</li>
  <li>• Shared pool</li>
  <li>• Walkable Golden Zone location</li>
  <li>• Annual, monthly, seasonal, and limited shorter stays</li>
</ul>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-serif text-2xl text-slate-900">Apartment details</h3>
            <ul className="mt-5 space-y-3 text-[15px] leading-[1.7] text-slate-700">
              {property.features.map((feature) => <li key={feature} className="flex gap-3"><span className="mt-[10px] h-[2px] w-3 bg-slate-900/40" />{feature}</li>)}
            </ul>
            <div className="mt-6 border-t border-slate-200 pt-5 text-[14px] leading-[1.7] text-slate-600">   Ask us about current availability and rental options. </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f6f0e8] py-16 md:py-20">
        <div className="mx-auto max-w-[820px] px-6 text-center">
          <h2 className="font-serif text-3xl text-slate-900 md:text-4xl">Interested in {property.name}?</h2>
          <p className="mt-4 max-w-[560px] text-[17px] leading-[1.65] text-slate-900/70">   Send us your dates and preferred rental length. We will reply with available options. </p>
          <div className="mt-8"><Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-5 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]">Ask About Availability</Link></div>
        </div>
      </section>
    </main>
  );
}
