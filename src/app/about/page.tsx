import { AboutSection, CorePrinciplesSection, WhyChooseUsSection, QHSESection } from "@/components/sections";

export default function AboutPage() {
  return (
    <div className="pt-32 min-h-screen">
      <AboutSection />
      <CorePrinciplesSection />
      <QHSESection />
      <WhyChooseUsSection />
    </div>
  );
}
