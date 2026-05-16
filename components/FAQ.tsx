"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeader, Em } from "./ui/SectionHeader";

const ease = [0.22, 1, 0.36, 1];

const FAQS = [
  {
    q: "How fast can we launch an MVP with Novaryn?",
    a: "Most MVPs launch in 6 to 10 weeks depending on scope, integrations, and data complexity. We define a smallest-credible release in week one and ship in sprint increments.",
  },
  {
    q: "Do you work only with startups?",
    a: "Startups are our core, but we also partner with modern operator-led businesses building internal tools, automation layers, and AI-assisted product surfaces.",
  },
  {
    q: "Can you work with our in-house team?",
    a: "Yes. We can run as an embedded pod alongside your team, own a product track end-to-end, or take specific systems such as AI workflows, infra, or platform architecture.",
  },
  {
    q: "What does a typical engagement include?",
    a: "Discovery, product strategy, design, engineering, QA, and launch support. If needed, we continue with a post-launch retainer for iteration, reliability, and roadmap velocity.",
  },
  {
    q: "Do you support AI features in production?",
    a: "Yes. We implement RAG pipelines, agent workflows, evaluations, observability, and guardrails so AI features are stable, measurable, and cost-aware in real usage.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="relative pb-12 pt-12 md:pb-16 md:pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[920px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(58,100,255,0.08),transparent_72%)] blur-2xl" />
        <div className="absolute inset-0 bg-grid-fine opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      </div>
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeader
              index="06"
              label="FAQ"
              title={
                <>
                  answers for teams <br />
                  moving <Em>fast.</Em>
                </>
              }
              description={
                <>
                  Straight answers on timelines, collaboration model, and how
                  we build production-grade systems with startups.
                </>
              }
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-8 rounded-2xl border border-graphite-900/10 bg-paper-50 p-5"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-graphite-500">
                Typical Engagement
              </p>
              <p className="mt-2 text-[24px] font-medium tracking-tight text-graphite-900">
                6-10 weeks
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-graphite-600">
                for MVP launch with weekly checkpoints and sprint demos.
              </p>
            </motion.div>
          </div>

          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const active = open === i;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: i * 0.04, ease }}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                    active
                      ? "border-graphite-900/25 bg-paper shadow-[0_22px_65px_-35px_rgba(13,13,14,0.35)]"
                      : "border-graphite-900/10 bg-paper-50 hover:border-graphite-900/20 hover:bg-paper"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(active ? -1 : i)}
                    className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-graphite-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[16px] font-medium leading-tight tracking-tight text-graphite-900 sm:text-[18px]">
                        {item.q}
                      </span>
                    </div>
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-graphite-900/12 bg-paper text-graphite-700">
                      <Plus
                        className={`h-4 w-4 transition-transform duration-300 ${
                          active ? "rotate-45" : "rotate-0 group-hover:rotate-12"
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                      >
                        <div className="border-t border-graphite-900/10 px-4 py-4 sm:px-6 sm:py-5">
                          <p className="max-w-3xl text-[14px] leading-relaxed text-graphite-600 sm:text-[15px]">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
