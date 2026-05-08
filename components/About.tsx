"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Em } from "./ui/SectionHeader";

const ease = [0.22, 1, 0.36, 1];

const PILLARS = [
  {
    t: "Senior-only pods",
    d: "No layered agencies, no junior hand-offs — only product engineers who have shipped at scale.",
  },
  {
    t: "AI as substrate",
    d: "We don't bolt AI onto products as a feature. It is a foundational layer in the systems we ship.",
  },
  {
    t: "Architecture that lasts",
    d: "Boring where it matters, modern where it counts — we leave codebases your future team will thank us for.",
  },
  {
    t: "Founder velocity",
    d: "We move at the speed of the founders we partner with. Two-week increments. Real surface every sprint.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-baseline gap-4"
        >
          <span className="font-serif italic text-[clamp(2.4rem,3.4vw,3.2rem)] leading-none tracking-tight text-graphite-500">
            05
          </span>
          <span className="hidden h-px max-w-[140px] flex-1 bg-graphite-900/15 sm:block" />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-graphite-500">
            The studio
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease }}
          className="mt-12 max-w-[18ch] text-display-xl lowercase font-display text-graphite-900"
        >
          we build software <br />
          like it&rsquo;s <Em>going to last.</Em>
        </motion.h2>

        <div className="mt-20 grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
            className="space-y-5"
          >
            <p className="max-w-md text-[16.5px] leading-[1.7] text-graphite-700">
              Novaryn is a small, deliberately senior team that designs and
              engineers software for funded startups and modern operators.
            </p>
            <p className="max-w-md text-[16px] leading-[1.7] text-graphite-500">
              We think like founders, write code like principals, and ship like
              product owners. Our craft isn't just engineering — it's
              judgement: what to build, what to leave out, what to refuse, and
              what to automate away.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 text-[14.5px] text-graphite-900"
              >
                <span className="relative">
                  Read the engineering principles
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 bg-graphite-900 transition-transform duration-300 group-hover:scale-x-0" />
                </span>
                <span className="font-serif italic text-[15px] text-graphite-700 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.05, ease }}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-graphite-900/10 bg-graphite-900/8 sm:grid-cols-2"
          >
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="group relative bg-paper p-7 transition-colors duration-300 hover:bg-paper-50"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite-400">
                    0{i + 1}
                  </span>
                  <span className="h-px w-5 bg-graphite-900/20" />
                </div>
                <h4 className="mt-4 text-[18px] font-medium tracking-tight text-graphite-900">
                  {p.t}
                </h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-graphite-500">
                  {p.d}
                </p>
                <span className="pointer-events-none absolute bottom-0 left-7 right-7 h-px bg-graphite-900 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
