import React from "react";
import ContactForm from "./ContactForm";
import Container from "@/components/Container";

export const metadata = {
  title: "Contact Suites Angelica",
  description: "Contact Suites Angelica about annual leases, seasonal stays, monthly rentals, and shorter visits in Bucerias' Golden Zone.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <section className="bg-white">
        <Container>
          <div className="mx-auto max-w-[780px] py-16 text-center md:py-24">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-900/45">Contact</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-slate-900 md:text-5xl">Ask about availability at Suites Angelica.</h1>
            <p className="mt-6 max-w-[560px] text-[17px] leading-[1.65] text-slate-900/70">   Tell us your dates, preferred rental length, and number of guests. We will reply with available options. </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f1f4f8] overflow-hidden">
        <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <div className="space-y-6 md:col-span-6">
              <h2 className="font-serif text-3xl leading-[1.12] tracking-tight text-slate-900 md:text-4xl">Simple communication, no pressure.</h2>
              <p className="text-[17px] leading-[1.65] text-slate-900/75">   Planning from abroad? Send us your questions and we will help you choose the best available option. </p>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-[15px] leading-[1.75] text-slate-700 shadow-sm">
                <p className="font-medium text-slate-900">Helpful details to include:</p>
                <p className="mt-2">   Dates, number of guests, rental length, and any special preferences. </p>
              </div>
              <div className="space-y-2 text-[16px] leading-[1.7] text-slate-900/80">
                <p>Email: info@suitesangelica.com</p>
                <p>Phone / WhatsApp: +52 33 1361 9889</p>
                <p><a href="https://wa.me/523313619889" className="underline underline-offset-4 hover:opacity-80">Message us on WhatsApp</a></p>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <Container>
          <div className="mx-auto max-w-[700px] space-y-4 py-16 text-center md:py-24">
            <h3 className="font-serif text-3xl leading-[1.12] tracking-tight text-slate-900 md:text-4xl">An affordable place to make Bucerias feel familiar.</h3>
            <p className="text-[17px] text-slate-900/75">   Rustic-style apartments, shared pool, and a walkable Golden Zone location. </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
