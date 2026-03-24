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
import { Carousel, Card as AppleCard } from "@/components/ui/apple-cards-carousel";
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
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">About Us</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6"

            >
              Grounded in <span className="text-maroon">Ghana</span>, Driven by Excellence
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-6 italic">
              Vertex Ridge Limited is a Ghanaian-owned construction and engineering firm based in Accra, shaped by years of practical experience. Our work is rooted in the realities of the local construction ecosystem and allows us to navigate approvals and community expectations while working with locally adapted and sourced materials.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Every project we deliver is built to serve communities reliably and to stand up to long-term use. Through disciplined procurement, cost monitoring and practical value-for-money approaches, we work carefully with client budgets while maintaining durability and compliance.
            </p>

            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="p-6 bg-sand/30 rounded-lg border border-maroon/10">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-maroon" />
                  <h4 className="font-bold text-lg text-charcoal uppercase tracking-tight">Our Mission</h4>
                </div>
                <p className="text-charcoal/70 text-sm italic">
                  To deliver construction and technical projects efficiently, transparently and safely — meeting local regulatory requirements, applying global standards, optimising public resources and handing over ready-for-use operational assets.
                </p>
              </div>
              <div className="p-6 bg-gold/10 rounded-lg border border-gold/20">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-gold" />
                  <h4 className="font-bold text-lg text-charcoal uppercase tracking-tight">Our Vision</h4>
                </div>
                <p className="text-charcoal/70 text-sm italic">
                  To be Ghana&apos;s dependable partner for quality civil and building works that improve public services and community resilience.
                </p>
              </div>
            </div>

            <div className="p-4 bg-maroon text-white text-center rounded-md font-bold text-sm tracking-widest uppercase mb-4">
              BUILD WITH PRECISION. DELIVER WITH INTEGRITY.
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group overflow-hidden rounded-md shadow-2xl">
              <img
                src="/about-team.jpg"
                alt="Vertex Ridge Team"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-medium">Our expert team at work</p>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-md -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const CivilContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">Engineering & Technical Design</h3>
      <ul className="space-y-4 text-neutral-600">
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Site assessments, topographic surveys and geotechnical input</li>
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Structural and architectural support</li>
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Technical specs, tender documentation and programming</li>
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Coordination with regulators ensuring compliance and approvals</li>
      </ul>
    </div>
    <img
      src="/service-civil.png"
      alt="Civil Engineering site"
      className="mt-8 rounded-xl object-cover w-full h-auto"
    />
  </div>
);

const ConstructionContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">Construction & Civil Works</h3>
      <ul className="space-y-4 text-neutral-600">
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Public and institutional buildings</li>
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Concrete, formwork, reinforcement, masonry and finishing works</li>
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Earthworks, drainage, minor roads & preparation</li>
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> M&E installations integrated into construction programme</li>
      </ul>
    </div>
    <img
      src="/service-construction.png"
      alt="Building Construction site"
      className="mt-8 rounded-xl object-cover w-full h-auto"
    />
  </div>
);

const OilGasContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">Procurement & Project Support</h3>
      <ul className="space-y-4 text-neutral-600">
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Vendor pre-qualification, competitive sourcing & testing</li>
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Quality assurance and documented inspection regimes</li>
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Subcontractor management and on-site coordination</li>
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Transparent progress reporting for financial oversight</li>
      </ul>
    </div>
    <img
      src="/service-oil-gas.png"
      alt="Oil and Gas facility"
      className="mt-8 rounded-xl object-cover w-full h-auto"
    />
  </div>
);

const PMContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">Commissioning & Handover</h3>
      <ul className="space-y-4 text-neutral-600">
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Final inspections, punch-list completion and operational testing</li>
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> As-built documentation, maintenance manuals and training for operators</li>
        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-maroon mt-1" /> Formal handover with certificates of compliance and warranties</li>
      </ul>
    </div>
    <img
      src="/service-pm.png"
      alt="Project Management office"
      className="mt-8 rounded-xl object-cover w-full h-auto"
    />
  </div>
);

const servicesData = [
  {
    category: "Civil Engineering",
    title: "Infrastructure & Roads",
    src: "/service-civil.png",
    content: <CivilContent />,
  },
  {
    category: "Construction",
    title: "Building the Future",
    src: "/service-construction.png",
    content: <ConstructionContent />,
  },
  {
    category: "Oil & Gas",
    title: "Energy Infrastructure",
    src: "/service-oil-gas.png",
    content: <OilGasContent />,
  },
  {
    category: "Management",
    title: "Project Excellence",
    src: "/service-pm.png",
    content: <PMContent />,
  },
];

export function ServicesSection() {
  const cards = servicesData.map((card, index) => (
    <AppleCard key={card.src} card={card} index={index} />
  ));

  return (
    <section id="services" className="py-24 bg-sand/50 overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-maroon" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-maroon">
              Services
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6"

          >
            Comprehensive <span className="text-maroon">Solutions</span>
          </h2>
          <p className="text-charcoal/70 text-lg max-w-2xl mb-10">
            We offer a full spectrum of construction and engineering services
            tailored to meet the unique needs of each project.
          </p>
        </motion.div>

        <Carousel items={cards} />
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
            className="grid grid-cols-2 gap-4"
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
    image: "/project-takoradi.jpg" // Reusing gas terminal for now
  },
  {
    title: "Cape Coast Hospital",
    category: "Healthcare",
    year: "2023",
    image: "/about-team.jpg" // Reusing team image for now
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
                <div className="relative h-[580px] overflow-hidden">
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




const teamSteps = [
  {
    number: "01",
    title: "Discovery & Brief",
    description:
      "We dive deep into your vision, goals, and requirements through focused consultations to craft a clear project blueprint.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Our team maps out a precise roadmap — timelines, milestones, and resource allocation — ensuring nothing is left to chance.",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "With strategy locked in, we execute with craftsmanship: iterative builds, regular checkpoints, and relentless attention to detail.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description:
      "We launch with confidence and stay by your side — handling handoffs, training, and ongoing support for lasting success.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Simplified Header - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-maroon" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-maroon">
              Team
            </span>
          </div>

          <h2
            className="text-6xl lg:text-7xl font-medium text-charcoal leading-[1.05] mb-8"
          >
            How We
            <em className="text-maroon italic not-italic"> Deliver</em>
          </h2>

          <p className="text-charcoal/50 text-xl max-w-2xl leading-relaxed font-light">
            Built on field experience and technical rigor, our process ensures excellence at every milestone.
          </p>
        </motion.div>

        {/* Horizontal Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative">
          {/* Horizontal Trace Line - Hidden on smaller screens */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-px bg-maroon/10 z-0" />

          {teamSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group z-10"
            >
              {/* Clean Number Circle - High contrast background for the trace line */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border border-maroon/20 flex items-center justify-center text-maroon font-serif text-2xl group-hover:bg-maroon group-hover:text-white transition-all duration-500 mb-8 shadow-sm">
                {step.number}
              </div>

              {/* Content Area */}
              <div>
                <span className="text-maroon/40 text-[10px] uppercase font-bold tracking-[0.4em] mb-3 block">
                  Phase {index + 1}
                </span>
                <h3
                  className="text-2xl font-bold text-charcoal mb-4 group-hover:text-maroon transition-colors"
                >
                  {step.title}
                </h3>
                <p className="text-charcoal/50 leading-relaxed font-light text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
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
      title: "Quality Mastery",
      desc: "Strict quality controls across the lifecycle, ensuring materials meet high-end regulatory requirements.",
      image: "/qhse_quality_assurance.png",
      icon: Shield,
    },
    {
      id: "02",
      title: "Total Safety",
      desc: "Zero-incident culture through daily briefings and mandatory compliance at every site level.",
      image: "/qhse_health_safety.png",
      icon: CheckCircle2,
    },
    {
      id: "03",
      title: "Eco Stewardship",
      desc: "Responsible waste management and erosion control to protect the communities we serve.",
      image: "/qhse_environmental.png",
      icon: Droplets,
    },
    {
      id: "04",
      title: "Full Compliance",
      desc: "Adherence to national regulations and procurement guidelines with regular refinements.",
      image: "/qhse_compliance.png",
      icon: Clock,
    }
  ];

  return (
    <section id="qhse" className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Simplified Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-maroon" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-maroon">QHSE</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-medium text-charcoal leading-tight mb-8">
              The Ethics of
              <em className="text-maroon italic not-italic"> Vertex Ridge</em>
            </h2>
            <p className="text-charcoal/50 text-xl font-light leading-relaxed">
              Our commitment to people and the planet is the foundation of our success.
              We uphold the highest standards of safety and sustainability.
            </p>
          </motion.div>
        </div>

        {/* Cleaner Grid with Images */}
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
              {/* Image Segment */}
              <div className="relative h-78 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-maroon/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Text Segment */}
              <div className="p-10">
                <div className="mb-10 flex items-start justify-between">
                  <div className="w-12 h-12 border border-maroon/20 flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-white transition-all duration-500">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-serif text-maroon opacity-20 group-hover:opacity-100 transition-opacity">{pillar.id}</span>
                </div>

                <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-maroon transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-charcoal/50 leading-relaxed font-light text-sm lg:text-base">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean Certification Row */}
        <div className="mt-24 flex flex-wrap items-center gap-x-12 gap-y-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-maroon">ISO Certified</span>
          {["9001:2015", "14001:2018", "OHSAS 18001", "GHA Standard"].map(cert => (
            <span key={cert} className="text-sm font-medium text-charcoal tracking-widest">{cert}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    description:
      "Deep understanding of the construction ecosystem, regulatory processes, and community expectations.",
  },
  {
    icon: Clock,
    title: "Years of Experience",
    description:
      "A long track record of delivering public-sector projects and solving complex problems on the ground.",
  },
  {
    icon: Users,
    title: "Adaptive Local Teams",
    description:
      "Homegrown talent that knows how to navigate changing weather patterns and supply delays.",
  },
  {
    icon: Target,
    title: "Resource Stewardship",
    description:
      "Disciplined procurement and cost monitoring to protect client budgets and ensure durability.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <BackgroundBeams className="opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">
              Advantage
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            The Vertex Ridge <span className="text-gold">Advantage</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-md bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                {item.description}
              </p>
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
