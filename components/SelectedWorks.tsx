"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Container } from "./ui/Container";
import { SectionHeader, Em } from "./ui/SectionHeader";
import {
  CRMVisual,
  HRMSVisual,
  MfgVisual,
  WorkflowVisual,
} from "./works/visuals";

const ease = [0.22, 1, 0.36, 1];

const WORKS = [
  {
    n: "01",
    category: "Sales Intelligence",
    title: "Pipeline Intelligence",
    sub: "AI CRM Platform",
    description:
      "An AI-native CRM concept built around real-time deal scoring, explainable insights, and revenue automation for high-velocity teams.",
    tags: ["Next.js", "Postgres", "pgvector", "Temporal"],
    span: "lg:col-span-7",
    Visual: CRMVisual,
  },
  {
    n: "02",
    category: "People Operations",
    title: "Workforce OS",
    sub: "Multi-tenant HRMS",
    description:
      "An operating system for distributed people teams — hiring, time, performance and payroll in one consumer-grade product surface.",
    tags: ["React", "Node.js", "Redis", "AWS"],
    span: "lg:col-span-5",
    Visual: HRMSVisual,
  },
  {
    n: "03",
    category: "Operational Software",
    title: "Plant Ops",
    sub: "Manufacturing Dashboard",
    description:
      "Real-time control surface for modern factories — connecting PLCs, MES data and predictive models into a single command view.",
    tags: ["FastAPI", "TimescaleDB", "MQTT", "K8s"],
    span: "lg:col-span-5",
    Visual: MfgVisual,
  },
  {
    n: "04",
    category: "Workflow Automation",
    title: "Workflow Engine",
    sub: "AI-driven automation",
    description:
      "A graph-based automation engine for ops teams — connect any source, score with AI, and route work without writing code.",
    tags: ["Next.js", "tRPC", "OpenAI", "Edge"],
    span: "lg:col-span-7",
    Visual: WorkflowVisual,
  },
];

export function SelectedWorks() {
  return (
    <section id="case-studies" className="relative pb-10 pt-10 sm:pb-12 sm:pt-12 md:pb-16 md:pt-16">
      <Container className="px-4 sm:px-6 md:px-10">
        <SectionHeader
          index="03"
          label="Selected Works"
          title={
            <>
              concept-grade systems <br />
              built for <Em>serious software.</Em>
            </>
          }
          description={
            <>
              A curated look at the platforms our team designs and engineers —
              composed concept previews of what we ship for the startups we
              partner with.
            </>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:mt-16 md:gap-6 lg:grid-cols-12">
          {WORKS.map((w, i) => (
            <WorkCard key={w.n} work={w} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-graphite-900/10 pt-8 md:flex-row md:items-center"
        >
          <p className="max-w-md text-[13px] sm:text-[13.5px] text-graphite-500">
            More projects, deeper architecture write-ups and reference
            implementations available on request under NDA.
          </p>
          <a
            href="#contact"
            data-cursor="hover"
            className="group inline-flex items-center gap-2.5 text-[13px] sm:text-[13.5px] font-medium text-graphite-900"
          >
            <span className="relative">
              Request the deck
              <span className="absolute -bottom-0.5 left-0 h-px w-full bg-graphite-900" />
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

function WorkCard({
  work,
  index,
}: {
  work: (typeof WORKS)[number];
  index: number;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const Visual = work.Visual;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [20, -20]);
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 0.98]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, delay: (index % 2) * 0.1, ease }}
      data-cursor="hover"
      data-cursor-label="View"
      className={`group relative overflow-hidden rounded-2xl border border-graphite-900/10 bg-paper-50 text-graphite-900 transition-all duration-700 hover:border-graphite-900/30 hover:shadow-[0_60px_140px_-40px_rgba(13,13,14,0.25)] sm:rounded-3xl ${work.span}`}
    >
      <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-graphite-900/20 to-transparent sm:inset-x-8" />

      <motion.div
        style={{ scale: visualScale }}
        className="relative aspect-[1/1] w-full overflow-hidden border-b border-graphite-900/8 will-change-transform sm:aspect-[4/3] md:aspect-[16/10]"
      >
        <Visual />
      </motion.div>

      <motion.div
        style={{ y }}
        className="relative flex flex-col items-start justify-between gap-4 p-4 will-change-transform sm:gap-5 sm:p-5 md:flex-row md:items-end md:gap-6 md:p-6 lg:p-8"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-graphite-400">
              No. {work.n}
            </span>
            <span className="h-px w-4 bg-graphite-900/20 sm:w-6" />
            <span className="text-[10.5px] uppercase tracking-[0.22em] text-graphite-600">
              {work.category}
            </span>
          </div>
          <h3 className="mt-2.5 text-[1.85rem] leading-[1.05] font-display tracking-tight text-graphite-900 sm:mt-3 sm:text-display-sm">
            {work.title}
            <span className="ml-1.5 block font-serif italic font-normal text-graphite-500 sm:ml-2 sm:inline">
              — {work.sub}
            </span>
          </h3>
          <p className="mt-2.5 max-w-none text-[12.5px] leading-relaxed text-graphite-600 sm:mt-3 sm:max-w-md sm:text-[13.5px]">
            {work.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
            {work.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-graphite-900/10 bg-paper px-2 py-0.5 font-mono text-[10px] text-graphite-700 sm:px-2.5 sm:py-1 sm:text-[10.5px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center self-start rounded-full border border-graphite-900/15 bg-paper text-graphite-700 transition-all duration-300 group-hover:border-graphite-900 group-hover:bg-graphite-900 group-hover:text-paper sm:h-10 sm:w-10 md:h-11 md:w-11 md:self-auto">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </motion.div>
    </motion.article>
  );
}
