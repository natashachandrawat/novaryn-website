"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1];

/**
 * Editorial section header.
 *
 *   01 ─── FOUNDATION                       (small eyebrow)
 *
 *   THE MODERN STACK                        (massive headline)
 *   startups trust.                         (italic serif accent)
 *
 *                          We pick technology like senior engineers...
 *                                                           (small body)
 */
export function SectionHeader({
  index,
  label,
  title,
  description,
  align = "left",
  className,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "text-center" : "", className)}>
      {/* eyebrow row — small, restrained */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease }}
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-graphite-900">
          ({index})
        </span>
        <span className="h-px w-10 bg-graphite-900/30" />
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-graphite-500">
          {label}
        </span>
      </motion.div>

      {/* title — MASSIVE */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.05, ease }}
        className={cn(
          "mt-10 text-display-xl font-display lowercase tracking-[-0.045em] text-graphite-900",
          align === "center"
            ? "mx-auto max-w-[18ch] text-balance"
            : "max-w-[20ch]"
        )}
      >
        {title}
      </motion.h2>

      {/* description — well below the title, restrained */}
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className={cn(
            "mt-10",
            align === "center" ? "flex justify-center" : "flex justify-end"
          )}
        >
          <p className="max-w-md text-[15.5px] leading-[1.7] text-graphite-600">
            {description}
          </p>
        </motion.div>
      )}
    </div>
  );
}

/** Inline italic-serif accent. */
export function Em({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-serif italic font-normal tracking-[-0.015em] text-graphite-900">
      {children}
    </span>
  );
}
