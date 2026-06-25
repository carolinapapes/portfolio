import type { PortfolioContent } from "@/content/portfolio.en";
import { TokenPreviewCard } from "./ui/TokenPreviewCard";
import styles from "./TokenShowcase.module.css";

type Props = {
  showcase: PortfolioContent["showcase"];
};

type ThemeId = "minimal" | "neobrutalism" | "futuristic" | "terminal";

type ThemeContentKey = keyof PortfolioContent["showcase"]["themes"];

const themes: {
  themeId: ThemeId;
  contentKey: ThemeContentKey;
}[] = [
  {
    themeId: "minimal",
    contentKey: "minimal",
  },
  {
    themeId: "neobrutalism",
    contentKey: "neobrutalism",
  },
  {
    themeId: "futuristic",
    contentKey: "futuristic",
  },
  {
    themeId: "terminal",
    contentKey: "terminal",
  },
];

export default function TokenShowcase({ showcase }: Props) {
  return (
    <section id="token-system">
      <div className={styles.showcase}>
        <div className="mx-auto max-w-3xl px-6">
          <div className={styles.intro}>
            <h2 className={styles.title}>{showcase.title}</h2>
            <p className={styles.body}>{showcase.body}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {themes.map(({ themeId, contentKey }) => {
            const theme = showcase.themes[contentKey];

            return (
              <TokenPreviewCard
                key={themeId}
                themeId={themeId}
                themeName={theme.name}
                tag="Featured project"
                title="Design Tokens Showcase"
                body="Semantic tokens define meaning. Component tokens decide how each pattern responds to that meaning."
                primaryAction={{
                  label: "Primary action",
                  href: "#projects",
                }}
                secondaryAction={{
                  label: "Secondary action",
                  href: "#contact",
                }}
                note={theme.note}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
