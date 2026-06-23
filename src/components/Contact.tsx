import type { PortfolioContent } from "@/content/portfolio.en";

type Props = {
  label: PortfolioContent["nav"]["contact"];
  contact: PortfolioContent["contact"];
};

export default function Contact({ label, contact }: Props) {
  return (
    <section id="contact">
      <div className="mx-auto grid max-w-3xl gap-4 px-6 py-10 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-0 sm:py-12">
        <div className="sm:pr-8">
          <p className="text-xs text-black">{label}</p>
        </div>
        <div className="flex min-w-0 flex-col gap-5 sm:pl-10">
          <h2 className="text-xl font-semibold text-black">{contact.heading}</h2>
          <p className="text-sm text-black max-w-lg leading-relaxed">{contact.body}</p>
          <ul className="flex flex-col gap-3">
            {contact.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="inline-flex min-w-0 flex-col items-start gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded sm:flex-row sm:items-center sm:gap-4"
                >
                  <span className="text-xs text-black sm:w-16 sm:shrink-0">{link.label}</span>
                  <span className="text-sm text-black underline underline-offset-2 hover:no-underline transition-colors break-all sm:break-normal">
                    {link.display}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
