import { AboutSection } from "@/components/sections/about/AboutSection";
import { CorePrinciplesSection } from "@/components/sections/about/CorePrinciplesSection";
import { WhyChooseUsSection } from "@/components/sections/about/WhyChooseUsSection";
import { QHSESection } from "@/components/sections/qhse/QHSESection";
import { PageTransition } from "@/components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-20 min-h-screen">
        <AboutSection />
        <CorePrinciplesSection />
        <WhyChooseUsSection />
        <QHSESection />
      </div>
    </PageTransition>
  );
}
