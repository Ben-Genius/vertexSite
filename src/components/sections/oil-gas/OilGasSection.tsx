"use client";

import { motion } from "framer-motion";
import { Globe, Users, Building2, Shield, Target, CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease = [0.25, 0.1, 0.25, 1] as const;

const credentials = [
  "Licensed by Ghana National Petroleum Corporation",
  "ISO 9001:2015 Certified Operations",
  "HSE Compliant Workforce",
  "24/7 Emergency Response Capability",
];

const credentialBadges = [
  "GNPC Licensed",
  "ISO 9001:2015",
  "HSE Compliant",
  "24/7 Response",
];

// 6 services mapped to bento cards
const oilGasServices = [
  { title: "Logistics & Supply Chain", desc: "Importation, transportation and re-exportation of offshore vessel equipment and project cargo.", icon: Globe },
  { title: "Manpower Provision", desc: "Provision of local manpower to provide routine support services for smooth offshore operations.", icon: Users },
  { title: "Warehousing & Storage", desc: "Secure warehousing and storage solutions for pipe inventory and project materials.", icon: Building2 },
  { title: "Regulatory Compliance", desc: "Full project support covering permits and regulatory documentation in Ghana's energy sector.", icon: Shield },
  { title: "Immigration Assistance", desc: "Meet and Greet support and immigration assistance for international personnel.", icon: Users },
  { title: "Inventory Management", desc: "Systematic inventory management ensuring traceability and reducing project downtime.", icon: Target },
];


export function OilGasSection() {
  return (
    <section id="oil-gas" className="overflow-hidden">
      {/* Cinematic Hero */}
      <div className="relative min-h-[85vh] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/img-oil-ship.jpg"
            alt="Oil & Gas Operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
        </div>

        <div className="relative z-10 container-vr pb-20">
          <div className="flex flex-wrap gap-2 mb-10">
            {credentialBadges.map((badge, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, ease }}
                className="px-4 py-1.5 border border-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase text-white/70 backdrop-blur-sm bg-white/5"
              >
                {badge}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-gold" />
              <span className="label-caps text-gold">Oil & Gas Division</span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white leading-tight mb-6">
              Specialized <span className="text-gold">Energy Solutions</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              Vertex Ridge extends its core engineering and logistics strength into Ghana's upstream and midstream energy sector, supporting operators and contractors across offshore and onshore operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-gold text-charcoal font-bold rounded-full hover:bg-white transition-all duration-300 text-sm"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Credentials Strip */}
      <div className="bg-charcoal border-b border-white/8 py-8">
        <div className="container-vr">
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {credentials.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-white/60 text-sm">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ICOMAT Bento Card Grid */}
      <div className="bg-white py-20">
        <div className="container-vr">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-maroon" />
              <span className="label-caps text-maroon text-[10px]">Offshore Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              What We <span className="text-maroon">Provide</span>
            </h2>
          </motion.div>

          {/* Bento grid — 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[220px]">

            {/* Intro dark card — spans 1 col, 2 rows */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="lg:row-span-2 rounded-2xl bg-charcoal p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Globe className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white leading-snug mb-3">
                  Our Energy<br />Services
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  End-to-end offshore support — from logistics and manpower to regulatory compliance and inventory.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all duration-200"
              >
                Get in Touch <ArrowUpRight size={14} />
              </Link>
            </motion.div>

            {/* Service cards — light */}
            {oilGasServices.slice(0, 4).map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.07, ease }}
                className="rounded-2xl bg-[#f2f2f0] p-7 flex flex-col justify-between group hover:bg-[#ebebea] transition-colors duration-300"
              >
                <div className="w-9 h-9 flex items-center justify-center">
                  <service.icon
                    className="w-7 h-7 text-charcoal/30"
                    strokeWidth={1}
                    strokeDasharray="4 2"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-[15px] mb-1 leading-snug">{service.title}</h4>
                  <p className="text-charcoal/50 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Dark accent card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.42, ease }}
              className="rounded-2xl bg-maroon p-7 flex flex-col justify-between"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <Shield className="w-7 h-7 text-white/40" strokeWidth={1} />
              </div>
              <div>
                <h4 className="font-bold text-white text-[15px] mb-1 leading-snug">GNPC Licensed<br />& ISO Certified</h4>
                <p className="text-white/55 text-sm leading-relaxed">
                  Fully compliant with Ghana's upstream energy regulations.
                </p>
              </div>
            </motion.div>

            {/* Last service card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.49, ease }}
              className="rounded-2xl bg-[#f2f2f0] p-7 flex flex-col justify-between group hover:bg-[#ebebea] transition-colors duration-300"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <Target className="w-7 h-7 text-charcoal/30" strokeWidth={1} strokeDasharray="4 2" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal text-[15px] mb-1 leading-snug">{oilGasServices[5].title}</h4>
                <p className="text-charcoal/50 text-sm leading-relaxed">{oilGasServices[5].desc}</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
