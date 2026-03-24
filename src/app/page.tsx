import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HeroSection } from "@/components/sections";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Dynamic imports for optimization
const IntroSection = dynamic(() => import("@/components/sections").then(m => m.IntroSection));
const ExpertiseHighlight = dynamic(() => import("@/components/sections").then(m => m.ExpertiseHighlight));
const AboutSection = dynamic(() => import("@/components/sections").then(m => m.AboutSection));
const ServicesSection = dynamic(() => import("@/components/sections").then(m => m.ServicesSection));
const OilGasSection = dynamic(() => import("@/components/sections").then(m => m.OilGasSection));
const CorePrinciplesSection = dynamic(() => import("@/components/sections").then(m => m.CorePrinciplesSection));
const WhyChooseUsSection = dynamic(() => import("@/components/sections").then(m => m.WhyChooseUsSection));
const ProjectsSection = dynamic(() => import("@/components/sections").then(m => m.ProjectsSection));
const TeamSection = dynamic(() => import("@/components/sections").then(m => m.TeamSection));
const QHSESection = dynamic(() => import("@/components/sections").then(m => m.QHSESection));
const ContactSection = dynamic(() => import("@/components/sections").then(m => m.ContactSection));

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <Suspense fallback={<SectionFallback />}>
        <IntroSection />
        <ExpertiseHighlight />
        <AboutSection />
        <ServicesSection />
        <OilGasSection />
        <CorePrinciplesSection />
        <WhyChooseUsSection />
        <ProjectsSection />
        <TeamSection />
        <QHSESection />
        <ContactSection />
      </Suspense>
    </div>
  );
}

function SectionFallback() {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center bg-sand/20">
      <LoadingSpinner />
    </div>
  );
}
