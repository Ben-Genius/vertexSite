"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const ease = [0.25, 0.1, 0.25, 1] as const;

const cards = [
  {
    tags: ["Civil Works", "Engineering"],
    title: "End-to-End Infrastructure Delivery",
    sub: "From geotechnical surveys to handover — one firm, full accountability.",
    image: "/img-construction.jpg",
  },
  {
    tags: ["Oil & Gas", "Logistics"],
    title: "Upstream & Midstream Energy Support",
    sub: "GNPC-licensed operations supporting Ghana's offshore and onshore sector.",
    image: "/img-oil-worker.jpg",
  },
  {
    tags: ["Project Management", "QA"],
    title: "Procurement & Quality Supervision",
    sub: "Rigorous vendor qualification, transparent reporting, zero shortcuts.",
    image: "/img-team-office.jpg",
  },
  {
    tags: ["QHSE", "Compliance"],
    title: "ISO-Certified Safety Systems",
    sub: "ISO 9001, 14001 & OHSAS 18001 woven into every phase of work.",
    image: "/img-steel-pipes.jpg",
  },
];

export function IntroSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + cards.length) % cards.length);
  const next = () => setActive((a) => (a + 1) % cards.length);

  return (
    <section className="bg-white border-b border-charcoal/6 px-2">
      <div className="container-vr py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-maroon" />
              <span className="label-caps text-maroon text-[10px]">Who We Are</span>
            </div>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-charcoal leading-[1.12] mb-5">
              Grounded in Ghana.<br />
              <span className="text-maroon">Built for Africa.</span>
            </h2>
            <p className="text-charcoal/55 text-base leading-relaxed mb-8 max-w-md">
              A Ghanaian-owned construction and engineering firm shaped by years of practical experience — delivering world-class infrastructure rooted in local ecosystems.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-white text-sm font-bold rounded-lg hover:bg-charcoal/85 transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-charcoal/15 text-charcoal text-sm font-semibold rounded-lg hover:border-charcoal/30 hover:bg-charcoal/3 transition-colors"
              >
                Our Services <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>

          {/* Right — stacked card carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
          >
            {/* Card deck */}
            <div className="relative h-[190px] w-full">
              {/* Ghost cards behind */}
              {[2, 1].map((offset) => (
                <div
                  key={offset}
                  className="absolute inset-0 bg-[#f2f2f0] rounded-2xl border border-charcoal/6"
                  style={{
                    transform: `translateY(${offset * 7}px) scale(${1 - offset * 0.025})`,
                    opacity: 1 - offset * 0.3,
                    zIndex: 3 - offset,
                  }}
                />
              ))}

              {/* Active card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.98 }}
                  transition={{ duration: 0.3, ease }}
                  className="absolute inset-0 z-10 bg-white rounded-2xl border border-charcoal/8 shadow-[0_8px_32px_rgba(10,10,11,0.08)] flex overflow-hidden"
                >
                  {/* Content */}
                  <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {cards[active].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-charcoal/5 text-[10px] font-bold text-charcoal/50 tracking-wide uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-charcoal leading-snug mb-1">
                        {cards[active].title}
                      </h3>
                      <p className="text-charcoal/45 text-sm leading-relaxed">{cards[active].sub}</p>
                    </div>
                  </div>
                  {/* Thumbnail */}
                  <div className="w-[110px] sm:w-[140px] flex-shrink-0 overflow-hidden rounded-r-2xl">
                    <img
                      src={cards[active].image}
                      alt={cards[active].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav row */}
            <div className="flex items-center gap-4 mt-5">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal/50 hover:text-charcoal hover:border-charcoal/30 transition-colors"
                aria-label="Previous"
              >
                <ArrowLeft size={14} />
              </button>
              <div className="flex gap-1.5">
                {cards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Card ${i + 1}`}
                  >
                    <div
                      className={`h-1 rounded-full transition-all duration-300 ${i === active ? "w-5 bg-maroon" : "w-1.5 bg-charcoal/20"
                        }`}
                    />
                  </button>
                ))}
              </div>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal/50 hover:text-charcoal hover:border-charcoal/30 transition-colors"
                aria-label="Next"
              >
                <ArrowRight size={14} />
              </button>
              <span className="ml-auto text-[10px] text-charcoal/25 font-mono tracking-widest">
                {String(active + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
