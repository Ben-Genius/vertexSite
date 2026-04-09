import { QHSESection } from "@/components/sections/qhse/QHSESection";
import { PageTransition } from "@/components/PageTransition";

export default function QHSEPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <QHSESection />
      </div>
    </PageTransition>
  );
}
