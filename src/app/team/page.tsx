import { TeamSection } from "@/components/sections/team/TeamSection";
import { PageTransition } from "@/components/PageTransition";

export default function TeamPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <TeamSection />
      </div>
    </PageTransition>
  );
}
