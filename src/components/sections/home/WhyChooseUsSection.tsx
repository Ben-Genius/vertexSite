"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Award, Zap, CheckCircle2, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease = [0.25, 0.1, 0.25, 1] as const;

const advantages = [
  {
    icon: Shield,
    title: "Safety-First Culture",
    desc: "Zero-incident target on every site. HSE compliance is non-negotiable.",
  },
  {
    icon: Globe,
    title: "Deep Local Knowledge",
    desc: "Rooted in Ghana's landscape — regulatory, community, and supply chain expertise built over 15+ years.",
  },
  {
    icon: Award,
    title: "ISO Certified Quality",
    desc: "ISO 9001:2015 certified processes ensuring consistent quality on every deliverable.",
  },
  {
    icon: Zap,
    title: "End-to-End Delivery",
    desc: "From early design through to commissioning — one accountable partner throughout.",
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
    <section className="py-24 bg-[#f5f5f3] overflow-hidden">
      <div className="container-vr">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-maroon" />
            <span className="label-caps text-maroon text-[10px]">Why Vertex Ridge</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-charcoal leading-tight">
            The Vertex Ridge <span className="text-maroon">Difference</span>
          </h2>
        </motion.div>

        {/* ICOMAT bento card grid — 3 cols, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[220px] mb-12">

          {/* Dark intro card — row-span-2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="lg:row-span-2 rounded-2xl bg-charcoal p-8 flex flex-col justify-between shadow-lg group transition-all duration-300"
          >
            <div>
              <div className="w-9 h-9 flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 origin-bottom-left">
                <CheckCircle2 className="w-7 h-7 text-white/20 group-hover:text-[#F3E5AB] transition-colors duration-300" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug mb-3 transform group-hover:translate-x-1 transition-transform duration-300">
                A New Way<br />to Build
              </h3>
              <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                What sets Vertex Ridge apart from any other firm operating in Ghana.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold hover:text-white hover:gap-3 transition-all duration-200"
            >
              Learn more <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          {/* 4 light advantage cards */}
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.07, ease }}
              className="rounded-2xl bg-white p-7 flex flex-col justify-between group hover:bg-[#fafaf9] transition-colors duration-300"
            >
              <div className="w-9 h-9 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 origin-left">
                <item.icon
                  className="w-7 h-7 text-charcoal/25 group-hover:text-maroon transition-colors duration-300"
                  strokeWidth={1}
                  strokeDasharray="4 2"
                />
              </div>
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                <h4 className="font-bold text-charcoal text-[15px] mb-1 leading-snug group-hover:text-maroon transition-colors duration-300">{item.title}</h4>
                <p className="text-charcoal/50 text-sm leading-relaxed group-hover:text-charcoal/70 transition-colors duration-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Dark accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.42, ease }}
            className="rounded-2xl bg-maroon p-7 flex flex-col justify-between shadow-md group transition-all duration-300"
          >
            <div className="w-9 h-9 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 origin-left">
              <Award className="w-7 h-7 text-white/25 group-hover:text-[#F3E5AB] transition-colors duration-300" strokeWidth={1} />
            </div>
            <div className="transform group-hover:translate-x-1 transition-transform duration-300">
              <h4 className="font-bold text-white text-[15px] mb-1 leading-snug group-hover:text-[#F3E5AB] transition-colors duration-300">
                15+ Years<br />of Excellence
              </h4>
              <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                Proven delivery record across Ghana's most demanding projects.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="rounded-2xl overflow-hidden border border-charcoal/8 bg-white shadow-sm"
        >
          <div className="grid grid-cols-3 bg-charcoal">
            <div className="p-4 text-[10px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase">Feature</div>
            <div className="p-4 text-[10px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase border-l border-white/8">Others</div>
            <div className="p-4 text-[10px] font-mono font-bold tracking-[0.2em] text-gold uppercase border-l border-white/8">Vertex Ridge</div>
          </div>
          {comparisons.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-t border-charcoal/6 ${i % 2 === 0 ? "bg-[#fafaf9]" : "bg-white"}`}
            >
              <div className="p-4 text-sm font-semibold text-charcoal">{row.feature}</div>
              <div className="p-4 text-sm text-charcoal/40 border-l border-charcoal/6 flex items-center gap-2">
                <X size={12} className="text-charcoal/20 flex-shrink-0" />
                {row.others}
              </div>
              <div className="p-4 text-sm text-charcoal font-semibold border-l border-charcoal/6 flex items-center gap-2">
                <CheckCircle2 size={12} className="text-maroon flex-shrink-0" />
                {row.vertex}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
