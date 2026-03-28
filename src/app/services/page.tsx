import { ServicesSection } from "@/components/sections";
import { PageTransition } from "@/components/PageTransition";

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-32 min-h-screen">
        <ServicesSection />
      </div>
    </PageTransition>
  );
}
