import type { ReactNode } from "react";

type TechBadgeProps = {
  children: ReactNode;
};

export function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="inline-flex w-fit items-center rounded-sm border border-black/20 px-2 py-1 text-[11px] font-medium text-neutral-700">
      {children}
    </span>
  );
}
