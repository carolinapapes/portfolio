import type { ReactNode } from "react";
import styles from "./Section.module.css";

import SplitSection from "./SplitSection";

type SectionProps = {
  id?: string;
  label: string;
  children: ReactNode;
};

export default function Section({ id, label, children }: SectionProps) {
  return (
    <SplitSection id={id} aside={<p className={styles.label}>{label}</p>}>
      {children}
    </SplitSection>
  );
}
