import type { PortfolioContent } from "@/content/portfolio.en";

import Section from "./layout/Section";

type Props = {
  languages: PortfolioContent["languages"];
};

export default function Languages({ languages }: Props) {
  return (
    <Section label={languages.heading}>
      <ul className="languages-list grid gap-2">
        {languages.items.map((item) => (
          <li key={item.lang}>
            <span className="language-name">{item.lang}</span>
            <span> — {item.level}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
