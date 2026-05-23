"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "left" | "right" | "up";

type RevealTextProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
};

const directionOffsets: Record<Direction, { x: number; y: number }> = {
  left: { x: -96, y: 0 },
  right: { x: 96, y: 0 },
  up: { x: 0, y: 64 },
};

export function RevealText({
  children,
  direction = "left",
  delay = 0,
  className,
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionOffsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 1.05,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
