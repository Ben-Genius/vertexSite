import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { PageTransition } from "@/components/PageTransition";

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <ServicesSection />
      </div>
    </PageTransition>
  );
}
