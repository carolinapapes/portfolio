import Link from "next/link";
import type { ReactNode } from "react";

const navItemClassName =
  "whitespace-nowrap rounded text-black underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black";

type BaseNavItemProps = {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
};

type AnchorNavItemProps = BaseNavItemProps & {
  kind?: "anchor";
  download?: boolean;
};

type LinkNavItemProps = BaseNavItemProps & {
  kind: "link";
};

type NavItemProps = AnchorNavItemProps | LinkNavItemProps;

export function NavItem(props: NavItemProps) {
  const className = props.className
    ? `${navItemClassName} ${props.className}`
    : navItemClassName;

  if (props.kind === "link") {
    return (
      <Link href={props.href} className={className} aria-label={props.ariaLabel}>
        {props.children}
      </Link>
    );
  }

  return (
    <a
      href={props.href}
      download={props.download}
      className={className}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </a>
  );
}
