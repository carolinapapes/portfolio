import type { PortfolioContent } from "@/content/portfolio.en";
import { ButtonLink } from "./ui/ButtonLink";

type Props = {
  nav: PortfolioContent["nav"];
  hero: PortfolioContent["hero"];
  stats: PortfolioContent["stats"];
};

export default function Header({ nav, hero, stats }: Props) {
  return (
    <header
      data-hero
      className="relative overflow-hidden border-b border-black/8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[18rem] md:block"
      >
        <div className="absolute right-12 top-20 h-28 w-28 rounded-full border border-black/10 motion-safe:animate-[heroFloat_12s_ease-in-out_infinite]" />
        <div className="absolute right-6 top-28 h-40 w-40 rotate-12 border border-black/8" />
        <div className="absolute left-4 top-44 h-0 w-28 border-t border-black/10" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <div className="grid gap-10 py-10 sm:py-14 md:grid-cols-[220px_minmax(0,1fr)] md:gap-0">
          <div className="flex flex-col gap-6 border-b border-black/8 pb-8 md:min-h-[40rem] md:border-b-0 md:border-r md:pb-0 md:pr-10">
            <div className="flex flex-col gap-3 pt-2 md:pt-8">
              <p className="max-w-[8ch] text-xl font-semibold tracking-[-0.04em] text-black leading-[0.92]">
                {nav.name}
              </p>
              <p className="text-[11px] uppercase tracking-[0.28em] text-black/45">
                {hero.role}
              </p>
            </div>
          </div>

          <div className="relative md:pl-12">
            <div className="relative flex min-h-[30rem] flex-col justify-center gap-8 py-2 sm:min-h-[34rem] md:min-h-[40rem]">
              <div className="flex flex-col gap-4">
                <p className="text-[11px] uppercase tracking-[0.32em] text-black/45">
                  {hero.kicker}
                </p>
                <h1 className="max-w-2xl text-5xl font-bold tracking-[-0.05em] text-black leading-[0.94] sm:text-6xl md:text-[4.5rem]">
                  {hero.headline}
                </h1>
              </div>

              <p className="max-w-xl text-base text-black/60 leading-8 sm:text-lg">
                {hero.body}
              </p>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#projects" variant="primary">
                  {hero.ctas.projects.label}
                </ButtonLink>

                <ButtonLink
                  href={hero.ctas.cv.href}
                  download
                  variant="secondary"
                >
                  {hero.ctas.cv.label}
                </ButtonLink>

                <ButtonLink
                  href={hero.ctas.github.href}
                  external
                  variant="secondary"
                >
                  {hero.ctas.github.label}
                </ButtonLink>
                <br />
              </div>

              <div className="grid gap-3 border-t border-black/8 pt-5 text-xs text-black sm:grid-cols-2">
                {stats.map((stat) => (
                  <p key={stat} className="leading-relaxed">
                    {stat}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-hero-end aria-hidden="true" className="h-px w-full" />
    </header>
  );
}
