"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    label: "Site Assessment",
    caption: "Site Surveys & Geotechnical Analysis",
    image: "/img-person-1.jpg",
  },
  {
    number: "02",
    label: "Technical Design",
    caption: "Structural Engineering & Specifications",
    image: "/img-team-office.jpg",
  },
  {
    number: "03",
    label: "Procurement",
    caption: "Material Sourcing & Vendor Qualification",
    image: "/img-steel-pipes.jpg",
  },
  {
    number: "04",
    label: "Civil Works",
    caption: "Construction & Quality Supervision",
    image: "/img-construction.jpg",
  },
  {
    number: "05",
    label: "Quality Inspection",
    caption: "Phased Inspections & Compliance Checks",
    image: "/img-port.jpg",
  },
  {
    number: "06",
    label: "Handover",
    caption: "Commissioning & Asset Transfer",
    image: "/img-oil-ship.jpg",
  },
];

export function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollAmount = () => track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount() + 100}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      tl.to(track, { x: () => -getScrollAmount(), ease: "none" });

      // Subtle image parallax per card
      gsap.utils.toArray<HTMLElement>(".hs-card").forEach((card) => {
        const img = card.querySelector<HTMLElement>(".hs-img");
        if (!img) return;
        gsap.fromTo(
          img,
          { scale: 1.1 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left right",
              end: "left center",
              scrub: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden bg-white" style={{ height: "88vh" }}>
      {/* Header — sits at the very top */}
      <div className="absolute top-0 left-0 right-0 z-20 container-vr pt-16 pb-0 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-8 h-px bg-maroon" />
            <span className="label-caps text-maroon text-[10px]">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
            End-to-End <span className="text-maroon">Delivery</span>
          </h2>
        </div>
        <span className="hidden lg:block text-charcoal/25 text-[10px] font-medium tracking-[0.25em] uppercase">
          Scroll to explore →
        </span>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-charcoal/6 z-20">
        <div ref={progressRef} className="h-full bg-maroon transition-none" style={{ width: "0%" }} />
      </div>

      {/* Horizontal track — fills from header to bottom */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 flex h-full"
        style={{ width: "max-content" }}
      >
        {/* Left padding */}
        <div className="flex-shrink-0 w-20 lg:w-28" />

        {steps.map((step, i) => (
          <div
            key={i}
            className="hs-card flex-shrink-0 flex flex-col pt-36 pb-10 mr-5 last:mr-0"
            style={{ width: "clamp(300px, 36vw, 500px)" }}
          >
            {/* Step header */}
            <div className="flex items-center gap-3 mb-3 px-1">
              <span className="text-[11px] font-mono font-bold text-charcoal/25 tracking-[0.25em]">
                {step.number}
              </span>
              <div className="flex-1 h-px bg-charcoal/8" />
              <span className="text-[10px] font-semibold text-charcoal/35 tracking-wide uppercase hidden sm:block">
                {step.label}
              </span>
            </div>

            {/* Image — fills remaining height */}
            <div className="relative overflow-hidden rounded-2xl flex-1">
              <img
                src={step.image}
                alt={step.label}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase mb-1">
                  {step.caption}
                </p>
                <p className="text-white font-bold text-lg leading-tight">{step.label}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Right padding */}
        <div className="flex-shrink-0 w-20 lg:w-28" />
      </div>
    </div>
  );
}
