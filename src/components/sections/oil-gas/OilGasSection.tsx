"use client";

import { motion } from "framer-motion";
import { Globe, Users, Building2, Shield, Target, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
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
      {/* Cinematic Dark Hero */}
      <div className="relative min-h-[90vh] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/project-takoradi.jpg"
            alt="Oil & Gas Operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/75" />
          <div className="absolute inset-0 overlay-maroon-accent" />
        </div>

        <div className="relative z-10 container-vr pb-20">
          {/* Credential badges */}
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
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-gold" />
              <span className="label-caps text-gold">Oil & Gas Division</span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white leading-tight mb-6 max-w-3xl">
              Specialized <span className="text-gold">Energy Solutions</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mb-8">
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

      {/* Credentials + Services */}
      <div className="bg-sand py-24">
        <div className="container-vr">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <SectionHeader
                label="Energy"
                title={<>Our <span className="text-gold">Credentials</span></>}
              />
              <ul className="space-y-4">
                {credentials.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease }}
                    className="flex items-center gap-3 text-charcoal/75"
                  >
                    <CheckCircle2 className="w-5 h-5 text-maroon flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="relative"
            >
              <img
                src="/service-oil-gas.png"
                alt="Oil & Gas Services"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>

          {/* Service Cards */}
          <SectionHeader
            label="Offshore Services"
            title={<>What We <span className="text-maroon">Provide</span></>}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {oilGasServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease }}
                whileHover={{ y: -4 }}
                className="p-6 bg-white rounded-xl border border-t-4 border-t-gold border-charcoal/6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-bold text-charcoal mb-2">{service.title}</h4>
                <p className="text-charcoal/55 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
