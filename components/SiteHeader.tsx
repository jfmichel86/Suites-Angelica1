"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/Container";

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link href={href} onClick={onClick} className="text-[13px] font-semibold tracking-[0.14em] text-slate-900/70 transition hover:text-slate-900">
    {children}
  </Link>
);

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-900/10 bg-white/95 backdrop-blur">
      <Container className="py-3">
        <div className="flex h-[70px] items-center justify-between">
          <Link href="/" aria-label="Suites Angelica home" className="group">
            <div className="font-serif text-3xl leading-none tracking-tight text-slate-900">Suites Angelica</div>
            <div className="mt-1 text-[11px] font-semibold tracking-[0.22em] text-slate-900/45">BUCERIAS GOLDEN ZONE</div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/properties">PROPERTIES</NavLink>
            <NavLink href="/contact">CONTACT</NavLink>
          </nav>

          <button type="button" aria-label="Open menu" onClick={() => setOpen(true)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900/10 text-slate-900/70 md:hidden">
            <div className="flex flex-col gap-[5px]"><span className="h-[2px] w-5 bg-slate-900/60" /><span className="h-[2px] w-5 bg-slate-900/60" /><span className="h-[2px] w-5 bg-slate-900/60" /></div>
          </button>
        </div>
      </Container>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button aria-label="Close menu overlay" onClick={() => setOpen(false)} className="absolute inset-0 bg-slate-900/20" />
          <div className="absolute left-0 right-0 top-0 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <Container className="py-5">
              <div className="flex items-center justify-between">
                <div><div className="font-serif text-2xl text-slate-900">Suites Angelica</div><div className="text-[10px] font-semibold tracking-[0.22em] text-slate-900/45">BUCERIAS GOLDEN ZONE</div></div>
                <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900/10 text-slate-900/70"><span className="text-[18px] leading-none">×</span></button>
              </div>
              <div className="mt-8 grid gap-5 pb-6">
                <NavLink href="/" onClick={() => setOpen(false)}>HOME</NavLink>
                <NavLink href="/properties" onClick={() => setOpen(false)}>PROPERTIES</NavLink>
                <NavLink href="/contact" onClick={() => setOpen(false)}>CONTACT</NavLink>
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
