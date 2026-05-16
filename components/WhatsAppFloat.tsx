"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919358601033";
const WHATSAPP_TEXT = "Hi Novaryn, I'd like to discuss a project.";

export function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_TEXT
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="hover"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-4 right-4 z-[70] inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-graphite-900/20 bg-graphite-900 px-4 py-2.5 text-[14px] font-semibold text-paper shadow-[0_18px_42px_-16px_rgba(13,13,14,0.6)] transition-all duration-300 hover:-translate-y-1 hover:bg-graphite-800 hover:shadow-[0_24px_56px_-16px_rgba(13,13,14,0.72)] sm:bottom-6 sm:right-6 sm:px-5 sm:py-3"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[140%]"
      />
      <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#22c55e]/18 ring-1 ring-[#22c55e]/40">
        <MessageCircle className="h-3.5 w-3.5 text-[#80f5ad]" />
      </span>
      <span className="relative">WhatsApp Us</span>
      <span className="absolute -inset-1 -z-10 rounded-full bg-graphite-900/25 blur-md" />
    </a>
  );
}
