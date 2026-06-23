import type { PortfolioContent } from "@/content/portfolio.en";

import Section from "./layout/Section";
import ProjectCard from "./ProjectCard";

type Props = {
  label: PortfolioContent["nav"]["projects"];
  projects: PortfolioContent["projects"];
};

export default function Projects({ label, projects }: Props) {
  return (
    <Section id="projects" label={label}>
      <div className="grid gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
