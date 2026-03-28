import { ContactSection } from "@/components/sections";
import { PageTransition } from "@/components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-32 min-h-screen">
        <ContactSection />
      </div>
    </PageTransition>
  );
}
