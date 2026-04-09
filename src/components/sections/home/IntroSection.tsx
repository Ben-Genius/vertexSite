"use client";

import { motion } from "framer-motion";
import { ChronicleButton } from "@/components/ui/chronicle-button";
import { CountUp } from "@/components/sections/shared/CountUp";
import { MarqueeRow } from "@/components/sections/shared/MarqueeRow";

const ease = [0.25, 0.1, 0.25, 1] as const;

const stats = [
  { number: "15+", label: "Years in Business", suffix: "" },
  { number: "200+", label: "Projects Delivered", suffix: "" },
  { number: "50+", label: "Expert Engineers", suffix: "" },
  { number: "98%", label: "Client Satisfaction", suffix: "" },
];

const marqueeItems = [
  "CIVIL ENGINEERING",
  "OIL & GAS SUPPORT",
  "PROJECT MANAGEMENT",
  "INFRASTRUCTURE",
  "CONSTRUCTION",
  "COMMISSIONING",
  "PROCUREMENT",
  "TECHNICAL DESIGN",
];

export function IntroSection() {
  return (
    <section className="bg-charcoal text-white overflow-hidden">
      {/* Company intro */}
      <div className="container-vr pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-maroon" />
              <span className="label-caps text-maroon">Grounded</span>
            </div>
            <p className="text-xl sm:text-2xl text-white/75 leading-relaxed border-l-4 border-maroon pl-6">
              Vertex Ridge Limited is a Ghanaian-owned construction and engineering firm shaped by years of practical experience, delivering world-class infrastructure solutions rooted in local ecosystems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <ChronicleButton
              text="Our Services"
              onClick={() => { window.location.href = "/services"; }}
              width="200px"
              borderRadius="9999px"
            />
            <ChronicleButton
              text="View Projects"
              onClick={() => { window.location.href = "/projects"; }}
              width="200px"
              outlined
              borderRadius="9999px"
            />
          </motion.div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="container-vr pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-8 lg:p-10 border-r border-b lg:border-b-0 border-white/10 last:border-r-0 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="text-[clamp(3rem,8vw,5rem)] font-bold leading-none mb-2 text-white">
                <CountUp value={stat.number} />
              </div>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Capabilities Marquee Ticker */}
      <div className="border-t border-white/8 py-5 overflow-hidden">
        <MarqueeRow pauseOnHover>
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-6 mr-6">
              <span className="label-caps text-white/30">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-maroon/60 flex-shrink-0" />
            </span>
          ))}
        </MarqueeRow>
      </div>
    </section>
  );
}
