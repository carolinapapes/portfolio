import type { PortfolioContent } from "@/content/portfolio.en";

type Props = { languages: PortfolioContent["languages"] };

export default function Languages({ languages }: Props) {
  return (
    <section>
      <div className="mx-auto grid max-w-3xl gap-4 px-6 py-8 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-0">
        <div className="sm:pr-8">
          <p className="text-xs text-black">{languages.heading}</p>
        </div>
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:gap-6 sm:pl-10">
          {languages.items.map((item) => (
            <div
              key={item.lang}
              className="flex flex-col gap-1 text-xs text-black sm:flex-row sm:gap-2"
            >
              <span className="font-medium">{item.lang}</span>
              <span className="hidden sm:inline">—</span>
              <span>{item.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
