import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HeroSection } from "@/components/sections";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Dynamic imports for optimization
const IntroSection = dynamic(() => import("@/components/sections").then(m => m.IntroSection));
const ExpertiseHighlight = dynamic(() => import("@/components/sections").then(m => m.ExpertiseHighlight));
const WhyChooseUsSection = dynamic(() => import("@/components/sections").then(m => m.WhyChooseUsSection));
const QHSESection = dynamic(() => import("@/components/sections").then(m => m.QHSESection));

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <Suspense fallback={<SectionFallback />}>
        <IntroSection />
        <ExpertiseHighlight />
        <WhyChooseUsSection />
        <QHSESection />
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
