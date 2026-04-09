"use client";

import { motion } from "framer-motion";
import { AccentLine } from "./AccentLine";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface SectionHeaderProps {
  label: string;
  labelColor?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  label,
  labelColor = "text-maroon",
  title,
  subtitle,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  const accentColor = labelColor.includes("gold") ? "bg-gold" : "bg-maroon";
  const textColor = dark ? "text-white" : "text-charcoal";
  const subtitleColor = dark ? "text-white/60" : "text-charcoal/60";
  const alignClass = align === "center" ? "items-center text-center" : "items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease }}
      className={`flex flex-col ${alignClass} gap-4 mb-14`}
    >
      <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <AccentLine color={accentColor} />
        <span className={`label-caps ${labelColor}`}>{label}</span>
      </div>
      <h2 className={`text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight ${textColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed max-w-2xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
