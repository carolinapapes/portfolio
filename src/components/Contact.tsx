import type { PortfolioContent } from "@/content/portfolio.en";

import Section from "./layout/Section";

type Props = {
  label: PortfolioContent["nav"]["contact"];
  contact: PortfolioContent["contact"];
};

export default function Contact({ label, contact }: Props) {
  return (
    <Section id="contact" label={label}>
      <div className="grid gap-5">
        <h2 className="text-2xl font-semibold tracking-tight text-black">
          {contact.heading}
        </h2>

        <p className="max-w-xl text-sm leading-6 text-neutral-700">
          {contact.body}
        </p>

        <ul className="grid gap-3 text-sm">
          {contact.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group inline-flex gap-2 text-black underline decoration-neutral-300 underline-offset-4 transition hover:decoration-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span>{link.label}</span>
                <span className="text-neutral-500">{link.display}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
