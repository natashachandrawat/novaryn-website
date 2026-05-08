"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Layers,
  Sparkles,
  Settings2,
  CheckCircle2,
  ArrowUpRight,
  Activity,
} from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeader, Em } from "./ui/SectionHeader";
import { MiniChart } from "./mocks/MiniChart";
import { Sparkline } from "./mocks/Sparkline";

const ease = [0.22, 1, 0.36, 1];

const SERVICES = [
  {
    icon: Rocket,
    tag: "01 / MVP",
    title: "MVP Development",
    desc: "Ship a credible, production-grade MVP in weeks — engineered to convert investors and validate with real users.",
    use: "Pre-seed and seed startups validating product-market fit.",
    deliverables: [
      "Investor-ready web app",
      "Auth, payments & onboarding",
      "Cloud infra + CI/CD",
      "Analytics & feedback loop",
    ],
  },
  {
    icon: Layers,
    tag: "02 / SAAS",
    title: "Product Engineering",
    desc: "Long-horizon product partner for funded teams — multi-tenant SaaS, complex domain logic, real-time systems.",
    use: "Series A+ companies scaling product surface and team.",
    deliverables: [
      "Multi-tenant architecture",
      "Design system + component lib",
      "Background jobs & queues",
      "Observability & on-call setup",
    ],
  },
  {
    icon: Sparkles,
    tag: "03 / AI",
    title: "AI Integration",
    desc: "Embed LLMs, RAG, and intelligent agents into your product surface — productionised, evaluated, observable.",
    use: "Teams turning AI from demo into a durable product loop.",
    deliverables: [
      "Custom RAG pipelines",
      "Agent orchestration",
      "Eval harness & guardrails",
      "Cost & latency tuning",
    ],
  },
  {
    icon: Settings2,
    tag: "04 / OPS",
    title: "Internal Systems",
    desc: "Operational software your team actually wants to use — dashboards, admin tools, workflows, automations.",
    use: "Operators replacing spreadsheets, no-code stacks, or legacy tools.",
    deliverables: [
      "Custom admin & CRM",
      "Workflow automation",
      "Reporting & BI dashboards",
      "Integrations layer",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <Container>
        <SectionHeader
          index="02"
          label="What we build"
          title={
            <>
              engineering pods <br />
              for <Em>every stage</Em> <br />
              of your product.
            </>
          }
          description={
            <>
              Senior product engineers, designers and AI specialists embedded
              into your team — moving like a startup, shipping like one too.
            </>
          }
        />

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: index * 0.08, ease }}
      data-cursor="hover"
      className="group relative overflow-hidden rounded-3xl border border-graphite-900/10 bg-paper-50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-graphite-900/25 hover:bg-paper hover:shadow-[0_30px_80px_-30px_rgba(13,13,14,0.3)]"
    >
      {/* hairline shine on hover */}
      <span className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-graphite-900/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-graphite-900/12 bg-paper text-graphite-900">
            <Icon className="h-[18px] w-[18px]" />
          </div>
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-graphite-400">
              {service.tag}
            </div>
            <div className="mt-0.5 text-[20px] font-medium tracking-tight text-graphite-900">
              {service.title}
            </div>
          </div>
        </div>
        <ArrowUpRight className="h-4 w-4 text-graphite-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-graphite-900" />
      </div>

      <p className="relative mt-5 text-[14.5px] leading-relaxed text-graphite-500">
        {service.desc}
      </p>

      {/* light inner preview tile */}
      <div className="relative mt-6 overflow-hidden rounded-2xl border border-graphite-900/10 bg-paper p-4">
        <ServiceVisual index={index} />
      </div>

      <div className="relative mt-6 grid grid-cols-1 gap-2.5">
        <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-graphite-400">
          Ideal for
        </div>
        <div className="text-[13.5px] text-graphite-700">{service.use}</div>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {service.deliverables.map((d) => (
          <span
            key={d}
            className="inline-flex items-center gap-1.5 rounded-full border border-graphite-900/12 bg-paper px-2.5 py-1 text-[11.5px] text-graphite-700"
          >
            <CheckCircle2 className="h-3 w-3 text-graphite-900" />
            {d}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ServiceVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div>
        <div className="flex items-center justify-between text-[11px] text-graphite-500">
          <span className="inline-flex items-center gap-1.5">
            <Activity className="h-3 w-3 text-graphite-900" />
            Sprint 04 · launch ready
          </span>
          <span className="font-mono text-graphite-400">82%</span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-graphite-900/[0.06]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "82%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
            className="h-full rounded-full bg-graphite-900"
          />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Auth", "Billing", "Onboarding"].map((x, i) => (
            <div
              key={x}
              className="rounded-md border border-graphite-900/10 bg-paper-50 px-2 py-1.5 text-[10.5px] text-graphite-700"
            >
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-2.5 w-2.5 text-emerald-600" />
                {x}
              </div>
              <div className="mt-0.5 font-mono text-[9.5px] text-graphite-400">
                merged · {i + 1}h
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div>
        <div className="flex items-center justify-between text-[11px] text-graphite-500">
          <span>Active workspaces</span>
          <span className="text-emerald-600">+18.4%</span>
        </div>
        <MiniChart variant="area" color="indigo" height={86} />
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="space-y-2">
        <div className="rounded-lg border border-graphite-900/10 bg-paper-50 px-3 py-2 text-[11.5px] text-graphite-700">
          <span className="text-graphite-400">user · </span>"Why did churn spike in March?"
        </div>
        <div className="rounded-lg border border-graphite-900 bg-graphite-900 px-3 py-2 text-[11.5px] text-paper">
          <span className="text-paper/55">novaryn · </span>Two enterprise accounts paused billing during plan migration. Recovery flow recommended.
          <div className="mt-1.5 flex gap-1.5">
            <span className="rounded-md border border-paper/15 bg-paper/5 px-1.5 py-0.5 font-mono text-[10px] text-paper/70">
              tool: postgres
            </span>
            <span className="rounded-md border border-paper/15 bg-paper/5 px-1.5 py-0.5 font-mono text-[10px] text-paper/70">
              tool: stripe
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex items-center justify-between text-[11px] text-graphite-500">
        <span>Workflow runs · today</span>
        <Sparkline color="#0d0d0e" />
      </div>
      <div className="mt-3 grid grid-cols-1 gap-1.5">
        {[
          { l: "Daily ops digest", s: "OK", c: "emerald" },
          { l: "Refund routing", s: "OK", c: "emerald" },
          { l: "Inventory sync", s: "Retry", c: "amber" },
        ].map((r) => (
          <div
            key={r.l}
            className="flex items-center justify-between rounded-md border border-graphite-900/10 bg-paper-50 px-2.5 py-1.5"
          >
            <span className="text-[11.5px] text-graphite-800">{r.l}</span>
            <span
              className={
                r.c === "emerald"
                  ? "rounded-md border border-emerald-600/25 bg-emerald-600/10 px-1.5 py-0.5 text-[10px] text-emerald-700"
                  : "rounded-md border border-amber-500/30 bg-amber-500/12 px-1.5 py-0.5 text-[10px] text-amber-700"
              }
            >
              {r.s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
