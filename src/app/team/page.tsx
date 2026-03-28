import { TeamSection } from "@/components/sections";
import { PageTransition } from "@/components/PageTransition";

export default function TeamPage() {
  return (
    <PageTransition>
      <div className="pt-32 min-h-screen">
        <TeamSection />
      </div>
    </PageTransition>
  );
}
