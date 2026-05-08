"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

const NAV = [
  {
    title: "Studio",
    links: [
      { l: "Services", h: "#services" },
      { l: "Selected Works", h: "#case-studies" },
      { l: "Process", h: "#process" },
      { l: "About", h: "#about" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { l: "MVP Development", h: "#services" },
      { l: "Product Engineering", h: "#services" },
      { l: "AI & Automation", h: "#services" },
      { l: "Internal Systems", h: "#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { l: "Book a call", h: "#contact" },
      { l: "Email", h: "mailto:hello@novaryn.com" },
      { l: "LinkedIn", h: "#" },
      { l: "X / Twitter", h: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-graphite-900/10 bg-paper pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-graphite-500">
              Novaryn is an AI-native product engineering studio. We design
              and ship credible software for funded startups and modern
              operators.
            </p>
            <a
              href="mailto:hello@novaryn.com"
              data-cursor="hover"
              className="group mt-5 inline-flex items-center gap-1.5 text-[13.5px] text-graphite-900"
            >
              <span className="relative">
                hello@novaryn.com
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 bg-graphite-900 transition-transform duration-300 group-hover:scale-x-0" />
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {NAV.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-graphite-400">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.l}>
                    <a
                      href={link.h}
                      data-cursor="hover"
                      className="text-[13.5px] text-graphite-700 transition-colors duration-200 hover:text-graphite-900"
                    >
                      {link.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* huge brand wordmark */}
        <div className="relative mt-20 select-none overflow-hidden">
          <div
            aria-hidden
            className="text-center font-display text-[clamp(80px,18vw,260px)] font-medium leading-[0.88] tracking-[-0.05em] lowercase text-graphite-900"
          >
            nova<span className="font-serif italic">r</span>yn
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-graphite-900/10 pt-6 md:flex-row md:items-center">
          <div className="text-[12px] text-graphite-500">
            © {new Date().getFullYear()} Novaryn Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-[12px] text-graphite-500">
            <a className="hover:text-graphite-900" href="#" data-cursor="hover">Privacy</a>
            <a className="hover:text-graphite-900" href="#" data-cursor="hover">Terms</a>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
