import type { ReactNode } from "react";

import styles from "./Title.module.css";

type TitleProps = {
  children: ReactNode;
};

export function Title({ children }: TitleProps) {
  return <h3 className={styles.title}>{children}</h3>;
}
