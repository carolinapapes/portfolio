import type { ReactNode } from "react";
import styles from "./TechBadge.module.css";

type TechBadgeProps = {
  children: ReactNode;
};

export function TechBadge({ children }: TechBadgeProps) {
  return <span className={styles.badge}>{children}</span>;
}
