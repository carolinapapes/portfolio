import type { ReactNode } from "react";

type TechBadgeProps = {
  children: ReactNode;
};

export function TechBadge({ children }: TechBadgeProps) {
  return <span className="tech-badge">{children}</span>;
}
