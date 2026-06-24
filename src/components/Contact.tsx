import type { PortfolioContent } from "@/content/portfolio.en";

import Section from "./layout/Section";
import { ButtonLink } from "./ui/ButtonLink";
import buttonLinkStyles from "./ui/ButtonLink.module.css";
import styles from "./Contact.module.css";

type Props = {
  label: PortfolioContent["nav"]["contact"];
  contact: PortfolioContent["contact"];
};

export default function Contact({ label, contact }: Props) {
  return (
    <Section id="contact" label={label}>
      <div className={styles.content}>
        <h2 className={styles.heading}>{contact.heading}</h2>

        <p className={styles.body}>{contact.body}</p>

        <ul className={styles.links}>
          {contact.links.map((link) => (
            <li key={link.href}>
              <ButtonLink
                href={link.href}
                external={link.href.startsWith("http")}
                variant="text"
              >
                <span>{link.label}</span>
                <span className={buttonLinkStyles.meta}>{link.display}</span>
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
