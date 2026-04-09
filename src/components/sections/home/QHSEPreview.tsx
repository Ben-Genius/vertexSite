"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const pillars = [
  {
    number: "01",
    title: "Quality Assurance",
    desc: "Documented inspection regimes and material standards that ensure every asset meets specification.",
    image: "/qhse_quality_assurance.png",
  },
  {
    number: "02",
    title: "Health & Safety First",
    desc: "Zero-incident culture with PPE enforcement, toolbox talks and daily safety briefings on all sites.",
    image: "/qhse_health_safety.png",
  },
  {
    number: "03",
    title: "Environmental Responsibility",
    desc: "Waste management, dust suppression and sustainable material sourcing on every project.",
    image: "/qhse_environmental.png",
  },
  {
    number: "04",
    title: "Compliance & Improvement",
    desc: "Regulatory compliance and continuous improvement cycles across all operations.",
    image: "/qhse_compliance.png",
  },
];

export function QHSEPreview() {
  return (
    <section className="py-24 bg-navy overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-gold" />
              <span className="label-caps text-gold">QHSE Commitment</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Quality, Safety &amp; <br className="hidden sm:block" />
              <span className="text-gold">Responsibility</span>
            </h2>
          </motion.div>
          <Link
            href="/qhse"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-gold transition-colors"
          >
            View Full Policy <ArrowRight size={14} />
          </Link>
        </div>

        {/* Pillar Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="group relative rounded-2xl overflow-hidden"
              style={{ minHeight: "460px" }}
            >
              {/* Image */}
              <img
                src={pillar.image}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-navy/70 group-hover:bg-navy/50 transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[460px]">
                <span className="text-5xl font-bold text-white/15 mb-auto block">{pillar.number}</span>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck size={16} className="text-gold" />
                    <span className="label-caps text-gold text-xs">QHSE</span>
                  </div>
                  <h4 className="font-bold text-white text-xl mb-3">{pillar.title}</h4>
                  <p className="text-white/70 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
