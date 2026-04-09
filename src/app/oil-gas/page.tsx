import { OilGasSection } from "@/components/sections/oil-gas/OilGasSection";
import { PageTransition } from "@/components/PageTransition";

export default function OilGasPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <OilGasSection />
      </div>
    </PageTransition>
  );
}
