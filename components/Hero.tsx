"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { FadingVideo } from "./FadingVideo";

const ease = [0.22, 1, 0.36, 1] as const;

function Word({
  delay,
  italic,
  children,
}: {
  delay: number;
  italic?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.span
      initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
      animate={{
        filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
        opacity: [0, 0.5, 1],
        y: [50, -5, 0],
      }}
      transition={{
        duration: 0.7,
        times: [0, 0.5, 1],
        ease: "easeOut",
        delay,
      }}
      className={`inline-block mr-[0.18em] ${italic ? "font-serif italic font-normal" : ""}`}
    >
      {children}
    </motion.span>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const subtleY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-paper"
    >
      {/* Light fallback while the video streams in — soft warm cream */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 35%, rgba(230,200,160,0.45), transparent 55%), radial-gradient(ellipse 60% 50% at 70% 65%, rgba(220,210,200,0.30), transparent 60%), #efece5",
        }}
      />

      {/* Background video — tonally inverted so dark space → paper / cream */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute left-1/2 -translate-x-1/2 object-cover object-top z-0"
        style={{
          top: "-25%",
          width: "120%",
          height: "130%",
          filter: "invert(1) hue-rotate(180deg) saturate(0.85)",
        }}
      />

      {/* Soft paper wash to push the video into the brand palette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(239,236,229,0.10) 0%, rgba(239,236,229,0.35) 75%, rgba(239,236,229,0.85) 100%)",
        }}
      />

      {/* Editorial grid tiles + subtle noise grain — original Novaryn ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-80" />
        <div className="absolute inset-0 bg-noise mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 pt-16 md:pt-20 pb-24">
        {/* MASSIVE TYPOGRAPHY HERO */}
        <motion.h1
          style={{ opacity: opacityFade }}
          className="text-display-2xl lowercase font-display tracking-[-0.05em] text-graphite-900 leading-[0.88]"
        >
          <span className="block">
            <Word delay={0.1}>we engineer</Word>
          </span>
          <span className="block">
            <Word delay={0.25} italic>
              ai-native
            </Word>
            <Word delay={0.4}>software</Word>
          </span>
          <span className="block">
            <Word delay={0.55}>for</Word>
            <Word delay={0.7} italic>
              serious
            </Word>
            <Word delay={0.85}>startups.</Word>
          </span>
        </motion.h1>

        {/* below-the-fold meta row */}
        <motion.div
          style={{ y: subtleY }}
          className="mt-10 grid grid-cols-1 items-end gap-12 md:mt-12 lg:grid-cols-[1fr_auto] lg:gap-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease }}
            className="max-w-xl"
          >
            <p className="text-[16.5px] leading-[1.65] text-graphite-600">
              An engineering studio for funded startups and modern operators.
              We design, build and ship MVPs, SaaS platforms, AI products and
              operational software — for teams who want it done seriously.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-7">
              <a
                href="#contact"
                data-cursor="hover"
                className="group relative inline-flex items-center gap-3 text-[15.5px] font-medium tracking-tight text-graphite-900"
              >
                <span className="relative">
                  Book a discovery call
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-graphite-900 transition-transform duration-300 group-hover:scale-x-0" />
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-graphite-900/25 transition-all duration-300 group-hover:border-graphite-900 group-hover:bg-graphite-900 group-hover:text-paper">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
              <a
                href="#case-studies"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 text-[14.5px] text-graphite-500 transition-colors duration-300 hover:text-graphite-900"
              >
                Selected works
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* meta numbers right side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.35, ease }}
            className="flex items-end gap-12 md:gap-16 lg:justify-self-end"
          >
            <Meta n="01" l="MVP delivery" v="6 — 10 wks" />
            <Meta n="02" l="Engineering" v="Senior pods" />
            <Meta n="03" l="Stack" v="AI-native" />
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mt-16 flex items-center gap-3 md:mt-20"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-graphite-900/15">
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="block h-1 w-1 rounded-full bg-graphite-900"
            />
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-graphite-500">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function Meta({ n, l, v }: { n: string; l: string; v: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite-500">
        {n} · {l}
      </span>
      <span className="mt-3 font-display text-[26px] font-medium leading-none tracking-[-0.02em] text-graphite-900 md:text-[32px]">
        {v}
      </span>
    </div>
  );
}
