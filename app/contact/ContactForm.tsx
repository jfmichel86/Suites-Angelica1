"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`New inquiry from Suites Angelica website:\n\nName: ${name}\nEmail: ${email}\nPreferred dates / length of stay: ${dates}\n\nMessage:\n${message}`);
    window.open(`https://wa.me/523313619889?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input required type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[15px]" />
      <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[15px]" />
      <input type="text" placeholder="Preferred dates or length of stay" value={dates} onChange={(e) => setDates(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[15px]" />
      <textarea placeholder="Tell us anything helpful: number of guests, preferred suite, monthly stay, seasonal stay, etc." rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[15px]" />
      <button type="submit" className="w-full rounded-lg bg-slate-900 py-3 text-[15px] text-white transition hover:bg-slate-800">Send Inquiry on WhatsApp</button>
    </form>
  );
}
