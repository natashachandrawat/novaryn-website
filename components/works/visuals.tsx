"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Activity,
  TrendingUp,
  Zap,
  Cpu,
  Database,
  Bot,
} from "lucide-react";
import { MiniChart } from "../mocks/MiniChart";

const ease = [0.22, 1, 0.36, 1];

/* ---------------------------------------------------------------------------
 * 01 — Pipeline Intelligence (CRM)
 * ------------------------------------------------------------------------- */
export function CRMVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-paper-50">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-10 h-[320px] w-[320px] rounded-full bg-accent-indigo/06 blur-3xl" />
        <div className="absolute -bottom-16 -right-10 h-[300px] w-[300px] rounded-full bg-accent-blue/06 blur-3xl" />
        <div className="absolute inset-0 bg-grid-fine opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative flex h-full flex-col p-4 sm:p-6 lg:p-9">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="grid grid-cols-3 gap-2"
        >
          {[
            { l: "MRR", v: "$284k", d: "+12%" },
            { l: "Win Rate", v: "64%", d: "+4.2" },
            { l: "Cycle", v: "22d", d: "-3d" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-graphite-900/10 bg-paper px-3 py-2.5"
            >
              <div className="text-[9.5px] uppercase tracking-[0.18em] text-graphite-400">
                {s.l}
              </div>
              <div className="mt-0.5 flex items-baseline justify-between">
                <span className="text-[15px] font-semibold tracking-tight text-graphite-900">
                  {s.v}
                </span>
                <span className="text-[10px] font-medium text-emerald-600">
                  {s.d}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="relative mt-3 flex-1 overflow-hidden rounded-2xl border border-graphite-900/10 bg-paper p-3 sm:p-4"
        >
          <div className="flex items-center justify-between text-[11px] text-graphite-500">
            <span className="inline-flex items-center gap-1.5">
              <Activity className="h-3 w-3 text-graphite-900" />
              Pipeline · 30 days
            </span>
            <span className="font-mono text-graphite-400">live</span>
          </div>
          <div className="mt-2">
            <MiniChart variant="area" color="mix" height={120} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="pointer-events-none absolute bottom-4 right-3 w-[min(230px,calc(100%-1.5rem))] rounded-2xl border border-graphite-900 bg-graphite-900 p-2.5 text-paper shadow-[0_30px_60px_-20px_rgba(13,13,14,0.4)] sm:bottom-24 sm:right-6 sm:p-3"
        >
          <div className="flex items-center gap-2 text-[11px] font-medium text-paper">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-paper text-graphite-900">
              <Sparkles className="h-2.5 w-2.5" />
            </span>
            AI Insight
          </div>
          <p className="mt-1.5 text-[10.5px] leading-relaxed text-paper/75">
            3 deals at risk this week. Open accounts likely to slip without
            outreach in 48h.
          </p>
        </motion.div>

        <div className="mt-3 flex items-center justify-between text-[10.5px] text-graphite-400">
          <span className="font-mono">RAG · GPT-class</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-1 w-1 rounded-full bg-emerald-500" />
            Synced 24s ago
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * 02 — Workforce OS (HRMS)
 * ------------------------------------------------------------------------- */
export function HRMSVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-paper-50">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 right-0 h-[260px] w-[260px] rounded-full bg-accent-blue/08 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-[280px] w-[280px] rounded-full bg-accent-indigo/06 blur-3xl" />
        <div className="absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative flex h-full flex-col gap-3 p-7 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-between rounded-2xl border border-graphite-900/10 bg-paper p-3"
        >
          <div className="flex items-center -space-x-2">
            {["LM", "OK", "PS", "MR"].map((n, i) => (
              <div
                key={n}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper text-[10px] font-medium text-paper"
                style={{
                  background: ["#0d0d0e", "#5a3fff", "#3a64ff", "#0d0d0e"][i],
                }}
              >
                {n}
              </div>
            ))}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper bg-paper-50 text-[10px] font-medium text-graphite-700">
              +12
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.18em] text-graphite-400">
              Today
            </div>
            <div className="text-[12px] font-semibold text-graphite-900">
              4 active · 3 onboarding
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="relative flex-1 overflow-hidden rounded-2xl border border-graphite-900/10 bg-paper p-4"
        >
          <div className="flex items-center justify-between text-[11px] text-graphite-500">
            <span>May · Wk 20</span>
            <span className="font-mono text-graphite-400">live</span>
          </div>
          <div className="mt-2.5 grid grid-cols-7 gap-1 text-center">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <div key={i} className="text-[9.5px] uppercase tracking-[0.18em] text-graphite-400">
                {d}
              </div>
            ))}
            {Array.from({ length: 21 }).map((_, i) => {
              const day = i + 6;
              const today = day === 12;
              const event = [9, 14, 22].includes(day);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.018, duration: 0.4 }}
                  className={
                    today
                      ? "relative aspect-square rounded-md bg-graphite-900 text-[10.5px] font-medium text-paper"
                      : event
                      ? "relative aspect-square rounded-md border border-graphite-900/20 bg-paper-50 text-[10.5px] text-graphite-900"
                      : "aspect-square rounded-md bg-graphite-900/[0.025] text-[10.5px] text-graphite-500"
                  }
                >
                  <span className="flex h-full w-full items-center justify-center">
                    {day}
                  </span>
                  {event && !today && (
                    <span className="absolute bottom-0.5 left-1/2 h-0.5 w-1 -translate-x-1/2 rounded-full bg-graphite-900" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="rounded-2xl border border-graphite-900/10 bg-paper p-3"
        >
          <div className="flex items-center justify-between text-[11px] text-graphite-500">
            <span className="inline-flex items-center gap-1.5">
              <TrendingUp className="h-3 w-3 text-graphite-900" />
              Team sentiment
            </span>
            <span className="font-mono text-emerald-600">+4.2</span>
          </div>
          <MiniChart variant="line" color="indigo" height={36} />
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * 03 — Plant Ops (Manufacturing)
 * ------------------------------------------------------------------------- */
export function MfgVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-paper-50">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(58,100,255,0.08),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 bg-grid-fine opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      </div>

      <div className="relative flex h-full flex-col p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2 text-[11px] text-graphite-700">
            <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="font-mono">PLANT 04 · LIVE</span>
          </div>
          <div className="flex items-center gap-3 text-[10.5px] text-graphite-500">
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3 w-3 text-graphite-900" />
              412 kW
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Cpu className="h-3 w-3 text-graphite-900" />
              18 PLCs
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="relative mt-2 flex flex-1 items-center justify-center"
        >
          <SemiGauge value={86} />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-6">
            <div className="text-[10px] uppercase tracking-[0.18em] text-graphite-400">
              OEE · today
            </div>
            <div className="mt-1 text-[36px] font-medium tracking-tight text-graphite-900">
              86<span className="text-graphite-400">.4%</span>
            </div>
            <div className="mt-1 inline-flex items-center gap-1 text-[10.5px] font-medium text-emerald-600">
              <TrendingUp className="h-3 w-3" />
              +3.1% vs avg
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="rounded-2xl border border-graphite-900/10 bg-paper p-3"
        >
          <div className="flex items-center justify-between text-[11px] text-graphite-500">
            <span>Throughput · 24h</span>
            <span className="font-mono text-graphite-400">4.1k units</span>
          </div>
          <MiniChart variant="bars" color="ink" height={48} />
        </motion.div>
      </div>
    </div>
  );
}

function SemiGauge({ value }: { value: number }) {
  const w = 280;
  const h = 150;
  const cx = w / 2;
  const cy = h - 10;
  const r = 110;
  const circ = Math.PI * r;
  const dash = (value / 100) * circ;

  return (
    <svg width="80%" viewBox={`0 0 ${w} ${h}`} className="block">
      <defs>
        <linearGradient id="works-gauge-light" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#0d0d0e" />
          <stop offset="0.5" stopColor="#5a3fff" />
          <stop offset="1" stopColor="#3a64ff" />
        </linearGradient>
      </defs>
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        stroke="rgba(13,13,14,0.07)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        stroke="url(#works-gauge-light)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
        initial={{ strokeDasharray: `0 ${circ}` }}
        whileInView={{ strokeDasharray: `${dash} ${circ}` }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      {Array.from({ length: 13 }).map((_, i) => {
        const a = Math.PI - (i / 12) * Math.PI;
        const x1 = cx + Math.cos(a) * (r + 8);
        const y1 = cy - Math.sin(a) * (r + 8);
        const x2 = cx + Math.cos(a) * (r + 16);
        const y2 = cy - Math.sin(a) * (r + 16);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(13,13,14,0.18)"
            strokeWidth={1}
          />
        );
      })}
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * 04 — Workflow Engine (Automation)
 * ------------------------------------------------------------------------- */
export function WorkflowVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-paper-50">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-10 h-[260px] w-[260px] rounded-full bg-accent-purple/06 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-[260px] w-[260px] rounded-full bg-accent-blue/06 blur-3xl" />
        <div className="absolute inset-0 bg-grid-fine opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative flex h-full flex-col p-7 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-between"
        >
          <div className="text-[11px] text-graphite-500">
            <span className="font-mono uppercase tracking-[0.18em] text-graphite-400">
              Run #28412
            </span>
            <div className="mt-0.5 text-[12px] font-semibold text-graphite-900">
              Lead · Inbound triage
            </div>
          </div>
          <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-700">
            Running
          </span>
        </motion.div>

        <div className="relative flex flex-1 items-center justify-center">
          <svg
            viewBox="0 0 320 200"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="line-glow-light" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#0d0d0e" stopOpacity="0" />
                <stop offset="0.5" stopColor="#5a3fff" stopOpacity="0.9" />
                <stop offset="1" stopColor="#3a64ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease }}
              d="M 78 100 Q 130 80 160 100 Q 195 122 240 100"
              stroke="url(#line-glow-light)"
              strokeWidth="1.6"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6, ease }}
              d="M 160 100 Q 190 140 220 158"
              stroke="rgba(13,13,14,0.30)"
              strokeWidth="1"
              strokeDasharray="3 3"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.7, ease }}
              d="M 160 100 Q 130 60 100 42"
              stroke="rgba(13,13,14,0.30)"
              strokeWidth="1"
              strokeDasharray="3 3"
              fill="none"
            />
            <motion.circle cx={0} cy={0} r="3" fill="#5a3fff">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 78 100 Q 130 80 160 100 Q 195 122 240 100"
              />
            </motion.circle>
          </svg>

          <Node
            x="left-[3%] sm:left-[6%]"
            y="top-[52%] sm:top-1/2 sm:-translate-y-1/2"
            icon={Database}
            title="Stripe"
            sub="webhook"
          />
          <Node
            x="left-1/2 -translate-x-1/2"
            y="top-[64%] sm:top-1/2 sm:-translate-y-1/2"
            icon={Bot}
            title="AI Score"
            sub="GPT-class"
            primary
          />
          <Node
            x="right-[3%] sm:right-[6%]"
            y="top-[52%] sm:top-1/2 sm:-translate-y-1/2"
            icon={Zap}
            title="Slack"
            sub="alert"
          />
          <Node
            x="left-[14%] sm:left-[24%]"
            y="top-[18%] sm:top-[8%]"
            icon={Activity}
            title="Enrich"
            sub="Clearbit"
            small
          />
          <Node
            x="right-[12%] sm:right-[18%]"
            y="top-[30%] sm:bottom-[10%]"
            icon={Sparkles}
            title="Notify"
            sub="email"
            small
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="flex flex-col items-start justify-between gap-1.5 rounded-2xl border border-graphite-900/10 bg-paper px-3 py-2 sm:flex-row sm:items-center sm:gap-0"
        >
          <span className="text-[11px] text-graphite-500">
            <span className="font-mono text-graphite-400">avg</span> 1.4s end-to-end
          </span>
          <div className="flex items-center gap-1.5 text-[10.5px] text-graphite-500">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>4 / 5 steps complete</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Node({
  x,
  y,
  icon: Icon,
  title,
  sub,
  primary,
  small,
}: {
  x: string;
  y: string;
  icon: any;
  title: string;
  sub: string;
  primary?: boolean;
  small?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2, ease }}
      className={`absolute max-sm:scale-[0.56] min-[380px]:max-sm:scale-[0.65] ${x} ${y}`}
    >
      <div
        className={`relative flex items-center gap-2 rounded-xl border bg-paper max-sm:max-w-[84px] max-sm:gap-1 max-sm:rounded-lg min-[380px]:max-sm:max-w-[100px] ${
          primary
            ? "border-graphite-900 px-3 py-2 shadow-[0_18px_40px_-14px_rgba(13,13,14,0.35)] max-sm:px-1.5 max-sm:py-1 min-[380px]:max-sm:px-2 min-[380px]:max-sm:py-1.5"
            : small
            ? "border-graphite-900/10 px-2 py-1.5 max-sm:px-1 max-sm:py-0.5 min-[380px]:max-sm:px-1.5 min-[380px]:max-sm:py-1"
            : "border-graphite-900/10 px-2.5 py-2 max-sm:px-1.5 max-sm:py-1 min-[380px]:max-sm:px-2 min-[380px]:max-sm:py-1.5"
        }`}
      >
        <span
          className={`flex items-center justify-center rounded-md bg-graphite-900 text-paper ${
            primary ? "h-7 w-7 max-sm:h-5 max-sm:w-5 min-[380px]:max-sm:h-6 min-[380px]:max-sm:w-6" : small ? "h-5 w-5 max-sm:h-3.5 max-sm:w-3.5 min-[380px]:max-sm:h-4 min-[380px]:max-sm:w-4" : "h-6 w-6 max-sm:h-4 max-sm:w-4 min-[380px]:max-sm:h-5 min-[380px]:max-sm:w-5"
          }`}
        >
          <Icon className={primary ? "h-3.5 w-3.5 max-sm:h-2.5 max-sm:w-2.5 min-[380px]:max-sm:h-3 min-[380px]:max-sm:w-3" : "h-3 w-3 max-sm:h-2 max-sm:w-2 min-[380px]:max-sm:h-2.5 min-[380px]:max-sm:w-2.5"} />
        </span>
        <div>
          <div
            className={`font-medium tracking-tight text-graphite-900 ${
              primary ? "text-[12.5px] max-sm:text-[9px] min-[380px]:max-sm:text-[11px]" : "text-[10.5px] max-sm:text-[8px] min-[380px]:max-sm:text-[9.5px]"
            }`}
          >
            {title}
          </div>
          <div className="whitespace-nowrap font-mono text-[9.5px] text-graphite-400 max-sm:text-[7px] min-[380px]:max-sm:text-[8.5px]">{sub}</div>
        </div>
      </div>
    </motion.div>
  );
}
