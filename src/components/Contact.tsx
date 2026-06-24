import type { PortfolioContent } from "@/content/portfolio.en";

import Section from "./layout/Section";
import { ButtonLink } from "./ui/ButtonLink";

type Props = {
  label: PortfolioContent["nav"]["contact"];
  contact: PortfolioContent["contact"];
};

export default function Contact({ label, contact }: Props) {
  return (
    <Section id="contact" label={label}>
      <div className="grid gap-5">
        <h2 className="contact-heading">{contact.heading}</h2>

        <p className="contact-body">{contact.body}</p>

        <ul className="contact-links grid gap-3">
          {contact.links.map((link) => (
            <li key={link.href}>
              <ButtonLink
                href={link.href}
                external={link.href.startsWith("http")}
                variant="text"
              >
                <span>{link.label}</span>
                <span className="button-link__meta">{link.display}</span>
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
