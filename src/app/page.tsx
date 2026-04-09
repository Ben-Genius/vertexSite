import { HeroSection } from "@/components/sections/home/HeroSection";
import { IntroSection } from "@/components/sections/home/IntroSection";
import { ExpertiseHighlight } from "@/components/sections/home/ExpertiseHighlight";
import { WhyChooseUsSection } from "@/components/sections/home/WhyChooseUsSection";
import { QHSEPreview } from "@/components/sections/home/QHSEPreview";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ExpertiseHighlight />
      <WhyChooseUsSection />
      <QHSEPreview />
    </div>
  );
}
