import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";
import { PageTransition } from "@/components/PageTransition";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="pt-20 min-h-screen">
        <ProjectsSection />
      </div>
    </PageTransition>
  );
}
