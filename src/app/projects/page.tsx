import { ProjectsSection } from "@/components/sections";
import { PageTransition } from "@/components/PageTransition";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="pt-32 min-h-screen">
        <ProjectsSection />
      </div>
    </PageTransition>
  );
}
