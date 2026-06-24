import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./NavItem.module.css";

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
  const className = [styles.item, props.className].filter(Boolean).join(" ");

  if (props.kind === "link") {
    return (
      <Link
        href={props.href}
        className={className}
        aria-label={props.ariaLabel}
      >
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
