"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Shield, Users, Award, Target, ArrowRight } from "lucide-react";
import { CountUp } from "@/components/sections/shared/CountUp";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.25, 0.1, 0.25, 1] as const;

const teamQualities = [
  { icon: Shield, title: "Disciplined Project Management", desc: "Clear quality controls, strong supervision and a safety-first mindset guide each phase of construction." },
  { icon: Users, title: "Homegrown Talent", desc: "Our engineers, foremen and artisans know how to navigate changing weather patterns, access issues, and supply delays." },
  { icon: Award, title: "Continuous Development", desc: "Leadership provides structure while continuous skills development ensures our workforce stays adaptable and technically sharp." },
  { icon: Target, title: "Responsive & Accountable", desc: "The result is a team that is ready for the complexities of public-sector infrastructure — every time." },
];

const deliverySteps = [
  { number: "01", title: "Mobilise & Assess", desc: "Rapid site set-up, baseline surveys and early alignment with local stakeholders to establish a solid foundation." },
  { number: "02", title: "Plan & Specify", desc: "Detailed programmes, risk plans and quality requirements that set a clear path from the start." },
  { number: "03", title: "Execute & Control", desc: "Daily supervision, phased inspections and strict schedule tracking to reduce rework and delays." },
  { number: "04", title: "Commission & Transfer", desc: "System testing, operator orientation and a structured handover that confirms every asset is ready for use." },
];

const benefits = [
  "Predictable, well-managed programme of works",
  "Consistent quality with minimal rework",
  "Transparent cost control and reporting",
  "Assets handed over ready for immediate use",
];

export function TeamSection() {
  const methodologyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".methodology-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: methodologyRef.current,
          start: "top 70%",
        },
      });
      gsap.from(".methodology-step", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: methodologyRef.current,
          start: "top 70%",
        },
      });
    }, methodologyRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" className="overflow-hidden">
      {/* Hero Intro — charcoal bg */}
      <div className="bg-charcoal py-24">
        <div className="container-vr">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 mb-16 pb-16 border-b border-white/10">
            {[
              { value: "50+", label: "Expert Engineers" },
              { value: "15+", label: "Years Experience" },
              { value: "4", label: "Delivery Phases" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-1">
                  <CountUp value={s.value} />
                </div>
                <p className="label-caps text-white/40 text-[10px]">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-maroon" />
                <span className="label-caps text-maroon">Our Team</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-8">
                Our Team &amp; <span className="text-gold">How We Work</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-6">
                At Vertex Ridge, our team is our strongest asset. We bring together engineers, project managers, technicians and skilled artisans who have spent years working across Ghana's building and civil infrastructure landscape.
              </p>
              <p className="text-white/55 leading-relaxed">
                Because our people are rooted in the local industry, they understand the realities of Ghanaian sites — from regulatory expectations and community engagement to weather constraints, access challenges and materials availability.
              </p>
            </motion.div>

            {/* Team quality cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="space-y-3"
            >
              {teamQualities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease }}
                  className="flex items-start gap-4 p-5 bg-white/5 border border-white/8 rounded-xl hover:border-gold/20 hover:bg-white/8 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-maroon/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-maroon transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Delivery Methodology */}
      <div ref={methodologyRef} className="bg-sand py-24">
        <div className="container-vr">
          <SectionHeader
            label="Methodology"
            title={<>Our Approach to <span className="text-maroon">Project Delivery</span></>}
            subtitle="Four structured phases that take your project from mobilisation to a fully commissioned asset."
          />

          {/* Horizontal timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-[calc(2.5rem)] right-[calc(2.5rem)] h-px bg-charcoal/10">
              <div className="methodology-line absolute inset-0 bg-maroon/50" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliverySteps.map((step, i) => (
                <div key={i} className="methodology-step relative">
                  {/* Circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-maroon flex items-center justify-center mb-6 shadow-lg shadow-maroon/20">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <span className="label-caps text-gold text-[10px] block mb-2">Phase {step.number}</span>
                  <h4 className="font-bold text-xl text-charcoal mb-3">{step.title}</h4>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What This Means For You — maroon band */}
      <div className="bg-maroon py-16">
        <div className="container-vr">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-caps text-white/60 block mb-4">Client Benefits</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                What This Means <br />For You
              </h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease }}
                  className="flex items-center gap-4 text-white/85"
                >
                  <ArrowRight size={16} className="text-gold flex-shrink-0" />
                  <span className="font-medium">{b}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
