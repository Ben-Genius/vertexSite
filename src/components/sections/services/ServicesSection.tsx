"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe, Users, Building2, Shield, Target, Zap, HardHat } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";

const ease = [0.25, 0.1, 0.25, 1] as const;

const coreServices = [
  {
    number: "01",
    icon: Zap,
    title: "Engineering & Technical Design",
    description: "From early assessments to detailed design, we provide the technical foundation for compliant, buildable projects.",
    image: "/img-team-office.jpg",
    items: [
      "Site assessments, topographic surveys and geotechnical input",
      "Structural and architectural support",
      "Technical specs, tender documentation and programming",
      "Coordination with regulators ensuring compliance and approvals",
    ],
  },
  {
    number: "02",
    icon: HardHat,
    title: "Construction & Civil Works",
    description: "We execute building and civil works with disciplined supervision, quality controls and safe working practices.",
    image: "/img-construction.jpg",
    items: [
      "Public and institutional buildings",
      "Concrete, formwork, reinforcement, masonry and finishing works",
      "Earthworks, drainage, minor roads & preparation",
      "M&E installations integrated into construction programme",
    ],
  },
  {
    number: "03",
    icon: Target,
    title: "Procurement & Project Support",
    description: "Responsible sourcing, rigorous inspection and transparent reporting to protect client budgets and timelines.",
    image: "/img-steel-pipes.jpg",
    items: [
      "Vendor pre-qualification, competitive sourcing & testing",
      "Quality assurance and documented inspection regimes",
      "Subcontractor management and on-site coordination",
      "Transparent progress reporting for financial oversight",
    ],
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Commissioning & Handover",
    description: "Structured close-out to ensure every facility is fully tested, documented and ready for immediate operations.",
    image: "/img-oil-ship.jpg",
    items: [
      "Final inspections, punch-list completion and operational testing",
      "As-built documentation, maintenance manuals and training for facility operators",
      "Formal handover with certificates of compliance and clear warranties",
    ],
  },
];

const offshoreServices = [
  { title: "Logistics & Supply Chain", desc: "Importation, transportation and re-exportation of offshore vessel equipment.", icon: Globe },
  { title: "Manpower Provision", desc: "Provision of local manpower to provide routine support services for smooth offshore operations.", icon: Users },
  { title: "Warehousing & Storage", desc: "Secure warehousing and storage solutions purpose-built for pipe inventory and project materials.", icon: Building2 },
  { title: "Permits & Regulatory Compliance", desc: "Full project support covering permits, regulatory documentation and compliance.", icon: Shield },
  { title: "Immigration Assistance", desc: "Meet and Greet support and immigration assistance for international personnel.", icon: Users },
  { title: "Inventory Management", desc: "Systematic inventory management for project materials, ensuring traceability.", icon: Target },
];

export function ServicesSection() {
  return (
    <section id="services" className="overflow-hidden">
      {/* Intro Banner */}
      <div className="bg-charcoal py-28">
        <div className="container-vr">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-maroon" />
              <span className="label-caps text-maroon">Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6 max-w-2xl">
              What We <span className="text-gold">Deliver</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
              Our services are shaped by the realities of building in Ghana. From early assessments to commissioning, we keep work flow organised, compliant and moving.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Alternating Service Rows */}
      <div className="bg-white">
        {coreServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, ease }}
              className={`grid lg:grid-cols-2 min-h-[60vh] border-b border-charcoal/6 ${
                isEven ? "" : "flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden h-64 lg:h-auto ${!isEven ? "lg:order-2" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 overlay-dark-full opacity-30" />
                {/* Large ghost number */}
                <div className="absolute bottom-6 right-6 text-[8rem] font-bold text-white/10 leading-none select-none">
                  {service.number}
                </div>
              </div>

              {/* Content */}
              <div className={`p-8 lg:p-14 flex flex-col justify-center ${!isEven ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-maroon/8 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-maroon" />
                  </div>
                  <span className="label-caps text-maroon">{service.number} / 04</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">{service.title}</h3>
                <p className="text-charcoal/65 leading-relaxed mb-8">{service.description}</p>

                <Accordion type="single" collapsible>
                  <AccordionItem value="details" className="border-charcoal/10">
                    <AccordionTrigger className="text-sm font-bold text-maroon hover:text-gold hover:no-underline">
                      View Details
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-charcoal/70">
                            <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Offshore / Oil & Gas Services */}
      <div className="bg-charcoal py-24">
        <div className="container-vr">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-14"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="label-caps text-gold">Oil & Gas</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Offshore Installation &amp; <span className="text-gold">Support Services</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed">
                Vertex Ridge extends its core engineering and logistics strength into the upstream and midstream energy sector.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offshoreServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
                whileHover={{ y: -4 }}
                className="p-6 border border-white/10 rounded-xl hover:border-gold/40 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
