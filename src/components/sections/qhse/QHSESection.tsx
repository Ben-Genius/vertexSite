"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Leaf, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { CountUp } from "@/components/sections/shared/CountUp";

const ease = [0.25, 0.1, 0.25, 1] as const;

const pillars = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Documented inspection regimes and material testing protocols that ensure every structure meets or exceeds specification.",
    image: "/qhse_quality_assurance.png",
  },
  {
    number: "02",
    icon: Award,
    title: "Health & Safety First",
    desc: "Zero-incident culture with mandatory PPE, daily toolbox talks, incident reporting and risk assessment on all sites.",
    image: "/qhse_health_safety.png",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Environmental Responsibility",
    desc: "Waste segregation, dust suppression, spill prevention and sustainable material sourcing on every project.",
    image: "/qhse_environmental.png",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Compliance & Improvement",
    desc: "Continuous improvement cycles, regular audits and full regulatory compliance across all Ghana operations.",
    image: "/qhse_compliance.png",
  },
];

const certifications = [
  { label: "ISO 9001:2015", desc: "Quality Management" },
  { label: "ISO 14001:2018", desc: "Environmental Management" },
  { label: "OHSAS 18001", desc: "Occupational Health & Safety" },
  { label: "Ghana Standard", desc: "Local Compliance" },
];

const qhseStats = [
  { value: "0", label: "Incident Target" },
  { value: "100%", label: "PPE Compliance" },
  { value: "4", label: "Certified Systems" },
];

export function QHSESection() {
  return (
    <section id="qhse" className="overflow-hidden">
      {/* Navy Hero Header */}
      <div className="bg-navy py-28">
        <div className="container-vr">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="label-caps text-gold">QHSE Policy</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6 max-w-3xl">
              Quality, Health, Safety &amp; <span className="text-gold">Environment</span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
              Our QHSE commitment is not a compliance exercise — it is built into the culture of every team we deploy, on every project we undertake.
            </p>
          </motion.div>
        </div>
      </div>

      {/* QHSE Stats Strip */}
      <div className="bg-maroon">
        <div className="container-vr py-6">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            {qhseStats.map((s, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  <CountUp value={s.value} />
                </div>
                <p className="label-caps text-white/60 text-[10px] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pillar Cards */}
      <div className="bg-sand py-24">
        <div className="container-vr">
          <SectionHeader
            label="Our Pillars"
            title={<>Four <span className="text-maroon">QHSE Pillars</span></>}
            subtitle="Every site, every phase, every team member — our standards never waver."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="group relative rounded-2xl overflow-hidden"
                style={{ minHeight: "500px" }}
              >
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/65 group-hover:bg-charcoal/50 transition-colors duration-500" />

                <div className="relative z-10 p-7 h-full flex flex-col min-h-[500px]">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 origin-left">
                    <pillar.icon className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-5xl font-bold text-white/10 block mb-3 group-hover:text-gold/20 transition-colors duration-300">{pillar.number}</span>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-gold transition-colors duration-300">{pillar.title}</h4>
                    <p className="text-white/0 group-hover:text-white/65 text-sm leading-relaxed transition-all duration-400">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-maroon" />
              <span className="label-caps text-maroon">Certifications</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease }}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-charcoal/8 hover:border-maroon/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-maroon/8 flex items-center justify-center flex-shrink-0 group-hover:bg-maroon transition-colors duration-300">
                    <ShieldCheck className="w-5 h-5 text-maroon group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-sm">{cert.label}</p>
                    <p className="text-charcoal/50 text-xs">{cert.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
