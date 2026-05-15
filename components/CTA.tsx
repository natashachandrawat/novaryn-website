"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { useRef } from "react";
import { Container } from "./ui/Container";
import { Em } from "./ui/SectionHeader";

const ease = [0.22, 1, 0.36, 1];

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="contact" ref={ref} className="relative pt-12 md:pt-16 pb-28 md:pb-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-[28px] border border-graphite-900/10 bg-paper-50 px-7 py-20 md:px-16 md:py-32"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(90,63,255,0.10),transparent_70%)] blur-2xl"
          />

          <motion.div style={{ y }} className="relative will-change-transform">
            <div className="flex items-baseline gap-4">
              <span className="font-serif italic text-[clamp(2.4rem,3.4vw,3.2rem)] leading-none tracking-tight text-graphite-500">
                06
              </span>
              <span className="hidden h-px max-w-[140px] flex-1 bg-graphite-900/15 sm:block" />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-graphite-500">
                Let&rsquo;s work together
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.05, ease }}
              className="mt-10 max-w-[15ch] text-display-2xl lowercase font-display text-graphite-900"
            >
              building <br />
              something <Em>serious?</Em>
            </motion.h2>

            <div className="mt-14 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15, ease }}
                className="max-w-md text-[16.5px] leading-[1.7] text-graphite-600"
              >
                Whether you need an MVP shipped in eight weeks, an AI layer
                rebuilt for production, or an engineering pod for the next
                phase — we should talk.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
                className="flex flex-col items-start gap-4 lg:items-end"
              >
                <a
                  href="mailto:hello@nyravon.com"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-3 rounded-full bg-graphite-900 px-5 py-3 text-[14.5px] font-medium tracking-tight text-paper transition-all duration-300 hover:bg-graphite-700 hover:shadow-[0_18px_50px_-12px_rgba(13,13,14,0.4)]"
                >
                  Book a discovery call
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper text-graphite-900">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
                <a
                  href="mailto:hello@nyravon.com"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-2 text-[14px] text-graphite-500 hover:text-graphite-900"
                >
                  <Mail className="h-3.5 w-3.5" />
                  hello@nyravon.com
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-16 grid grid-cols-1 gap-8 border-t border-graphite-900/10 pt-8 sm:grid-cols-3 sm:gap-4"
            >
              <Meta n="01" l="Reply within" v="24 hours" />
              <Meta n="02" l="Discovery" v="Always free" />
              <Meta n="03" l="NDA" v="On request" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function Meta({ n, l, v }: { n: string; l: string; v: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite-400">
        {n} · {l}
      </span>
      <span className="mt-1.5 text-[15px] tracking-tight text-graphite-900">
        {v}
      </span>
    </div>
  );
}
