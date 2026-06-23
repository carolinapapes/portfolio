import type { PortfolioContent } from "@/content/portfolio.en";

type Props = { footer: PortfolioContent["footer"] };

export default function Footer({ footer }: Props) {
  return (
    <footer>
      <div className="mx-auto grid max-w-3xl gap-4 px-6 py-8 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-0">
        <div />
        <div className="sm:pl-10">
          <p className="text-xs text-black">{footer.copy}</p>
        </div>
      </div>
    </footer>
  );
}
