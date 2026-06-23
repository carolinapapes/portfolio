"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { PortfolioContent } from "@/content/portfolio.en";

type Props = { nav: PortfolioContent["nav"] };

export default function Navbar({ nav }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.querySelector<HTMLElement>("[data-hero-end]");
    let frame = 0;

    if (!sentinel || typeof IntersectionObserver === "undefined") {
      frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const getObserver = () =>
      new IntersectionObserver(
        ([entry]) => {
          setVisible(!entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
          rootMargin:
            window.innerWidth < 640 ? "-112px 0px 0px 0px" : "-72px 0px 0px 0px",
        },
      );

    let observer = getObserver();
    frame = window.requestAnimationFrame(() => observer.observe(sentinel));

    const onResize = () => {
      observer.disconnect();
      observer = getObserver();
      observer.observe(sentinel);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white/90 backdrop-blur-sm transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-3 sm:h-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-bold tracking-tight text-black">
            {nav.name}
          </span>
          <Link
            href={nav.langSwitchHref}
            className="text-xs text-black hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded sm:hidden"
            aria-label={nav.langSwitchAriaLabel}
          >
            {nav.langSwitch}
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:flex-nowrap sm:gap-6">
          <a
            href="#projects"
            className="whitespace-nowrap text-black hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
          >
            {nav.projects}
          </a>
          <a
            href={nav.cvHref}
            download
            className="whitespace-nowrap text-black hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
          >
            {nav.cv}
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap text-black hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
          >
            {nav.contact}
          </a>
          <Link
            href={nav.langSwitchHref}
            className="hidden whitespace-nowrap text-black hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded sm:inline-flex"
            aria-label={nav.langSwitchAriaLabel}
          >
            {nav.langSwitch}
          </Link>
        </div>
      </div>
    </nav>
  );
}
