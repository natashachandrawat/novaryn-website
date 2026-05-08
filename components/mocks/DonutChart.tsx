"use client";

import { motion } from "framer-motion";

type Segment = { value: number; color: string };

export function DonutChart({
  segments = [
    { value: 48, color: "#0d0d0e" },
    { value: 26, color: "#5a3fff" },
    { value: 16, color: "#3a64ff" },
    { value: 10, color: "rgba(13,13,14,0.20)" },
  ],
  size = 96,
  thickness = 10,
  centerLabel,
  centerSub,
}: {
  segments?: Segment[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerSub?: string;
}) {
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const total = segments.reduce((s, x) => s + x.value, 0);
  let offset = 0;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="rgba(13,13,14,0.07)"
          strokeWidth={thickness}
          fill="none"
        />
        {segments.map((s, i) => {
          const len = (s.value / total) * c;
          const dash = `${len} ${c - len}`;
          const offsetVal = offset;
          offset += len;
          return (
            <motion.circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              stroke={s.color}
              strokeWidth={thickness}
              strokeLinecap="round"
              fill="none"
              strokeDasharray={dash}
              strokeDashoffset={-offsetVal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {centerLabel && (
          <span className="text-[15px] font-semibold tracking-tight text-graphite-900">
            {centerLabel}
          </span>
        )}
        {centerSub && (
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-graphite-400">
            {centerSub}
          </span>
        )}
      </div>
    </div>
  );
}
