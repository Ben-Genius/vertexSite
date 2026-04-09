"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  const ease = [0.25, 0.1, 0.25, 1];

  return (
    <section className="relative overflow-hidden w-full m-0 p-0 text-white">
      {/* Dark overlay & image wrapper */}
      <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/img-oil-worker.jpg"
            alt="Vertex CTA Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Blend overlay similar to the inspiration image */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/35 via-navy/50 to-navy/30" />
        </div>

        {/* Texts & Button */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="text-white/80 text-[11px] font-mono tracking-[0.2em] uppercase">
                Work With Vertex Ridge
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6">
              Driving engineering standards, <span className="text-gold">together.</span>
            </h2>

            <p className="text-white/70 text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl leading-relaxed font-light">
              Our network highlights Vertex Ridge&apos;s commitment to excellence, seamlessly connecting elite technical capabilities with uncompromising compliance.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#1e40af] text-white px-8 py-4 rounded-full text-[13px] font-bold tracking-widest uppercase hover:bg-gold hover:text-navy hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: "#0066FF" }} // Blue color similar to inspiration
            >
              Contact Us <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Partner Logos Strip at the bottom */}
      <div className="relative z-10 bg-white py-10 border-t border-gray-200">
        <div className="w-full max-w-[1600px] mx-auto px-5 lg:px-10">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos placeholders styled neatly to mimic corporate brands */}
            <h3 className="text-2xl font-bold text-gray-800 font-serif min-w-[100px] text-center">RelyOn</h3>
            <div className="flex items-center gap-2 min-w-[100px] justify-center text-gray-800">
              <span className="text-2xl font-extrabold tracking-tighter italic">DRILLMEC</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 tracking-wide min-w-[100px] text-center uppercase">Maersk Training</h3>
            <h3 className="text-xl font-bold text-gray-800 tracking-widest min-w-[100px] text-center uppercase">Chevron</h3>
            <h3 className="text-2xl font-bold text-gray-800 min-w-[100px] text-center italic">MODEC</h3>
            <h3 className="text-xl font-bold text-gray-800 font-sans tracking-tight min-w-[100px] text-center">Schlumberger</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
