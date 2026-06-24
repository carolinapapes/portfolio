import type { ElementType, ReactNode } from "react";

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
    grid: string;
    aside: string;
    content: string;
  }
> = {
  default: {
    grid: "grid gap-4 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-0",
    aside: "sm:pr-8",
    content: "min-w-0 sm:pl-10",
  },
  hero: {
    grid: "grid gap-10 sm:grid-cols-[220px_minmax(0,1fr)] md:gap-0",
    aside: "flex flex-col gap-6 pb-8 md:min-h-[40rem] md:pb-0 md:pr-10",
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
  const styles = variantStyles[variant];

  return (
    <Wrapper id={id} className={`split-section split-section--${variant}`}>
      <div className="mx-auto max-w-3xl px-6">
        <div className={`split-section__grid ${styles.grid}`}>
          <aside className={`split-section__aside ${styles.aside}`}>
            {aside}
          </aside>

          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </Wrapper>
  );
}
