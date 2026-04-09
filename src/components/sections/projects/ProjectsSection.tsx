"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";

const ease = [0.25, 0.1, 0.25, 1] as const;

const allProjects = [
  { title: "Tema Port Expansion", category: "Marine Construction", year: "2023", image: "/img-port.jpg" },
  { title: "Kumasi Road Network", category: "Road Construction", year: "2022", image: "/img-construction.jpg" },
  { title: "Takoradi Gas Terminal", category: "Oil & Gas", year: "2023", image: "/img-oil-ship.jpg" },
  { title: "Accra Corporate Tower", category: "Commercial", year: "2021", image: "/img-team-office.jpg" },
  { title: "Tano Oil Field Support", category: "Oil & Gas", year: "2022", image: "/img-steel-pipes.jpg" },
  { title: "Cape Coast Hospital", category: "Healthcare", year: "2023", image: "/img-oil-worker.jpg" },
];

const categories = ["All", "Marine Construction", "Road Construction", "Oil & Gas", "Commercial", "Healthcare"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-sand overflow-hidden">
      <div className="container-vr">
        <SectionHeader
          label="Projects"
          title={<>Featured <span className="text-maroon">Projects</span></>}
          subtitle="A showcase of our diverse portfolio across construction, engineering, and oil & gas sectors."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-nowrap sm:flex-wrap gap-2 mb-12 overflow-x-auto pb-3 snap-x scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap snap-start shrink-0 ${
                activeCategory === cat
                  ? "bg-maroon text-white shadow-[0_0_20px_rgba(133,30,30,0.3)]"
                  : "bg-white border border-charcoal/10 text-charcoal/60 hover:border-maroon/30 hover:text-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  i === 0 || i === 3 ? "md:row-span-2" : ""
                }`}
                style={{
                  minHeight: i === 0 || i === 3 ? "clamp(380px, 60vh, 600px)" : "clamp(280px, 35vh, 320px)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ transition: "transform 700ms ease" }}
                />
                <div className="absolute inset-0 overlay-dark-bottom" />

                {/* Year badge */}
                <div className="absolute top-5 right-5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-full">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">{project.year}</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 inset-x-0 p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-px bg-gold" />
                    <span className="label-caps text-gold text-[10px]">{project.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-gold transform group-hover:translate-x-1 transition-all duration-300 mb-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    View Project <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
