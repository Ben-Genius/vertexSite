"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  Droplets,
  Fuel,
  HardHat,
  Leaf,
  Shield,
  Target,
  Users,
  Zap,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  Globe,
} from "lucide-react";
import { TypingEffect } from "@/components/ui/typing-effect";
import { ChronicleButton } from "@/components/ui/chronicle-button";
import { DicedHeroSection } from "@/components/ui/diced-hero-section";
import { BackgroundBeams } from "@/components/ui/background-beams";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Hero Section
export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80&fit=crop')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[0px]" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-maroon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2"
          >
            Building Africa&apos;s <span className="text-maroon">Future</span>
          </h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-2xl sm:text-3xl font-light text-white/80">Expertise in</span>
            <TypingEffect
              texts={['Civil Engineering', 'Building Construction', 'Oil & Gas Support', 'Project Management']}
              className="text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-maroon rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Intro & Stats Section
export function IntroSection() {
  return (
    <section className="py-20 bg-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-maroon" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-maroon">Grounded</span>
            </div>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed  border-l-4 border-maroon pl-6">
              Vertex Ridge Limited is a Ghanaian-owned construction and engineering firm shaped by years of practical experience, delivering world-class infrastructure solutions rooted in local ecosystems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-end"
          >
            <ChronicleButton
              text="Our Services"
              onClick={() => {
                const el = document.getElementById('services');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              width="220px"
              borderRadius="12px"
            />
            <ChronicleButton
              text="View Projects"
              onClick={() => {
                const el = document.getElementById('projects');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              width="220px"
              outlined
              borderRadius="12px"
            />
          </motion.div>
        </div>

        {/* Redesigned Stats Grid - Inspo Inspired */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden relative z-10 bg-white/[0.02] backdrop-blur-sm">
            {[
              { number: "15+", label: "Years in the business delivering excellence.", icon: Shield },
              { number: "200+", label: "Successful projects across Ghana.", icon: Building2 },
              { number: "50+", label: "Expert engineers and specialized staff.", icon: Users },
              { number: "98%", label: "Client satisfaction and quality rating.", icon: Award },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative p-10 border-r border-b md:border-b-0 border-white/10 last:border-r-0 group hover:bg-white/[0.03] transition-all duration-500"
              >
                {/* Corner Pixels / Grid Accents - Inspo Inspired */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:8px_8px]" />
                  {/* Randomized 'solid' pixels */}
                  <div className="absolute top-4 right-8 w-2 h-2 bg-white/20" />
                  <div className="absolute top-12 right-4 w-2 h-2 bg-white/10" />
                  <div className="absolute top-6 right-12 w-2 h-2 bg-white/30" />
                </div>

                {/* Folded Corner Decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/10 to-transparent flex items-center justify-center translate-x-1/2 -translate-y-1/2 rotate-45 group-hover:bg-white/20 transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 bg-white/10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />

                <div className="flex items-center gap-5 mb-6">
                  {/* Icon Box with Inner Gradient */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-charcoal to-black border border-white/10 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] transition-transform duration-500 group-hover:scale-110">
                    <stat.icon className="w-6 h-6 text-gold" />
                  </div>

                  {/* Number Value */}
                  <div className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    {stat.number}
                  </div>
                </div>

                {/* Description Label */}
                <p className="text-sm text-white/50 leading-relaxed font-light max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// Expertise Highlight (Diced Hero)
export function ExpertiseHighlight() {
  return (
    <section className="bg-sand/30 py-16">
      <DicedHeroSection
        topText="VERTEX RIDGE EXCELLENCE"
        mainText="Quality Infrastructure Delivered"
        subMainText="We combine years of field experience with modern engineering standards to deliver assets that stand the test of time."
        buttonText="Get a Quote"
        slides={[
          { title: "Project 1", image: "/project-tema.jpg" },
          { title: "Project 2", image: "/project-kumasi.jpg" },
          { title: "Project 3", image: "/project-takoradi.jpg" },
          { title: "Project 4", image: "/project-accra.jpg" },
        ]}
        onMainButtonClick={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        mainTextStyle={{ fontSize: "3rem", color: "#111014" }}
        topTextStyle={{ color: "#9C2A2A" }}
      />
    </section>
  );
}
export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            Grounded in <span className="text-maroon">Ghana</span>,<br className="hidden sm:block" /> Driven by Excellence
          </h2>
        </motion.div>

        {/* Story + Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-charcoal/80 text-lg leading-relaxed mb-6 border-l-4 border-maroon pl-6 italic">
              Vertex Ridge Limited is a Ghanaian‑owned construction and engineering firm based in Accra, shaped by years of practical experience. Our work is rooted in the realities of the local construction ecosystem and allows us to navigate approvals and community expectations while working with locally adapted and sourced materials.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Over the years, we&apos;ve delivered public‑sector infrastructure across diverse districts, which has taught us to stay responsive and solution‑driven on the ground. Our engineers, foremen and artisans are homegrown professionals who keep projects progressing despite weather changes, access challenges or material delays. Their adaptability is one of our strongest assets, while ensuring quality and safety remain consistent.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              We also hold a strong sense of responsibility toward public resources. Every project we deliver is built to serve communities reliably and to stand up to long-term use. Through disciplined procurement, cost monitoring and practical value‑for‑money approaches, we work carefully with client budgets while maintaining durability and compliance.
            </p>
            <div className="p-4 bg-maroon text-white text-center rounded-md font-bold text-sm tracking-widest uppercase">
              BUILD WITH PRECISION. DELIVER WITH INTEGRITY.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/about-team.jpg"
                alt="Vertex Ridge Team"
                className="w-full h-[350px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent flex items-end p-8">
                <p className="text-white/80 text-sm font-medium tracking-wide uppercase">Our expert team at work</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-md -z-10" />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="p-8 bg-maroon rounded-xl text-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-gold" />
              </div>
              <h4 className="font-bold text-xl uppercase tracking-tight">Mission</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              To deliver construction and technical projects efficiently, transparently and safely — meeting local regulatory requirements, applying global standards, optimising public resources and handing over ready-for-use operational assets.
            </p>
          </div>
          <div className="p-8 bg-charcoal rounded-xl text-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-gold" />
              </div>
              <h4 className="font-bold text-xl uppercase tracking-tight">Vision</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              To be Ghana&apos;s dependable partner for quality civil and building works that improve public services and community resilience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const coreServices = [
  {
    number: "01",
    icon: Zap,
    title: "Engineering & Technical Design",
    description: "From early assessments to detailed design, we provide the technical foundation for compliant, buildable projects.",
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
    items: [
      "Final inspections, punch-list completion and operational testing",
      "As-built documentation, maintenance manuals and training for facility operators",
      "Formal handover with certificates of compliance and clear warranties",
    ],
  },
];

const offshoreServices = [
  {
    title: "Logistics & Supply Chain",
    description: "Importation, transportation and re-exportation of offshore vessel equipment.",
    icon: Globe,
  },
  {
    title: "Manpower Provision",
    description: "Provision of local manpower to provide routine support services for smooth offshore operations.",
    icon: Users,
  },
  {
    title: "Warehousing & Storage",
    description: "Secure warehousing and storage solutions purpose-built for pipe inventory and project materials management.",
    icon: Building2,
  },
  {
    title: "Permits & Regulatory Compliance",
    description: "Full project support covering permits, regulatory documentation and compliance across Ghana's energy sector framework.",
    icon: Shield,
  },
  {
    title: "Immigration Assistance",
    description: "Meet and Greet support and immigration assistance services for international personnel and project teams.",
    icon: Users,
  },
  {
    title: "Inventory Management",
    description: "Systematic inventory management for project materials, ensuring traceability and reducing project downtime.",
    icon: Target,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white overflow-hidden">
      {/* Intro Banner */}
      <div className="relative bg-sand/40 py-20">
        <div className="absolute inset-0 z-0">
          <img src="/services-bg.png" alt="Engineering Services" className="w-full h-full object-cover opacity-[0.15]" />
          <div className="absolute inset-0 bg-gradient-to-r from-sand/90 via-sand/70 to-sand/40" />
        </div>
        <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-maroon" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-maroon">Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              What We <span className="text-maroon">Deliver</span>
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Our services are shaped by the realities of building in Ghana. From early assessments to commissioning, we keep work flow organised, compliant and moving. Our methodology reduces rework, controls cost drift and shortens the time for facilities to become operational.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Services Grid */}
      <div className="py-20">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-px bg-charcoal/5 border border-charcoal/5 rounded-2xl overflow-hidden">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 group hover:bg-sand/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-maroon/5 rounded-xl flex items-center justify-center group-hover:bg-maroon group-hover:text-white transition-all duration-300">
                    <service.icon className="w-6 h-6 text-maroon group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-5xl font-bold text-charcoal/5 group-hover:text-maroon/10 transition-colors font-mono">{service.number}</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-maroon transition-colors">{service.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-charcoal/70">
                      <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Oil & Gas Offshore Section */}
      <div className="bg-charcoal py-20">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">Oil & Gas</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-end">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Offshore Installation &amp; <span className="text-gold">Support Services</span>
                </h2>
              </div>
              <p className="text-white/60 text-lg leading-relaxed">
                Vertex Ridge extends its core engineering and logistics strength into the upstream and midstream energy sector. We support operators and contractors across Ghana&apos;s offshore and onshore landscape with reliable supply chain management, technical installations and comprehensive field project support.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offshoreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="p-6 border border-white/10 rounded-xl hover:border-gold/40 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// Oil & Gas Section
const oilGasServices = [
  {
    title: "Logistics & Supply Chain",
    description: "Importation, transportation and re-exportation of offshore vessel equipment.",
    icon: Globe,
  },
  {
    title: "Manpower Provision",
    description: "Provision of local manpower to provide routine support services for smooth offshore operations.",
    icon: Users,
  },
  {
    title: "Warehousing & Storage",
    description: "Secure warehousing and storage solutions for pipe inventory and materials.",
    icon: Building2,
  },
  {
    title: "Regulatory Compliance",
    description: "Full project support covering permits and regulatory documentation in Ghana's energy sector.",
    icon: Shield,
  },
  {
    title: "Immigration Assistance",
    description: "Meet and Greet support for international personnel and project teams.",
    icon: Users,
  },
  {
    title: "Inventory Management",
    description: "Systematic project materials management ensuring traceability and reducing downtime.",
    icon: Target,
  },
];

export function OilGasSection() {
  return (
    <section id="oil-gas" className="relative py-24 overflow-hidden">
      {/* Background with parallax/fixed effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/project-takoradi.jpg"
          alt="Oil & Gas Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">Energy</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6"

            >
              Specialized <span className="text-gold">Energy Solutions</span>
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
              Our Oil & Gas division provides specialized engineering and
              construction services to Ghana&apos;s thriving energy sector. We
              bring expertise, safety, and reliability to every project.
            </p>

            <div className="space-y-4">
              {[
                "Licensed by Ghana National Petroleum Corporation",
                "ISO 9001:2015 Certified Operations",
                "HSE Compliant Workforce",
                "24/7 Emergency Response Capability",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-maroon flex-shrink-0" />
                  <span className="text-charcoal/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {oilGasServices.map((service, index) => (
              <div
                key={index}
                className="bg-sand p-5 rounded-md hover:bg-maroon/5 transition-colors group"
              >
                <service.icon className="w-8 h-8 text-gold mb-3" />
                <h4 className="font-semibold text-charcoal mb-1">
                  {service.title}
                </h4>
                <p className="text-sm text-charcoal/60">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Projects Section
const projects = [
  {
    title: "Tema Port Expansion",
    category: "Marine Construction",
    year: "2023",
    image: "/project-tema.jpg"
  },
  {
    title: "Kumasi Road Network",
    category: "Road Construction",
    year: "2022",
    image: "/project-kumasi.jpg"
  },
  {
    title: "Takoradi Gas Terminal",
    category: "Oil & Gas",
    year: "2023",
    image: "/project-takoradi.jpg"
  },
  {
    title: "Accra Corporate Tower",
    category: "Commercial",
    year: "2021",
    image: "/project-accra.jpg"
  },
  {
    title: "Tano Oil Field Support",
    category: "Oil & Gas",
    year: "2022",
    image: "/project-tano.png"
  },
  {
    title: "Cape Coast Hospital",
    category: "Healthcare",
    year: "2023",
    image: "/project-cape-coast.png"
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-maroon" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-maroon">
              Projects
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6"

          >
            Featured <span className="text-maroon">Projects</span>
          </h2>
          <p className="text-charcoal/70 text-lg max-w-2xl">
            A showcase of our diverse portfolio across construction, engineering,
            and oil & gas sectors.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="rounded-xl overflow-hidden border-none shadow-2xl bg-white h-full flex flex-col group/project">
                {/* 90% Height Image Container */}
                <div className="relative h-[400px] md:h-[580px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/project:scale-110"
                  />

                  {/* Year Badge */}
                  <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                    {project.year}
                  </div>

                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-80" />

                  {/* Overlaid Title/Category Area (The ~10% visual zone) */}
                  <div className="absolute bottom-0 inset-x-0 p-8 pt-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-px bg-gold" />
                      <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em]">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight group-hover/project:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>


                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}




const deliverySteps = [
  {
    number: "01",
    title: "Mobilise & Assess",
    description: "Rapid site set‑up, baseline surveys and early alignment with local stakeholders to establish a solid foundation.",
  },
  {
    number: "02",
    title: "Plan & Specify",
    description: "Detailed programmes, risk plans and quality requirements that set a clear path from the start.",
  },
  {
    number: "03",
    title: "Execute & Control",
    description: "Daily supervision, phased inspections and strict schedule tracking to reduce rework and delays.",
  },
  {
    number: "04",
    title: "Commission & Transfer",
    description: "System testing, operator orientation and a structured handover that confirms every asset is ready for use.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-white overflow-hidden">

      {/* Hero Intro */}
      <div className="relative py-24 overflow-hidden bg-sand/20">
        <div className="absolute inset-0 z-0">
          <img src="/team-bg.png" alt="Vertex Ridge Team" className="w-full h-full object-cover opacity-[0.15]" />
          <div className="absolute inset-0 bg-gradient-to-t from-sand/90 to-sand/40" />
        </div>
        <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-maroon" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-maroon">Our Team</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-8">
                Our Team &amp; <span className="text-maroon">How We Work</span>
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                At Vertex Ridge, our team is our strongest asset. We bring together engineers, project managers, technicians and skilled artisans who have spent years working across Ghana&apos;s building and civil infrastructure landscape.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Because our people are rooted in the local industry, they understand the realities of Ghanaian sites — from regulatory expectations and community engagement to weather constraints, access challenges and materials availability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { icon: Shield, title: "Disciplined Project Management", desc: "Clear quality controls, strong supervision and a safety‑first mindset guide each phase of construction." },
                { icon: Users, title: "Homegrown Talent", desc: "Our engineers, foremen and artisans know how to navigate changing weather patterns, access issues, and supply delays." },
                { icon: Award, title: "Continuous Development", desc: "Leadership provides structure while continuous skills development ensures our workforce stays adaptable and technically sharp." },
                { icon: Target, title: "Responsive & Accountable", desc: "The result is a team that is ready for the complexities of public-sector infrastructure — every time." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-charcoal/5 shadow-sm">
                  <div className="w-10 h-10 bg-maroon/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-maroon" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">{item.title}</h4>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Delivery Methodology */}
      <div className="py-24 bg-charcoal">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">Methodology</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Our Approach to <span className="text-gold">Project Delivery</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-px bg-white/10 z-0" />
            {deliverySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group z-10"
              >
                <div className="w-14 h-14 rounded-full bg-charcoal border border-white/20 flex items-center justify-center text-white font-mono text-lg group-hover:bg-gold group-hover:border-gold group-hover:text-charcoal transition-all duration-400 mb-8 shadow-sm">
                  {step.number}
                </div>
                <span className="text-gold/50 text-[10px] uppercase font-bold tracking-[0.4em] mb-3 block">
                  Phase {index + 1}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What This Means for Clients */}
      <div className="py-20 bg-maroon">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-white/40" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/60">For Our Clients</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                What This Means for You
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              By combining a grounded Ghanaian team with a disciplined delivery approach, Vertex Ridge provides infrastructure that is reliable, durable and aligned with community needs. Every project — no matter the scale — benefits from the same principles: local insight, careful planning, strong control on site and a commitment to work that stands the test of time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// QHSE Section
export function QHSESection() {
  const pillars = [
    {
      id: "01",
      title: "Quality Assurance",
      desc: "We apply strict quality controls throughout the project lifecycle, ensuring that materials, workmanship and documentation meet approved specifications and regulatory requirements. Our teams emphasise technical accuracy, clear record‑keeping and continuous improvement to minimise rework and maintain high construction standards.",
      image: "/qhse_quality_assurance.png",
      icon: Shield,
    },
    {
      id: "02",
      title: "Health & Safety First",
      desc: "The safety of our workforce, subcontractors and stakeholders is central to how we operate. Vertex Ridge enforces practical, enforceable safety procedures — from daily toolbox briefings to risk assessments and mandatory PPE. Our goal is to maintain a zero‑incident culture on all sites.",
      image: "/qhse_health_safety.png",
      icon: CheckCircle2,
    },
    {
      id: "03",
      title: "Environmental Responsibility",
      desc: "We recognise the importance of protecting the communities and environments where we work. Our QHSE practices support responsible waste management, erosion control and the careful use of materials and resources — promoting sustainable practices throughout construction and commissioning.",
      image: "/qhse_environmental.png",
      icon: Droplets,
    },
    {
      id: "04",
      title: "Compliance & Improvement",
      desc: "Vertex Ridge works in full compliance with national regulations, procurement guidelines and relevant industry standards. We review and refine our QHSE systems regularly to match evolving requirements, strengthen internal controls and support consistent project delivery.",
      image: "/qhse_compliance.png",
      icon: Clock,
    },
  ];

  return (
    <section id="qhse" className="bg-white overflow-hidden">
      {/* Header */}
      <div className="py-20 bg-sand/20">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-end"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-maroon" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-maroon">QHSE Policy</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                Our Commitment to <span className="text-maroon">People & Planet</span>
              </h2>
            </div>
            <p className="text-charcoal/60 text-lg leading-relaxed">
              At Vertex Ridge Limited, our policies reflect both recognised industry standards and the practical realities of delivering public‑sector infrastructure across Ghana. Above all, they reinforce our responsibility to protect people, uphold quality, and deliver projects that serve communities reliably.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-charcoal/5">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group border-r border-b border-charcoal/5 transition-all duration-500 hover:bg-sand/30"
          >
            <div className="relative h-64 md:h-72 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-maroon/5 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="p-8">
              <div className="mb-6 flex items-start justify-between">
                <div className="w-12 h-12 border border-maroon/20 flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-all duration-500">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-maroon opacity-20 group-hover:opacity-100 transition-opacity">{pillar.id}</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-maroon transition-colors">
                {pillar.title}
              </h3>
              <p className="text-charcoal/55 leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certification Row */}
      <div className="py-10 border-t border-charcoal/5">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4 opacity-40 hover:opacity-100 transition-all duration-500">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-maroon">ISO Certified</span>
            {["9001:2015", "14001:2018", "OHSAS 18001", "GHA Standard"].map(cert => (
              <span key={cert} className="text-sm font-medium text-charcoal tracking-widest">{cert}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-sand">
      <div className="absolute inset-0 z-0">
        <img src="/contact-bg.png" alt="Contact Us" className="w-full h-full object-cover opacity-[0.12]" />
        <div className="absolute inset-0 bg-sand/90" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-maroon" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-maroon">Connect</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6"
            >
              Let&apos;s Build <span className="text-maroon">Together</span>
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-10">
              Ready to start your next project? Contact us today to discuss how
              we can help bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-maroon/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-maroon" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Our Office</h4>
                  <p className="text-charcoal/60">
                    23 Royal Palm Avenue
                    <br />
                    West Legon - Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-maroon/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-maroon" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Phone</h4>
                  <p className="text-charcoal/60">
                    +233 024 891 5772
                    <br />
                    Vertex Ridge Ltd
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-maroon/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-maroon" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                  <p className="text-charcoal/60">
                    info@vertexridge.com
                    <br />
                    projects@vertexridge.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-maroon/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-maroon" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">
                    Working Hours
                  </h4>
                  <p className="text-charcoal/60">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-0 shadow-lg rounded-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-md border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-maroon/50 focus:border-maroon"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-md border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-maroon/50 focus:border-maroon"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-md border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-maroon/50 focus:border-maroon"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-md border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-maroon/50 focus:border-maroon"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-md border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-maroon/50 focus:border-maroon">
                      <option>Select a service</option>
                      <option>Civil Engineering</option>
                      <option>Construction</option>
                      <option>Oil & Gas</option>
                      <option>Project Management</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-maroon/50 focus:border-maroon resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-maroon hover:bg-maroon/90 text-white rounded-md py-6 text-lg"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
const whyChooseUs = [
  {
    icon: Globe,
    title: "Grounded in Ghana",
    description: "Our network, understanding of Ghana's construction ecosystem, regulatory processes, community expectations, and local materials give us a competitive edge that outside firms simply cannot replicate.",
  },
  {
    icon: Clock,
    title: "Years of Experience",
    description: "Our team has spent years delivering public-sector projects. That experience is reflected in how we organise, plan and solve problems on the ground — calmly and efficiently.",
  },
  {
    icon: Users,
    title: "Adaptive Local Teams",
    description: "Vertex Ridge is built on homegrown talent. Our engineers, foremen and artisans know how to navigate changing weather patterns, access issues, and supply delays — adjusting our methods while maintaining quality and safety.",
  },
  {
    icon: Target,
    title: "Resource Stewardship",
    description: "We understand that public funds must be protected. Through responsible procurement, cost monitoring, and value‑for‑money solutions, we budget without compromising on standards or durability.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <BackgroundBeams className="opacity-40" />

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">Why Choose Us</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              The Vertex Ridge <span className="text-gold">Advantage</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              We are not just another contractor. We are partners who understand the terrain — literally and figuratively.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/55 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Core Principles Section
const corePrinciples = [
  {
    number: "01",
    title: "Integrity & Compliance",
    description: "Clear reporting, audit-ready documentation & ethical procurement practices across each project.",
  },
  {
    number: "02",
    title: "Technical Excellence",
    description: "Practical design solutions, robust specifications & methodical execution at every phase.",
  },
  {
    number: "03",
    title: "Transparent Procurement",
    description: "Ensuring competitive procurement, fiscal responsibility and constrained waste to safeguard public spending.",
  },
  {
    number: "04",
    title: "Partnership & Collaboration",
    description: "Consistent stakeholder engagement and transparent communication from inception to commissioning.",
  },
];

export function CorePrinciplesSection() {
  return (
    <section id="principles" className="py-24 bg-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-maroon" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-maroon">
              Principles
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6"

          >
            Core <span className="text-maroon">Principles</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {corePrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-md shadow-sm border-t-4 border-gold h-full"
            >
              <div className="text-4xl font-bold text-maroon/10 mb-4 font-mono">
                {principle.number}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">
                {principle.title}
              </h3>
              <p className="text-charcoal/60 leading-relaxed text-sm">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
