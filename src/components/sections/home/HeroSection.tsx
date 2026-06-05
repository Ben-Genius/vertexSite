"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.6, ease: "power3.out" })
        .from(".hero-title", { opacity: 0, y: 24, duration: 0.85, ease: "power4.out" }, "-=0.2")
        .from(".hero-sub", { opacity: 0, y: 16, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .from(".hero-cta", { opacity: 0, y: 12, duration: 0.5, ease: "power3.out" }, "-=0.3")
        ;
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Image Background */}
      <motion.div
        style={{ y: bgY, backgroundImage: "url('/new images/newHero.webp')" }}
        className="absolute inset-0 z-0 scale-[1.08] bg-center bg-cover"
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Warm radial accent for text legibility */}
        <div className="absolute inset-0 bg-radial-gradient from-charcoal/20 via-charcoal/40 to-charcoal/70" />
        {/* Subtle noise grain */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      </motion.div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none size-full">
        <div className="grid w-full h-full grid-cols-12 divide-x divide-white/10">
          <div className="col-span-1 h-full" />
          <div className="col-span-3 h-full" />
          <div className="col-span-4 h-full" />
          <div className="col-span-3 h-full" />
          <div className="col-span-1 h-full" />
        </div>
      </div>

      {/* Top gold accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.15, ease }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-gold/40 to-transparent z-20"
      />

      {/* Main Content — Center Aligned */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-20 max-w-5xl px-6 text-center text-white flex flex-col items-center justify-center"
      >
        {/* Eyebrow */}
        <div className="hero-eyebrow flex items-center gap-3 mb-6 justify-center">
          <div className="w-8 h-px bg-gold" />
          <span className="label-caps text-gold/90 text-[10px]">Construction & Engineering · Ghana</span>
          <div className="w-8 h-px bg-gold" />
        </div>

        {/* Title */}
        <h1 className="hero-title text-center font-bold text-[clamp(2.5rem,7vw,5rem)] text-white tracking-tight leading-[1.1] mb-6">
          Building West Africa's <span className="text-gold">Civil Infrastructure</span>
        </h1>

        {/* Subtext */}
        <p className="hero-sub mx-auto mb-10 max-w-2xl text-center font-light text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Delivering high-quality building, road, and engineering works with strict compliance, disciplined management, and absolute integrity.
        </p>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Link
            href="/contact"
            className="group flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-2 font-normal shadow-none hover:bg-transparent"
          >
            <span className="rounded-full bg-gold px-6 py-3 text-charcoal font-bold duration-500 ease-in-out group-hover:bg-maroon group-hover:text-white group-hover:transition-colors text-sm">
              Start a Project
            </span>
            <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-gold p-4 text-charcoal duration-500 ease-in-out group-hover:bg-maroon group-hover:text-white group-hover:transition-colors">
              <ArrowUpRight className="absolute h-4 w-4 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
              <ArrowUpRight className="absolute h-4 w-4 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
            </div>
          </Link>
          
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white font-semibold rounded-full hover:border-white/60 hover:bg-white/8 transition-all duration-300 text-sm h-[48px]"
          >
            View Our Work
          </Link>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute right-8 bottom-12 hidden lg:flex flex-col items-center gap-2 z-20"
      >
        <span className="label-caps text-white/25 [writing-mode:vertical-rl] text-[9px]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={16} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}

