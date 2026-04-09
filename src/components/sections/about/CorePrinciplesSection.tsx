"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Search, Handshake } from "lucide-react";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";

const ease = [0.25, 0.1, 0.25, 1] as const;

const principles = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We operate with complete transparency — in procurement, reporting and client relationships. No shortcuts.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Technical Excellence",
    desc: "Our engineers apply global standards to local conditions, ensuring every structure is safe, compliant, and durable.",
  },
  {
    number: "03",
    icon: Search,
    title: "Transparent Procurement",
    desc: "Competitive sourcing, documented inspections and rigorous value-for-money analysis protect every client's budget.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Partnership",
    desc: "We treat every client relationship as a long-term partnership built on accountability and mutual trust.",
  },
];

export function CorePrinciplesSection() {
  return (
    <section className="py-24 bg-sand/50 overflow-hidden">
      <div className="container-vr">
        <SectionHeader
          label="Core Principles"
          title={<>What We <span className="text-maroon">Stand For</span></>}
          subtitle="Four principles guide everything we do — from the first site visit to the final handover."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              className={`relative p-7 rounded-2xl overflow-hidden group cursor-default transition-all duration-300 ${
                i % 2 === 0 ? "bg-white" : "bg-sand/80"
              } border border-charcoal/6 hover:border-maroon/20 hover:shadow-lg hover:shadow-maroon/5`}
            >
              {/* Ghost number */}
              <span className="absolute top-4 right-5 text-7xl font-bold text-charcoal/5 leading-none select-none transform group-hover:scale-110 group-hover:-translate-x-2 transition-all duration-500">
                {p.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-maroon/8 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 origin-left">
                <p.icon className="w-6 h-6 text-maroon group-hover:text-white transition-colors duration-300" />
              </div>

              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                <h4 className="font-bold text-lg text-charcoal mb-3 group-hover:text-maroon transition-colors duration-300">{p.title}</h4>
                <p className="text-charcoal/60 text-sm leading-relaxed group-hover:text-charcoal/80 transition-colors duration-300">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
