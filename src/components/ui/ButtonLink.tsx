import type { ReactNode } from "react";
import styles from "./ButtonLink.module.css";

const buttonLinkVariants = {
  primary: styles.primary,
  secondary: styles.secondary,
  text: styles.text,
  project: styles.project,
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  download?: boolean;
  external?: boolean;
  variant?: keyof typeof buttonLinkVariants;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  download,
  external,
  variant = "text",
  className,
}: ButtonLinkProps) {
  const classes = [styles.button, buttonLinkVariants[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {children}
    </a>
  );
}
