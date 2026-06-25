import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ButtonLink.module.css";

const PROTOCOL_PATTERN = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;

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

function shouldRenderAnchor({
  href,
  download,
  external,
}: Pick<ButtonLinkProps, "href" | "download" | "external">) {
  return download || external || href.startsWith("//") || PROTOCOL_PATTERN.test(href);
}

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

  if (shouldRenderAnchor({ href, download, external })) {
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

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
