"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right";

type FadeInSectionProps = {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
};

const directionVariants: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 80 },
  left: { x: -400, y: 0 },
  right: { x: 400, y: 0 },
};

export function FadeInSection({
  children,
  delay = 0,
  direction = "up",
}: FadeInSectionProps) {
  const initialPosition = directionVariants[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...initialPosition }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
