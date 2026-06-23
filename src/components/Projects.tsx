import ProjectCard from "./ProjectCard";
import type { PortfolioContent } from "@/content/portfolio.en";

type Props = {
  label: PortfolioContent["nav"]["projects"];
  projects: PortfolioContent["projects"];
};

export default function Projects({ label, projects }: Props) {
  return (
    <section id="projects">
      <div className="mx-auto grid max-w-3xl gap-4 px-6 py-10 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-0 sm:py-12">
        <div className="sm:pr-8">
          <p className="text-xs text-black">{label}</p>
        </div>
        <div className="flex min-w-0 flex-col gap-8 sm:pl-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
