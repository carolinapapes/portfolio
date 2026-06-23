import type { ReactNode } from "react";

const buttonLinkVariants = {
  primary:
    "inline-flex items-center rounded-sm border border-black px-4 py-2 text-xs font-medium text-black transition-colors hover:border-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4",

  secondary:
    "inline-flex items-center rounded-sm border border-black/30 px-4 py-2 text-xs font-medium text-black transition-colors hover:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4",

  text: "group inline-flex items-center gap-2 text-sm text-black underline decoration-neutral-300 underline-offset-4 transition hover:decoration-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black",

  project:
    "inline-flex items-center text-xs font-medium text-black underline underline-offset-2 transition hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  download?: boolean;
  external?: boolean;
  variant?: keyof typeof buttonLinkVariants;
};

export function ButtonLink({
  href,
  children,
  download,
  external,
  variant = "text",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={buttonLinkVariants[variant]}
    >
      {children}
    </a>
  );
}
