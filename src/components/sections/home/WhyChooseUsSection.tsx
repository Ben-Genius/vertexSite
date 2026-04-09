"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Award, Zap, CheckCircle2, X } from "lucide-react";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";

const ease = [0.25, 0.1, 0.25, 1] as const;

const advantages = [
  {
    icon: Shield,
    title: "Safety-First Culture",
    desc: "Zero-incident target on every site. HSE compliance is non-negotiable across all our projects.",
  },
  {
    icon: Globe,
    title: "Deep Local Knowledge",
    desc: "Rooted in Ghana's construction landscape — regulatory, community, and supply chain expertise built over 15+ years.",
  },
  {
    icon: Award,
    title: "ISO Certified Quality",
    desc: "ISO 9001:2015 certified processes ensuring consistent quality on every deliverable.",
  },
  {
    icon: Zap,
    title: "End-to-End Delivery",
    desc: "From early design through to commissioning and handover — one accountable partner throughout.",
  },
];

const comparisons = [
  { feature: "Local Knowledge", others: "External firms", vertex: "Deep Ghana roots" },
  { feature: "Regulatory Navigation", others: "Outsourced", vertex: "In-house expertise" },
  { feature: "Community Engagement", others: "Ad hoc", vertex: "Structured approach" },
  { feature: "Resource Management", others: "Standard billing", vertex: "Value-for-money" },
  { feature: "Site Adaptability", others: "Rigid processes", vertex: "Field-experienced team" },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-vr">
        <SectionHeader
          label="Why Vertex Ridge"
          title={<>The <span className="text-maroon">Vertex Ridge</span> Difference</>}
          subtitle="See how our local expertise and field-tested approach sets us apart."
        />

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 rounded-2xl overflow-hidden border border-charcoal/8 shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-charcoal text-white">
            <div className="p-5 text-sm font-bold uppercase tracking-widest text-white/50">Feature</div>
            <div className="p-5 text-sm font-bold uppercase tracking-widest text-white/50 border-l border-white/10">Others</div>
            <div className="p-5 text-sm font-bold uppercase tracking-widest text-gold border-l border-white/10">Vertex Ridge</div>
          </div>
          {/* Rows */}
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease }}
              className={`grid grid-cols-3 border-t border-charcoal/6 ${i % 2 === 0 ? "bg-sand/40" : "bg-white"}`}
            >
              <div className="p-5 text-sm font-semibold text-charcoal">{row.feature}</div>
              <div className="p-5 text-sm text-charcoal/40 border-l border-charcoal/6 flex items-center gap-2">
                <X size={14} className="text-charcoal/25 flex-shrink-0" />
                {row.others}
              </div>
              <div className="p-5 text-sm text-charcoal font-semibold border-l border-charcoal/6 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                {row.vertex}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4 Advantage Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-charcoal/8 bg-sand/50 hover:border-maroon/20 hover:bg-white transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-maroon/8 flex items-center justify-center mb-5 group-hover:bg-maroon transition-colors duration-300">
                <item.icon className="w-5 h-5 text-maroon group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-charcoal mb-2 text-base">{item.title}</h4>
              <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
