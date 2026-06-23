import type { PortfolioContent } from "@/content/portfolio.en";
import { ButtonLink } from "./ui/ButtonLink";

type Project = PortfolioContent["projects"][number];
type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <article className="flex flex-col gap-5 border-t border-black/8 pt-6 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-1">
        <p className="text-xs text-black">{project.role}</p>
        <h3 className="text-base font-semibold text-black">{project.title}</h3>
        <p className="text-xs text-black">{project.subtitle}</p>
      </div>

      <p className="text-sm text-black leading-relaxed">
        {project.description}
      </p>

      <ul className="flex flex-col gap-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="text-sm text-black flex gap-3">
            <span className="select-none shrink-0">—</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span key={tech} className="text-xs px-2 py-0.5 text-black">
            {tech}
          </span>
        ))}
      </div>

      {(project.links.length > 0 || project.feedback) && (
        <div className="flex flex-col gap-3 pt-4">
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-4">
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
            <blockquote className="pl-3 text-xs text-black italic">
              &ldquo;{project.feedback}&rdquo;
            </blockquote>
          )}
        </div>
      )}
    </article>
  );
}
