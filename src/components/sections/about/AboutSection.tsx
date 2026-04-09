"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Award } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.25, 0.1, 0.25, 1] as const;

const timeline = [
  { number: "01", year: "2008", title: "Founded", desc: "Established as a Ghanaian-owned construction and engineering firm in Accra." },
  { number: "02", year: "2012", title: "Public Sector Growth", desc: "Delivered public-sector infrastructure across diverse districts, building local expertise." },
  { number: "03", year: "2016", title: "Oil & Gas Entry", desc: "Licensed by the Ghana National Petroleum Corporation for upstream energy sector work." },
  { number: "04", year: "2020", title: "ISO Certification", desc: "Achieved ISO 9001:2015 and ISO 14001:2018 certification, formalising quality systems." },
];

export function AboutSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
        },
      });
      gsap.from(".timeline-item", {
        opacity: 0,
        x: -24,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
        },
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Full-width statement band */}
      <div className="bg-maroon py-16 text-center">
        <div className="container-vr">
          <p className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-white leading-tight">
            Grounded in Ghana. Built for Africa.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container-vr">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-gold" />
              <span className="label-caps text-gold">About Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-charcoal leading-tight">
              Grounded in <span className="text-maroon">Ghana</span>,<br className="hidden sm:block" /> Driven by Excellence
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6 border-l-4 border-maroon pl-6 italic">
                Vertex Ridge Limited is a Ghanaian-owned construction and engineering firm based in Accra, shaped by years of practical experience. Our work is rooted in the realities of the local construction ecosystem.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Over the years, we've delivered public-sector infrastructure across diverse districts, which has taught us to stay responsive and solution-driven on the ground. Our engineers, foremen and artisans are homegrown professionals who keep projects progressing despite weather changes, access challenges or material delays.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                We hold a strong sense of responsibility toward public resources. Every project we deliver is built to serve communities reliably and to stand up to long-term use. Through disciplined procurement, cost monitoring and practical value-for-money approaches, we work carefully with client budgets while maintaining durability and compliance.
              </p>
              <div className="p-4 bg-maroon text-white text-center rounded-full font-bold text-sm tracking-widest uppercase">
                BUILD WITH PRECISION. DELIVER WITH INTEGRITY.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="relative"
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/img-person-5.jpg"
                  alt="Vertex Ridge Team"
                  className="w-full h-[350px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 overlay-dark-bottom" />
                <div className="absolute bottom-0 inset-x-0 p-8">
                  <p className="text-white/80 text-sm font-medium tracking-wide uppercase">Our expert team at work</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-gold/20 rounded-xl -z-10" />
              <div className="absolute -top-5 -right-5 w-20 h-20 border-2 border-maroon/20 rounded-xl -z-10" />
            </motion.div>
          </div>

          {/* Mission & Vision — ICOMAT bento style */}
          <div className="grid md:grid-cols-3 gap-3 mb-24 auto-rows-[200px]">
            {/* Dark intro card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="rounded-2xl bg-charcoal p-8 flex flex-col justify-between"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <Target className="w-7 h-7 text-white/25" strokeWidth={1} />
              </div>
              <div>
                <p className="label-caps text-white/35 text-[10px] mb-2">Our Purpose</p>
                <h4 className="text-lg font-bold text-white leading-snug">What Drives<br />Everything We Do</h4>
              </div>
            </motion.div>

            {/* Mission — light */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease }}
              className="rounded-2xl bg-[#f2f2f0] p-8 flex flex-col justify-between"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <Target className="w-7 h-7 text-charcoal/25" strokeWidth={1} strokeDasharray="4 2" />
              </div>
              <div>
                <p className="label-caps text-charcoal/40 text-[10px] mb-2">Mission</p>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Deliver construction and technical projects efficiently, transparently and safely — applying global standards, optimising public resources.
                </p>
              </div>
            </motion.div>

            {/* Vision — maroon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16, ease }}
              className="rounded-2xl bg-maroon p-8 flex flex-col justify-between"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <Award className="w-7 h-7 text-white/30" strokeWidth={1} />
              </div>
              <div>
                <p className="label-caps text-white/45 text-[10px] mb-2">Vision</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  To be Ghana's dependable partner for quality civil and building works that improve public services and community resilience.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Company Timeline */}
          <div ref={timelineRef}>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-px bg-maroon" />
              <span className="label-caps text-maroon">Our Journey</span>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[2.5rem] top-0 bottom-0 w-px bg-charcoal/10">
                <div className="timeline-line absolute inset-0 bg-maroon/40" />
              </div>

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <div key={i} className="timeline-item flex gap-8 items-start">
                    {/* Number circle */}
                    <div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full bg-white border-2 border-charcoal/10 flex flex-col items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold text-maroon tracking-widest">{item.year}</span>
                      <span className="text-lg font-bold text-charcoal">{item.number}</span>
                    </div>
                    {/* Content */}
                    <div className="pt-3">
                      <h4 className="font-bold text-xl text-charcoal mb-1">{item.title}</h4>
                      <p className="text-charcoal/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
