import { AboutSection, CorePrinciplesSection, WhyChooseUsSection, QHSESection } from "@/components/sections";
import { PageTransition } from "@/components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-32 min-h-screen">
        <AboutSection />
        <CorePrinciplesSection />
        <QHSESection />
        <WhyChooseUsSection />
      </div>
    </PageTransition>
  );
}
