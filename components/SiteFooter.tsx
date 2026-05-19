import React from "react";
import Container from "@/components/Container";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-10 py-14 text-[14px] text-slate-700 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-serif text-3xl text-slate-900">Suites Angelica</div>
            <p className="mt-4 max-w-[330px] leading-relaxed text-slate-500">
              Simple, practical apartments for monthly, seasonal, and long-term stays in Bucerias’ Golden Zone.
            </p>
          </div>
          <div>
            <span className="mb-4 block text-[12px] uppercase tracking-[0.12em] text-slate-400">Navigation</span>
            <div className="flex flex-col gap-2"><Link href="/" className="hover:text-slate-900">Home</Link><Link href="/properties" className="hover:text-slate-900">Properties</Link><Link href="/contact" className="hover:text-slate-900">Contact</Link></div>
          </div>
          <div>
            <span className="mb-4 block text-[12px] uppercase tracking-[0.12em] text-slate-400">Contact</span>
            <div className="flex flex-col gap-2"><a href="mailto:info@suitesangelica.com" className="hover:text-slate-900">info@suitesangelica.com</a><a href="https://wa.me/523313619889" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">WhatsApp +52 33 1361 9889</a></div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6 text-[13px] text-slate-500">© {new Date().getFullYear()} Suites Angelica. All rights reserved.</div>
      </Container>
    </footer>
  );
}
