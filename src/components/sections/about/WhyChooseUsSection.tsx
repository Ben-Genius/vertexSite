"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X, Shield, Globe, Award, Zap } from "lucide-react";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";

const ease = [0.25, 0.1, 0.25, 1] as const;

const comparisons = [
  { feature: "Local Knowledge", others: "External firms with no local context", vertex: "Deep Ghana roots — 15+ years on local sites" },
  { feature: "Regulatory Navigation", others: "Outsourced or delayed approvals", vertex: "In-house expertise on GHA regulatory framework" },
  { feature: "Community Engagement", others: "Ad hoc, reactive approach", vertex: "Structured community liaison from day one" },
  { feature: "Resource Management", others: "Standard billing regardless of efficiency", vertex: "Value-for-money with transparent cost monitoring" },
  { feature: "Site Adaptability", others: "Rigid international processes", vertex: "Field-experienced team ready for any condition" },
  { feature: "Handover Quality", others: "Minimum documentation provided", vertex: "Full as-built drawings, manuals, and operator training" },
];

const advantages = [
  { icon: Shield, title: "Safety-First Culture", desc: "Zero-incident target on every site. HSE compliance is non-negotiable." },
  { icon: Globe, title: "Deep Local Knowledge", desc: "15+ years navigating Ghana's regulatory and community landscape." },
  { icon: Award, title: "ISO Certified Quality", desc: "ISO 9001:2015 certified processes on every deliverable." },
  { icon: Zap, title: "End-to-End Delivery", desc: "From design through to commissioning — one accountable partner." },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-vr">
        <SectionHeader
          label="Why Vertex Ridge"
          title={<>The <span className="text-maroon">Vertex Ridge</span> Difference</>}
          subtitle="A side-by-side view of what separates us from the competition."
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
          <div className="grid grid-cols-[1fr,1fr,1.2fr] bg-charcoal">
            <div className="p-5 text-xs font-bold uppercase tracking-widest text-white/40">Feature</div>
            <div className="p-5 text-xs font-bold uppercase tracking-widest text-white/40 border-l border-white/8">Other Contractors</div>
            <div className="p-5 text-xs font-bold uppercase tracking-widest text-gold border-l border-white/8">Vertex Ridge</div>
          </div>

          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease }}
              className={`grid grid-cols-[1fr,1fr,1.2fr] border-t border-charcoal/6 ${i % 2 === 0 ? "bg-sand/30" : "bg-white"}`}
            >
              <div className="p-5 text-sm font-semibold text-charcoal">{row.feature}</div>
              <div className="p-5 text-sm text-charcoal/40 border-l border-charcoal/6 flex items-start gap-2">
                <X size={13} className="text-charcoal/20 flex-shrink-0 mt-0.5" />
                <span>{row.others}</span>
              </div>
              <div className="p-5 text-sm font-semibold text-charcoal border-l border-charcoal/6 flex items-start gap-2">
                <CheckCircle2 size={13} className="text-gold flex-shrink-0 mt-0.5" />
                <span>{row.vertex}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4 Advantage Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
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
