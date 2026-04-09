import { HeroSection } from "@/components/sections/home/HeroSection";
import { IntroSection } from "@/components/sections/home/IntroSection";
import { HorizontalScroll } from "@/components/sections/home/HorizontalScroll";
import { BentoSection } from "@/components/sections/home/BentoSection";
import { CapsuleSection } from "@/components/sections/home/CapsuleSection";
import { ExpertiseHighlight } from "@/components/sections/home/ExpertiseHighlight";
import { WhyChooseUsSection } from "@/components/sections/home/WhyChooseUsSection";
import { QHSEPreview } from "@/components/sections/home/QHSEPreview";
import { CTASection } from "@/components/sections/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <HorizontalScroll />
      <BentoSection />
      <CapsuleSection />
      <QHSEPreview />

      <ExpertiseHighlight />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
}
