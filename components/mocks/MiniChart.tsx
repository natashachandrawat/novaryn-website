"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
  height?: number;
  variant?: "area" | "line" | "bars";
  color?: "ink" | "indigo" | "blue" | "mix";
};

function buildPath(points: number[], width: number, height: number) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);
  return points
    .map((p, i) => {
      const x = i * stepX;
      const y = height - ((p - min) / range) * height;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function buildArea(points: number[], width: number, height: number) {
  const linePath = buildPath(points, width, height);
  return `${linePath} L ${width} ${height} L 0 ${height} Z`;
}

const sets: Record<string, number[]> = {
  a: [12, 18, 14, 22, 19, 28, 24, 34, 30, 42, 38, 50, 46, 58, 64, 60, 72],
  b: [40, 36, 44, 38, 50, 46, 56, 52, 60, 56, 64, 60, 70, 66, 72, 68, 78],
  c: [10, 14, 12, 16, 22, 18, 26, 24, 30, 28, 36, 34, 42, 40, 48, 46, 54],
};

export function MiniChart({
  className,
  height = 96,
  variant = "area",
  color = "ink",
}: Props) {
  const w = 320;
  const h = height;
  const stroke = {
    ink: "#0d0d0e",
    indigo: "#5a3fff",
    blue: "#3a64ff",
    mix: "url(#mc-mix-stroke)",
  }[color];
  const fillId =
    color === "indigo"
      ? "mc-fill-indigo"
      : color === "blue"
      ? "mc-fill-blue"
      : "mc-fill-ink";

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className={className}
      style={{ width: "100%", height: h }}
    >
      <defs>
        <linearGradient id="mc-fill-ink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d0d0e" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#0d0d0e" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mc-fill-indigo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a3fff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#5a3fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mc-fill-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a64ff" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#3a64ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mc-mix-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d0d0e" />
          <stop offset="55%" stopColor="#5a3fff" />
          <stop offset="100%" stopColor="#3a64ff" />
        </linearGradient>
      </defs>

      {[0.25, 0.5, 0.75].map((t) => (
        <line
          key={t}
          x1="0"
          x2={w}
          y1={h * t}
          y2={h * t}
          stroke="rgba(13,13,14,0.07)"
          strokeDasharray="2 4"
        />
      ))}

      {variant === "area" && (
        <>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            d={buildPath(sets.a, w, h)}
            fill="none"
            stroke={stroke}
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            d={buildArea(sets.a, w, h)}
            fill={`url(#${fillId})`}
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            d={buildPath(sets.c, w, h)}
            fill="none"
            stroke="rgba(13,13,14,0.30)"
            strokeWidth={1.2}
            strokeDasharray="3 4"
          />
        </>
      )}

      {variant === "line" && (
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          d={buildPath(sets.b, w, h)}
          fill="none"
          stroke={stroke}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
      )}

      {variant === "bars" && (
        <g>
          {sets.a.map((v, i) => {
            const max = Math.max(...sets.a);
            const bw = w / sets.a.length - 4;
            const bh = (v / max) * (h - 8);
            const x = i * (w / sets.a.length) + 2;
            const y = h - bh;
            return (
              <motion.rect
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: `${x + bw / 2}px ${h}px` }}
                x={x}
                y={y}
                width={bw}
                height={bh}
                rx={2}
                fill={stroke}
                opacity={0.85}
              />
            );
          })}
        </g>
      )}
    </svg>
  );
}
