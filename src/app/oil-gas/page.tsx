import { OilGasSection } from "@/components/sections";
import { PageTransition } from "@/components/PageTransition";

export default function OilGasPage() {
  return (
    <PageTransition>
      <div className="pt-32 min-h-screen">
        <OilGasSection />
      </div>
    </PageTransition>
  );
}
