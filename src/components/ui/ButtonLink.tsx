import type { ReactNode } from "react";

const buttonLinkVariants = {
  primary: "button-link--primary",
  secondary: "button-link--secondary",
  text: "button-link--text",
  project: "button-link--project",
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
  const classes = ["button-link", buttonLinkVariants[variant], className]
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
