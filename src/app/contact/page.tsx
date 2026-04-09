import { ContactSection } from "@/components/sections/contact/ContactSection";
import { PageTransition } from "@/components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <ContactSection />
      </div>
    </PageTransition>
  );
}
