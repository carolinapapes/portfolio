import type { PortfolioContent } from "@/content/portfolio.en";
import styles from "./Footer.module.css";

type Props = { footer: PortfolioContent["footer"] };

export default function Footer({ footer }: Props) {
  return (
    <footer>
      <div className={`mx-auto max-w-3xl px-6 py-8 ${styles.grid}`}>
        <div />
        <div className={styles.content}>
          <p className={styles.copy}>{footer.copy}</p>
        </div>
      </div>
    </footer>
  );
}
