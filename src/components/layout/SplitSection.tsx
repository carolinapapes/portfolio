import type { ElementType, ReactNode } from "react";
import styles from "./SplitSection.module.css";

type SplitSectionVariant = "default" | "hero";

type SplitSectionProps = {
  id?: string;
  as?: "section" | "div";
  variant?: SplitSectionVariant;
  aside: ReactNode;
  children: ReactNode;
};

const variantStyles: Record<
  SplitSectionVariant,
  {
    gridClassName: string;
    asideClassName?: string;
    gridLayout: string;
    asideLayout: string;
    content: string;
  }
> = {
  default: {
    gridClassName: styles.defaultGrid,
    gridLayout: "grid gap-4 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-0",
    asideLayout: "sm:pr-8",
    content: "min-w-0 sm:pl-10",
  },
  hero: {
    gridClassName: styles.heroGrid,
    asideClassName: styles.heroAside,
    gridLayout: "grid gap-10 sm:grid-cols-[220px_minmax(0,1fr)] md:gap-0",
    asideLayout: "flex flex-col gap-6 pb-8 md:min-h-[40rem] md:pb-0 md:pr-10",
    content: "relative min-w-0 md:pl-12",
  },
};

export default function SplitSection({
  id,
  as = "section",
  variant = "default",
  aside,
  children,
}: SplitSectionProps) {
  const Wrapper = as as ElementType;
  const variantStyle = variantStyles[variant];
  const gridClassName = [
    styles.grid,
    variantStyle.gridClassName,
    variantStyle.gridLayout,
  ]
    .filter(Boolean)
    .join(" ");
  const asideClassName = [
    variantStyle.asideClassName,
    variantStyle.asideLayout,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Wrapper id={id}>
      <div className="mx-auto max-w-3xl px-6">
        <div className={gridClassName}>
          <aside className={asideClassName}>
            {aside}
          </aside>

          <div className={variantStyle.content}>{children}</div>
        </div>
      </div>
    </Wrapper>
  );
}
