"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    label: "01 / Engineering",
    heading: "Precision-Built\nInfrastructure",
    body: "We combine structural rigor with local expertise — every beam, every spec, built to last.",
    cta: { text: "Our Services", href: "/services" },
    variant: "maroon" as const,
  },
  {
    label: "02 / Oil & Gas",
    heading: "Energy Sector\nCapability",
    body: "Licensed by GNPC, HSE compliant — supporting upstream and midstream operations across Ghana.",
    cta: { text: "Oil & Gas", href: "/oil-gas" },
    variant: "gold" as const,
  },
  {
    label: "03 / QHSE",
    heading: "Zero-Compromise\nSafety Standards",
    body: "ISO 9001, ISO 14001, OHSAS 18001 certified systems woven into every phase of delivery.",
    cta: { text: "QHSE", href: "/qhse" },
    variant: "navy" as const,
  },
];

const palette = {
  maroon: { bg: "bg-maroon", text: "text-white", sub: "text-white/60", border: "border-white/25", ctaHover: "hover:bg-white/10" },
  gold:   { bg: "bg-gold",   text: "text-charcoal", sub: "text-charcoal/55", border: "border-charcoal/20", ctaHover: "hover:bg-charcoal/8" },
  navy:   { bg: "bg-navy",   text: "text-white", sub: "text-white/60", border: "border-white/25", ctaHover: "hover:bg-white/10" },
};

// Particle dots — purely CSS animated, no canvas
function Particles({ variant }: { variant: "maroon" | "gold" | "navy" }) {
  const dotColor = variant === "gold" ? "bg-charcoal/12" : "bg-white/15";
  const accentColor = variant === "gold" ? "bg-maroon/18" : "bg-gold/22";
  const dots = Array.from({ length: 20 }, (_, i) => ({
    x: (i * 41 + 7) % 96,
    y: (i * 59 + 13) % 92,
    accent: i % 4 === 0,
    size: i % 5 === 0 ? "w-2 h-2" : "w-1 h-1",
    dur: 2.8 + (i % 4) * 0.5,
    delay: (i * 0.22) % 2.5,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${d.accent ? accentColor : dotColor} ${d.size}`}
          style={{ left: `${d.x}%`, top: `${d.y}%` }}
          animate={{ y: [0, -14, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: d.dur, repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
        />
      ))}
      {/* Ambient orbs */}
      <div className={`absolute -top-1/3 -left-1/3 w-2/3 h-2/3 rounded-full ${accentColor} opacity-15 blur-3xl`} />
      <div className={`absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 rounded-full ${dotColor} opacity-10 blur-3xl`} />
    </div>
  );
}

// Isolated progress dot — no hooks inside map
function ProgressDot({ index, active, onClick }: {
  index: number; active: number; onClick: () => void;
}) {
  return (
    <button onClick={onClick} aria-label={`Panel ${index + 1}`}>
      <motion.div
        animate={{ width: index === active ? 24 : 8, opacity: index === active ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
        className="h-1.5 rounded-full bg-charcoal/50"
      />
    </button>
  );
}

// Slide variants for AnimatePresence
const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 48 : -48, scale: 0.97 }),
  center: { opacity: 1, y: 0, scale: 1 },
  exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -48 : 48, scale: 0.97 }),
};

export function CapsuleSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const total = panels.length;

  // GSAP ScrollTrigger: snaps scroll to each panel segment
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const segH = window.innerHeight; // each panel = 1 full viewport of scroll

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: () => `+=${(total - 1) * segH}`,
        // CSS sticky handles visual pinning; we just track progress here
        onUpdate(self) {
          const raw = self.progress * (total - 1);
          const snapped = Math.round(raw);
          setActive((prev) => {
            if (snapped !== prev) {
              setDir(snapped > prev ? 1 : -1);
              return snapped;
            }
            return prev;
          });
        },
        snap: {
          snapTo: total > 1 ? 1 / (total - 1) : 1,
          duration: { min: 0.35, max: 0.65 },
          ease: "power2.inOut",
          delay: 0,
          directional: true,
          inertia: false,
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, [total]);

  const goTo = (i: number) => {
    setDir(i > active ? 1 : -1);
    setActive(i);
    // Scroll to the corresponding position in the wrapper
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const segH = window.innerHeight;
    const targetY = wrapper.offsetTop + i * segH;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const pal = palette[panels[active].variant];

  return (
    // Wrapper provides the scroll distance for each panel
    <div
      ref={wrapperRef}
      style={{ height: `${total * 100}vh` }}
      className="relative"
    >
      {/* Sticky shell — stays in place while wrapper scrolls */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-sand"
      >
        {/* Ambient shifting background */}
        <motion.div
          key={panels[active].variant}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
          style={{
            background: panels[active].variant === "maroon"
              ? "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(133,30,30,0.09) 0%, transparent 70%)"
              : panels[active].variant === "gold"
              ? "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,160,23,0.11) 0%, transparent 70%)"
              : "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,42,68,0.11) 0%, transparent 70%)",
          }}
        />

        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(10,10,11,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Section label */}
        <div className="absolute top-10 left-0 right-0 container-vr flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3">
            <div className="w-7 h-px bg-maroon" />
            <span className="label-caps text-charcoal/35 text-[10px]">Core Capabilities</span>
          </div>
          <span className="hidden lg:block label-caps text-charcoal/20 text-[10px]">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Capsule — oval pill */}
        <div className="relative w-full max-w-[min(780px,88vw)] mx-auto" style={{ aspectRatio: "16/7" }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.32, 0, 0.67, 0] }}
              className={`absolute inset-0 ${pal.bg} rounded-[999px] overflow-hidden flex flex-col items-center justify-center text-center px-10 sm:px-16`}
            >
              <Particles variant={panels[active].variant} />
              <div className="relative z-10">
                <span className={`label-caps ${pal.sub} text-[10px] mb-5 block`}>
                  {panels[active].label}
                </span>
                <h2
                  className={`text-[clamp(1.6rem,3.8vw,2.8rem)] font-bold ${pal.text} leading-[1.15] mb-4 whitespace-pre-line`}
                >
                  {panels[active].heading}
                </h2>
                <p className={`${pal.sub} text-sm sm:text-[15px] leading-relaxed max-w-[340px] mx-auto mb-7`}>
                  {panels[active].body}
                </p>
                <Link
                  href={panels[active].cta.href}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border ${pal.border} ${pal.text} ${pal.ctaHover} text-sm font-semibold transition-all duration-300`}
                >
                  {panels[active].cta.text} <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots + nav */}
        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-3">
          {panels.map((_, i) => (
            <ProgressDot key={i} index={i} active={active} onClick={() => goTo(i)} />
          ))}
        </div>

        {/* Scroll hint — fades after first interaction */}
        {active === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-20 left-0 right-0 flex justify-center pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="label-caps text-charcoal/25 text-[9px]">Scroll</span>
              <div className="w-px h-5 bg-charcoal/15" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
