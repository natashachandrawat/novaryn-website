"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./ui/Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 md:pt-5"
    >
      <nav
        className={cn(
          "relative mx-auto flex w-[min(96%,1180px)] items-center justify-between rounded-full border px-3 pl-5 transition-all duration-500",
          scrolled
            ? "glass-strong-light border-graphite-900/10 shadow-[0_18px_50px_-22px_rgba(13,13,14,0.18)] py-2"
            : "glass-light border-graphite-900/8 py-2.5"
        )}
      >
        <a href="#home" className="flex items-center" data-cursor="hover">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                data-cursor="hover"
                className="group relative inline-flex h-9 items-center px-3 text-[13.5px] text-graphite-600 transition-colors duration-200 hover:text-graphite-900"
              >
                {item.label}
                <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-graphite-900 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            data-cursor="hover"
            className="group hidden lg:inline-flex items-center gap-1.5 rounded-full bg-graphite-900 px-4 h-9 text-[13px] font-medium text-paper transition-all duration-300 hover:bg-graphite-700"
          >
            Book a Call
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-graphite-900/15 bg-paper text-graphite-700 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute left-1/2 top-[68px] w-[min(94%,500px)] -translate-x-1/2 lg:hidden"
          >
            <div className="glass-strong-light overflow-hidden rounded-2xl border border-graphite-900/10 p-2">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-graphite-700 hover:bg-graphite-900/5 hover:text-graphite-900"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-between rounded-xl bg-graphite-900 px-4 py-3 text-sm text-paper"
              >
                Book a Call <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
