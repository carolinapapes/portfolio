import type { PortfolioContent } from "@/content/portfolio.en";
import { ButtonLink } from "./ui/ButtonLink";
import { TechBadge } from "./ui/TechBadge";

type Project = PortfolioContent["projects"][number];
type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <p className="project-card__role">{project.role}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
      </div>

      <p className="project-card__description">{project.description}</p>

      <ul className="project-card__highlights">
        {project.highlights.map((h) => (
          <li key={h} className="project-card__highlight">
            <span className="project-card__bullet">—</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <ul className="project-card__stack">
        {project.stack.map((tech) => (
          <li key={tech}>
            <TechBadge>{tech}</TechBadge>
          </li>
        ))}
      </ul>

      {(project.links.length > 0 || project.feedback) && (
        <div className="project-card__footer">
          {project.links.length > 0 && (
            <div className="project-card__links">
              {project.links.map((link) => (
                <ButtonLink
                  key={link.href}
                  href={link.href}
                  external={link.href.startsWith("http")}
                  variant="project"
                >
                  {link.label} ↗
                </ButtonLink>
              ))}
            </div>
          )}
          {project.feedback && (
            <blockquote className="project-card__feedback">
              &ldquo;{project.feedback}&rdquo;
            </blockquote>
          )}
        </div>
      )}
    </article>
  );
}
