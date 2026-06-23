import type { ReactNode } from "react";

import SplitSection from "./SplitSection";

type SectionProps = {
  id?: string;
  label: string;
  children: ReactNode;
};

export default function Section({ id, label, children }: SectionProps) {
  return (
    <SplitSection
      id={id}
      aside={
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-black">
          {label}
        </p>
      }
    >
      {children}
    </SplitSection>
  );
}
