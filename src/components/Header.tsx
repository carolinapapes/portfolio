import type { PortfolioContent } from "@/content/portfolio.en";

import SplitSection from "./layout/SplitSection";
import { ButtonLink } from "./ui/ButtonLink";
import styles from "./Header.module.css";

type Props = {
  nav: PortfolioContent["nav"];
  hero: PortfolioContent["hero"];
  stats: PortfolioContent["stats"];
};

export default function Header({ nav, hero, stats }: Props) {
  return (
    <header data-hero className={styles.header}>
      <HeroDecor />

      <SplitSection
        as="div"
        variant="hero"
        aside={<HeroAside nav={nav} hero={hero} />}
      >
        <HeroContent hero={hero} stats={stats} />
      </SplitSection>

      <div data-hero-end aria-hidden="true" className="h-px w-full" />
    </header>
  );
}

type HeroAsideProps = {
  nav: PortfolioContent["nav"];
  hero: PortfolioContent["hero"];
};

function HeroAside({ nav, hero }: HeroAsideProps) {
  return (
    <div className={styles.aside}>
      <p className={styles.name}>{nav.name}</p>

      <p className={styles.role}>{hero.role}</p>
    </div>
  );
}

type HeroContentProps = {
  hero: PortfolioContent["hero"];
  stats: PortfolioContent["stats"];
};

function HeroContent({ hero, stats }: HeroContentProps) {
  return (
    <div className={styles.content}>
      <div className={styles.copy}>
        <p className={styles.kicker}>{hero.kicker}</p>

        <h1 className={styles.title}>{hero.headline}</h1>
      </div>

      <p className={styles.body}>{hero.body}</p>

      <HeroCtas hero={hero} />

      <HeroStats stats={stats} />
    </div>
  );
}

function HeroCtas({ hero }: { hero: PortfolioContent["hero"] }) {
  return (
    <div className={styles.ctas}>
      <ButtonLink href={hero.ctas.projects.href} variant="primary">
        {hero.ctas.projects.label}
      </ButtonLink>

      <ButtonLink href={hero.ctas.cv.href} download variant="secondary">
        {hero.ctas.cv.label}
      </ButtonLink>

      <ButtonLink href={hero.ctas.github.href} external variant="secondary">
        {hero.ctas.github.label}
      </ButtonLink>
    </div>
  );
}

function HeroStats({ stats }: { stats: PortfolioContent["stats"] }) {
  return (
    <div className={styles.stats}>
      {stats.map((stat) => (
        <p key={stat} className={styles.stat}>
          {stat}
        </p>
      ))}
    </div>
  );
}

function HeroDecor() {
  return (
    <div aria-hidden="true" className={styles.decor}>
      <div className={styles.decorOrb} />
      <div className={styles.decorFrame} />
      <div className={styles.decorLine} />
    </div>
  );
}
