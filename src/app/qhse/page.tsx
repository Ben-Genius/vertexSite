import { QHSESection } from "@/components/sections";
import { PageTransition } from "@/components/PageTransition";

export default function QHSEPage() {
  return (
    <PageTransition>
      <div className="pt-32 min-h-screen">
        <QHSESection />
      </div>
    </PageTransition>
  );
}
