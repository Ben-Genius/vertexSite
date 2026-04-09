"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown } from "lucide-react";
import { CountUp } from "@/components/sections/shared/CountUp";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.25, 0.1, 0.25, 1] as const;

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "200+", label: "Projects Delivered" },
  { number: "50+", label: "Expert Engineers" },
  { number: "98%", label: "Client Satisfaction" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.3,
      });
      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        delay: 1.1,
      });
      gsap.from(".hero-cta", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 1.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const h1Words = ["Building", "Africa's", "Future."];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen h-[100dvh] flex flex-col justify-end overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 overlay-dark-full" />
        <div className="absolute inset-0 overlay-maroon-accent" />
        {/* Subtle grain */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      </motion.div>

      {/* Decorative gold line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent z-10"
      />

      {/* Main Content — bottom-left positioned */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 container-vr pb-32"
      >
        <div ref={headlineRef} className="max-w-4xl">
          {/* Eyebrow */}
          <div className="hero-sub flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="label-caps text-gold/90">Construction & Engineering · Ghana</span>
          </div>

          {/* H1 Word Reveal */}
          <h1 className="text-[clamp(3rem,9vw,5.5rem)] font-bold text-white leading-[1.0] mb-6 flex flex-wrap gap-x-[0.2em]">
            {h1Words.map((word, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <span
                  className={`hero-word inline-block ${
                    word === "Future." ? "text-gold" : ""
                  }`}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p className="hero-sub text-[clamp(1rem,2.5vw,1.3rem)] font-light text-white/70 mb-10 max-w-xl leading-relaxed">
            With Precision. With Integrity. Delivering world-class infrastructure rooted in the realities of Ghana.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="hero-cta inline-flex items-center gap-3 px-7 py-4 bg-maroon text-white font-bold rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 text-sm"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="hero-cta inline-flex items-center gap-3 px-7 py-4 border border-white/30 text-white font-bold rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 text-sm"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats Bar — bottom strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7, ease }}
        className="relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10"
      >
        <div className="container-vr py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col md:items-center md:px-6">
                <span className="text-2xl sm:text-3xl font-bold text-gold">
                  <CountUp value={stat.number} />
                </span>
                <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="absolute right-8 bottom-28 hidden lg:flex flex-col items-center gap-2 z-10"
      >
        <span className="label-caps text-white/30 [writing-mode:vertical-rl]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown size={18} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
