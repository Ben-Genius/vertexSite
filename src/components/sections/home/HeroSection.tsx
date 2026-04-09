"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
        .from(".hero-word", {
          yPercent: 105,
          opacity: 0,
          duration: 0.85,
          ease: "power4.out",
          stagger: 0.09,
        }, "-=0.2")
        .from(".hero-sub", { opacity: 0, y: 16, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .from(".hero-cta", { opacity: 0, y: 12, duration: 0.5, ease: "power3.out", stagger: 0.1 }, "-=0.3")
;
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
      {/* Video Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-[1.08]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/heroVid.mp4" type="video/mp4" />
        </video>
        {/* Very subtle overlay — keep video bright/vivid */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/10" />
        {/* Warm left accent for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent" />
        {/* Subtle noise grain */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
      </motion.div>

      {/* Top gold accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.15, ease }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-gold/40 to-transparent z-10"
      />

      {/* Main Content — bottom-left */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 container-vr pb-24 sm:pb-20"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="hero-eyebrow flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="label-caps text-gold/90 text-[10px]">Construction & Engineering · Ghana</span>
          </div>

          {/* H1 Word Reveal */}
          <h1 className="text-[clamp(3.2rem,9vw,6rem)] font-bold text-white leading-[1.0] mb-5 flex flex-wrap gap-x-[0.18em]">
            {h1Words.map((word, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <span className={`hero-word inline-block ${word === "Future." ? "text-gold" : ""}`}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p className="hero-sub text-[clamp(1rem,2.2vw,1.25rem)] font-light text-white/75 mb-10 max-w-lg leading-relaxed">
            With Precision. With Integrity. Delivering world-class infrastructure rooted in Ghana.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="hero-cta inline-flex items-center gap-3 px-7 py-4 bg-maroon text-white font-bold rounded-md hover:bg-gold hover:text-charcoal transition-all duration-300 text-sm"
            >
              Start a Project
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/projects"
              className="hero-cta inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white font-semibold rounded-md hover:border-white/60 hover:bg-white/8 transition-all duration-300 text-sm"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute right-8 bottom-12 hidden lg:flex flex-col items-center gap-2 z-10"
      >
        <span className="label-caps text-white/25 [writing-mode:vertical-rl] text-[9px]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={16} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
