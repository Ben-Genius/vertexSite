"use client";

import { HeroSection, IntroSection, CorePrinciplesSection, ExpertiseHighlight } from "@/components/sections";
import { AboutSection } from "@/components/sections";
import { ServicesSection } from "@/components/sections";
import { OilGasSection } from "@/components/sections";
import { ProjectsSection } from "@/components/sections";
import { TeamSection } from "@/components/sections";
import { QHSESection } from "@/components/sections";
import { ContactSection } from "@/components/sections";
import { WhyChooseUsSection } from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection />

      {/* Intro */}
      <IntroSection />

      {/* Expertise Highlight */}
      <ExpertiseHighlight />

      {/* About */}
      <AboutSection />

      {/* Services */}
      <ServicesSection />

      {/* Oil & Gas */}
      <OilGasSection />

      {/* Core Principles */}
      <CorePrinciplesSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Team/Process */}
      <TeamSection />

      {/* QHSE */}
      <QHSESection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
