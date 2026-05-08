"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";

const ease = [0.22, 1, 0.36, 1];

const PRINCIPLES = [
  {
    n: "01",
    title: "Senior-only pods",
    desc: "No layered agencies, no junior handoffs. The engineers who scope the work also write the code.",
  },
  {
    n: "02",
    title: "Production every sprint",
    desc: "Two-week increments end with a working production surface — not a deck, not a prototype, not a milestone slide.",
  },
  {
    n: "03",
    title: "Built to outlast us",
    desc: "Architecture, documentation and tests calibrated for the team that inherits the codebase, not just the team that ships v1.",
  },
];

export function MarqueeBand() {
  return (
    <section className="relative isolate overflow-hidden border-y border-graphite-900/10 bg-paper py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-3"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite-900">
            Principles
          </span>
          <span className="h-px w-12 bg-graphite-900/25" />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-graphite-500">
            How we work
          </span>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-3 md:gap-10 lg:gap-16">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
              className="relative"
            >
              <div className="flex items-baseline gap-3 border-t border-graphite-900/15 pt-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite-500">
                  {p.n}
                </span>
              </div>
              <h3 className="mt-5 text-[24px] font-medium tracking-[-0.02em] text-graphite-900 md:text-[28px]">
                {p.title}
              </h3>
              <p className="mt-3 max-w-sm text-[14.5px] leading-[1.65] text-graphite-600">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
