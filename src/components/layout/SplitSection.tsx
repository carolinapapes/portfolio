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
    wrapper: string;
    grid: string;
    aside: string;
    content: string;
  }
> = {
  default: {
    wrapper: "",
    grid: "gap-4 py-10 sm:gap-0 sm:py-12",
    aside: "sm:pr-8",
    content: "min-w-0 sm:pl-10",
  },
  hero: {
    wrapper: "",
    grid: "gap-10 py-10 sm:py-14 md:gap-0",
    aside:
      "flex flex-col gap-6 border-b border-black/8 pb-8 md:min-h-[40rem] md:border-b-0 md:border-r md:pb-0 md:pr-10",
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
    <Wrapper id={id} className={styles.wrapper}>
      <div className="mx-auto max-w-3xl px-6">
        <div
          className={`grid sm:grid-cols-[220px_minmax(0,1fr)] ${styles.grid}`}
        >
          <aside className={styles.aside}>{aside}</aside>

          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </Wrapper>
  );
}
