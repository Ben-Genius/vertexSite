"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, HardHat, ShieldCheck, Zap, Globe, Target, Award } from "lucide-react";
import Link from "next/link";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function BentoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -60]);

  return (
    <section ref={sectionRef} className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-xl"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-maroon" />
            <span className="label-caps text-maroon">Why Vertex Ridge</span>
          </div>
          <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-charcoal leading-tight">
            A New Way to <span className="text-maroon">Build</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[380px]">

          {/* Card 1 — Large dark (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-charcoal group cursor-default "
          >
            <motion.div style={{ y: y1 }} className="absolute inset-0">
              <img
                src="/bento-engineering.png"
                alt="End-to-end Engineering Delivery"
                className="w-full h-[120%] object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal/30 via-charcoal/10 to-maroon/30" />
            <div className="relative h-full p-8 lg:p-10 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <HardHat className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                  End-to-End<br />Project Delivery
                </h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                  From site assessment and technical design through construction, inspection, and formal handover — one firm, full accountability.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Maroon stat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="rounded-2xl bg-maroon p-8 flex flex-col justify-between group"
          >
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[3.5rem] font-bold text-white leading-none mb-2">98%</div>
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider">Client Satisfaction Rate</p>
            </div>
          </motion.div>

          {/* Card 3 — Light card with icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="rounded-2xl bg-sand border border-charcoal/6 p-8 flex flex-col justify-between group hover:border-maroon/20 transition-colors duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-maroon/8 flex items-center justify-center group-hover:bg-maroon/15 transition-colors">
              <Globe className="w-5 h-5 text-maroon" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Ghana-Rooted,<br />Africa-Ready</h3>
              <p className="text-charcoal/50 text-sm leading-relaxed">
                Deep local knowledge combined with international construction standards.
              </p>
            </div>
          </motion.div>

          {/* Card 4 — Image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="relative overflow-hidden rounded-2xl group"
          >
            <motion.div style={{ y: y2 }} className="absolute inset-0">
              <img
                src="/bento-portfolio.png"
                alt="Projects Infrastructure"
                className="w-full h-[120%] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="label-caps text-gold text-[9px] mb-2 block">Portfolio</span>
              <h3 className="text-lg font-bold text-white">200+ Projects<br />Delivered</h3>
            </div>
          </motion.div>

          {/* Card 5 — Gold accent + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="rounded-2xl bg-charcoal p-8 flex flex-col justify-between group"
          >
            <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center">
              <Award className="w-5 h-5 text-gold" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-px bg-gold/60" />
                <span className="label-caps text-gold/70 text-[9px]">ISO Certified</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">QHSE<br />Excellence</h3>
              <Link
                href="/qhse"
                className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all duration-200"
              >
                Learn More <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Card 6 — Efficiency stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="rounded-2xl border border-charcoal/8 bg-white p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-maroon/8 flex items-center justify-center group-hover:bg-maroon/15 transition-colors">
              <Zap className="w-5 h-5 text-maroon" />
            </div>
            <div>
              <div className="text-[3.5rem] font-bold text-charcoal leading-none mb-2">15+</div>
              <p className="text-charcoal/45 text-sm font-medium uppercase tracking-wider">Years Experience</p>
            </div>
          </motion.div>

          {/* Card 7 — Full-width CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="sm:col-span-2 lg:col-span-2 rounded-2xl border border-charcoal/8 bg-sand/50 p-10 lg:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 group" style={{ height: "auto", minHeight: "160px" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-maroon" />
                <span className="label-caps text-maroon text-[9px]">Start a Project</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal leading-tight">
                Ready to build something<br className="hidden sm:block" /> that lasts?
              </h3>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-maroon text-white font-bold rounded-xl hover:bg-maroon/90 hover:shadow-xl transition-all duration-300 text-sm group/btn"
            >
              Get in Touch
              <ArrowUpRight size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
