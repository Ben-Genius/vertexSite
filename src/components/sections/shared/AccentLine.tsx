"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function AccentLine({ color = "bg-maroon" }: { color?: string }) {
  return (
    <motion.div
      className={`w-12 h-px ${color}`}
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease }}
    />
  );
}
