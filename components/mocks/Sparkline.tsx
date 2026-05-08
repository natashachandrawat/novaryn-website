"use client";

import { motion } from "framer-motion";

export function Sparkline({
  className,
  color = "#0d0d0e",
  data = [3, 5, 4, 7, 6, 9, 8, 11, 10, 14, 13, 17, 16, 20],
}: {
  className?: string;
  color?: string;
  data?: number[];
}) {
  const w = 80;
  const h = 22;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = w / (data.length - 1);
  const d = data
    .map((p, i) => {
      const x = i * stepX;
      const y = h - ((p - min) / range) * h;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} style={{ width: w, height: h }}>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4 }}
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}
