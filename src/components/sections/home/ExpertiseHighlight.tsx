"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";

const ease = [0.25, 0.1, 0.25, 1] as const;

const projects = [
  { title: "Tema Port Expansion", category: "Marine Construction", image: "/project-tema.jpg" },
  { title: "Kumasi Road Network", category: "Road Construction", image: "/project-kumasi.jpg" },
  { title: "Takoradi Gas Terminal", category: "Oil & Gas", image: "/project-takoradi.jpg" },
  { title: "Accra Corporate Tower", category: "Commercial", image: "/project-accra.jpg" },
  { title: "Tano Oil Field Support", category: "Oil & Gas", image: "/project-tano.png" },
  { title: "Cape Coast Hospital", category: "Healthcare", image: "/project-cape-coast.png" },
];

export function ExpertiseHighlight() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-sand/40 py-20 overflow-hidden">
      <div className="container-vr mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeader
            label="Our Work"
            title={<>Quality Infrastructure <span className="text-maroon">Delivered</span></>}
            subtitle="Years of field experience combined with modern engineering standards."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-maroon hover:text-gold transition-colors whitespace-nowrap mb-14"
          >
            All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Draggable Project Cards Row */}
      <div ref={constraintsRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          className="flex gap-5 pl-6 sm:pl-8 lg:pl-12 pr-6"
          style={{ width: "max-content" }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden group"
              style={{ width: "clamp(260px, 30vw, 380px)", height: "clamp(340px, 45vw, 500px)" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 overlay-dark-bottom" />

              {/* Content */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-px bg-gold" />
                  <span className="label-caps text-gold text-[10px]">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Drag hint */}
      <div className="container-vr mt-6">
        <p className="text-charcoal/30 text-xs font-medium tracking-widest uppercase">
          ← Drag to explore →
        </p>
      </div>
    </section>
  );
}
