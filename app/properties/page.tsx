import Link from "next/link";
import Image from "next/image";
import { properties } from "@/lib/properties";

export const metadata = {
  title: "Apartments in Bucerias Golden Zone",
  description: "View the 8 simple apartments at Suites Angelica for monthly, seasonal, and long-term stays in Bucerias' Golden Zone.",
};

export default function Properties() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-[820px] px-6 py-16 text-center md:py-24">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-900/45">8 apartments · one small building</p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-slate-900 md:text-5xl">Simple apartments for monthly and seasonal stays.</h1>
          <p className="mt-6 text-[17px] leading-[1.75] text-slate-900/70">Suites Angelica is designed for guests who want a practical, comfortable place in a great Bucerias location. Each apartment is modest and easy to maintain, with access to the shared pool and the walkable Golden Zone.</p>
        </div>
      </section>
      <div className="mx-auto max-w-[1100px] px-6"><div className="border-t border-slate-200" /></div>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-10 md:grid-cols-2">
            {properties.map((property) => (
              <Link href={`/properties/${property.slug}`} key={property.slug} className="group block">
                <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 group-hover:-translate-y-[2px] group-hover:shadow-lg">
                  <div className="overflow-hidden"><Image src={property.image} alt={property.name} width={1600} height={1000} className="h-[330px] w-full object-cover transition duration-700 group-hover:scale-[1.04]" /></div>
                  <div className="p-6">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900/40">{property.floor} · {property.bedrooms}</div>
                    <h2 className="mt-2 font-serif text-2xl leading-tight text-slate-900">{property.name}</h2>
                    <p className="mt-3 text-[15px] leading-[1.65] text-slate-600">{property.summary}</p>
                    <p className="mt-4 text-[14px] font-medium text-slate-900/75">View apartment details →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-[850px] px-6 text-center">
          <h2 className="font-serif text-2xl leading-snug text-slate-900 md:text-3xl">Staying for the winter season or several months? Tell us your dates and we will help you find the best available fit.</h2>
          <Link href="/contact" className="mt-8 inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-5 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]">Ask About Availability</Link>
        </div>
      </section>
    </main>
  );
}
