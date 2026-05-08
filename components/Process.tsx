"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Lightbulb,
  Code2,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeader, Em } from "./ui/SectionHeader";

const ease = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    icon: Compass,
    duration: "1 — 2 weeks",
    desc: "We embed with founders to understand the product, the user, the market and the constraints. We leave with a sharp engineering thesis.",
    deliverables: ["Product brief", "User & technical research", "Risk register"],
  },
  {
    n: "02",
    title: "Product Strategy",
    icon: Lightbulb,
    duration: "1 week",
    desc: "We pressure-test scope, scope down to the smallest credible release, and design the architecture that won't need to be rewritten.",
    deliverables: ["Scope & roadmap", "Architecture map", "Design principles"],
  },
  {
    n: "03",
    title: "Design & Engineering",
    icon: Code2,
    duration: "4 — 10 weeks",
    desc: "Embedded pod ships in two-week increments. Design, frontend, backend, AI and infra move as a single team — not handoffs.",
    deliverables: ["Design system", "Production app", "CI/CD + infra"],
  },
  {
    n: "04",
    title: "QA & Launch",
    icon: ShieldCheck,
    duration: "1 — 2 weeks",
    desc: "Hardening, observability, security review and launch. We don't believe in soft launches that ship broken software in disguise.",
    deliverables: ["Test coverage", "Security review", "Launch playbook"],
  },
  {
    n: "05",
    title: "Ongoing Support",
    icon: HeartHandshake,
    duration: "Continuous",
    desc: "Optional retainer where we keep the product compounding — performance, AI iteration, new features, and on-call confidence.",
    deliverables: ["SLA + on-call", "Monthly product review", "Roadmap evolution"],
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36">
      <Container>
        <SectionHeader
          align="center"
          index="04"
          label="How we engineer"
          title={
            <>
              a process built to <Em>ship</Em>, <br />
              not to bill hours.
            </>
          }
          description={
            <>
              Five stages, calibrated for funded startups. Built to compress
              timelines without compromising the systems we leave behind.
            </>
          }
        />

        <div className="relative mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[34px] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-graphite-900/15 to-transparent lg:block"
          />

          <ol className="space-y-7">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: i * 0.07, ease }}
                  className="group relative"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-8">
                    {/* node */}
                    <div className="relative flex w-[72px] flex-shrink-0 items-start justify-center">
                      <div className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-graphite-900/12 bg-paper transition-all duration-500 group-hover:border-graphite-900 group-hover:bg-graphite-900 group-hover:text-paper">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full border border-graphite-900/12 bg-paper px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-graphite-500">
                        {s.n}
                      </span>
                    </div>

                    {/* card */}
                    <div className="relative flex-1 overflow-hidden rounded-2xl border border-graphite-900/10 bg-paper-50 p-7 transition-all duration-500 hover:border-graphite-900/25 hover:bg-paper">
                      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                        <h3 className="text-[22px] font-medium tracking-tight text-graphite-900">
                          {s.title}
                        </h3>
                        <span className="rounded-full border border-graphite-900/12 bg-paper px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-graphite-500">
                          {s.duration}
                        </span>
                      </div>
                      <p className="mt-3 max-w-[640px] text-[14px] leading-relaxed text-graphite-500">
                        {s.desc}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {s.deliverables.map((d) => (
                          <span
                            key={d}
                            className="rounded-full border border-graphite-900/10 bg-paper px-2.5 py-1 text-[11.5px] text-graphite-700"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
