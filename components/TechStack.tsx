"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeader, Em } from "./ui/SectionHeader";

const TECH = [
  { name: "React", glyph: "⚛" },
  { name: "Next.js", glyph: "△" },
  { name: "TypeScript", glyph: "TS" },
  { name: "FastAPI", glyph: "⚡" },
  { name: "Node.js", glyph: "▲" },
  { name: "PostgreSQL", glyph: "◼" },
  { name: "OpenAI", glyph: "✦" },
  { name: "Tailwind CSS", glyph: "≈" },
  { name: "Docker", glyph: "▢" },
  { name: "Kubernetes", glyph: "⎈" },
  { name: "tRPC", glyph: "↯" },
  { name: "Redis", glyph: "❖" },
];

export function TechStack() {
  return (
    <section className="relative py-28 md:py-32">
      <Container>
        <SectionHeader
          align="center"
          index="01"
          label="Foundation"
          title={
            <>
              the modern stack <br />
              <Em>startups trust.</Em>
            </>
          }
          description={
            <>
              We pick technology like senior engineers — boring where it
              matters, ambitious where it counts. Typed end-to-end, observable
              by default, ready to scale.
            </>
          }
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-paper to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-paper to-transparent"
          />
          <div className="overflow-hidden">
            <div className="marquee-track">
              {[...TECH, ...TECH].map((t, i) => (
                <TechBadge key={i} name={t.name} glyph={t.glyph} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-graphite-900/10 bg-graphite-900/[0.04] sm:grid-cols-3">
          {[
            {
              t: "Type-safe end to end",
              d: "TypeScript, tRPC, Zod — typed contracts from API to UI.",
            },
            {
              t: "AI-first by default",
              d: "Every product ships with relevant LLM, RAG and automation layers.",
            },
            {
              t: "Observable & secure",
              d: "OpenTelemetry, audit trails, SOC 2-ready architecture.",
            },
          ].map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-paper p-8 transition-colors duration-300 hover:bg-paper-50"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite-400">
                0{i + 1}
              </span>
              <div className="mt-3 text-[15px] font-medium tracking-tight text-graphite-900">
                {b.t}
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-graphite-500">
                {b.d}
              </p>
              <span className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-graphite-900 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TechBadge({ name, glyph }: { name: string; glyph: string }) {
  return (
    <div className="group flex items-center gap-3 whitespace-nowrap rounded-full border border-graphite-900/10 bg-paper-50 px-5 py-2.5 transition-all duration-300 hover:border-graphite-900/30 hover:bg-paper">
      <span className="font-mono text-[13px] text-graphite-500 transition-colors duration-300 group-hover:text-graphite-900">
        {glyph}
      </span>
      <span className="text-[13.5px] font-medium tracking-tight text-graphite-900">
        {name}
      </span>
    </div>
  );
}
