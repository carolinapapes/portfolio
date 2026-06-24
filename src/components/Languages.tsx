import type { PortfolioContent } from "@/content/portfolio.en";

import Section from "./layout/Section";
import styles from "./Languages.module.css";

type Props = {
  languages: PortfolioContent["languages"];
};

export default function Languages({ languages }: Props) {
  return (
    <Section label={languages.heading}>
      <ul className={styles.list}>
        {languages.items.map((item) => (
          <li key={item.lang}>
            <span className={styles.name}>{item.lang}</span>
            <span> — {item.level}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
