"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  Accessibility,
  Globe,
  GitBranch,
} from "lucide-react";
import { Container } from "./ui/Container";
import { Em } from "./ui/SectionHeader";

const ease = [0.22, 1, 0.36, 1];

const STANDARDS = [
  { icon: ShieldCheck, label: "SOC 2-Aligned" },
  { icon: Lock, label: "ISO 27001-Ready" },
  { icon: Globe, label: "GDPR Compliant" },
  { icon: Accessibility, label: "WCAG 2.1 AA" },
  { icon: Eye, label: "OpenTelemetry Native" },
  { icon: GitBranch, label: "Source Available" },
];

export function Recognition() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden rounded-3xl border border-graphite-900/10 bg-paper-50 px-7 py-12 md:px-12 md:py-16"
        >
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="font-serif italic text-[clamp(2rem,3vw,2.6rem)] leading-none tracking-tight text-graphite-500">
                  06
                </span>
                <span className="h-px w-16 bg-graphite-900/15" />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-graphite-500">
                  Standards
                </span>
              </div>
              <h3 className="mt-6 text-display-md lowercase font-display text-graphite-900">
                built to standards <br />
                serious teams <Em>expect.</Em>
              </h3>
              <p className="mt-4 max-w-md text-[14px] leading-[1.7] text-graphite-500">
                Every system we ship is designed against the security,
                accessibility and observability standards funded teams
                require — not bolted on after launch.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-graphite-900/10 bg-graphite-900/8 sm:grid-cols-3">
              {STANDARDS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.06, ease }}
                    className="group relative flex items-center gap-3 bg-paper px-4 py-5 transition-colors duration-300 hover:bg-paper-50"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-graphite-900/12 bg-paper-50 text-graphite-900 transition-colors duration-300 group-hover:border-graphite-900 group-hover:bg-graphite-900 group-hover:text-paper">
                      <Icon className="h-[15px] w-[15px]" />
                    </div>
                    <span className="text-[12.5px] font-medium tracking-tight text-graphite-800">
                      {s.label}
                    </span>
                    <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-graphite-900 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
