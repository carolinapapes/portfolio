import type { PortfolioContent } from "@/content/portfolio.en";
import { ButtonLink } from "./ui/ButtonLink";
import { TechBadge } from "./ui/TechBadge";
import styles from "./ProjectCard.module.css";

type Project = PortfolioContent["projects"][number];
type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <p className={styles.role}>{project.role}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.subtitle}>{project.subtitle}</p>
      </div>

      <p className={styles.description}>{project.description}</p>

      <ul className={styles.highlights}>
        {project.highlights.map((h) => (
          <li key={h} className={styles.highlight}>
            <span className={styles.bullet}>—</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <ul className={styles.stack}>
        {project.stack.map((tech) => (
          <li key={tech}>
            <TechBadge>{tech}</TechBadge>
          </li>
        ))}
      </ul>

      {(project.links.length > 0 || project.feedback) && (
        <div className={styles.footer}>
          {project.links.length > 0 && (
            <div className={styles.links}>
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
            <blockquote className={styles.feedback}>
              &ldquo;{project.feedback}&rdquo;
            </blockquote>
          )}
        </div>
      )}
    </article>
  );
}
