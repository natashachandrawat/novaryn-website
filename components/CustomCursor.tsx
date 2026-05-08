"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setHidden(false);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t || !t.closest) return;
      const link = t.closest(
        "a, button, [data-cursor='hover'], [data-cursor]"
      ) as HTMLElement | null;
      if (link) {
        setHovering(true);
        const customLabel = link.getAttribute("data-cursor-label");
        setLabel(customLabel);
      } else {
        setHovering(false);
        setLabel(null);
      }
    };

    const leave = () => {
      setHovering(false);
      setLabel(null);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (hidden) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-white text-[10px] font-medium uppercase tracking-[0.18em] text-black"
        animate={{
          width: label ? 80 : hovering ? 44 : 10,
          height: label ? 80 : hovering ? 44 : 10,
          x: label ? -40 : hovering ? -22 : -5,
          y: label ? -40 : hovering ? -22 : -5,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {label && <span>{label}</span>}
      </motion.div>
    </motion.div>
  );
}
