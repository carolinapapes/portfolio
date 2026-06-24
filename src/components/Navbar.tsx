"use client";

import { useEffect, useState } from "react";
import type { PortfolioContent } from "@/content/portfolio.en";
import { NavItem } from "./ui/NavItem";
import styles from "./Navbar.module.css";

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
            window.innerWidth < 640
              ? "-112px 0px 0px 0px"
              : "-72px 0px 0px 0px",
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
      className={[
        styles.nav,
        "fixed inset-x-0 top-0 z-50",
        visible ? styles.visible : styles.hidden,
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-3 sm:h-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <div className="flex items-center justify-between gap-4">
          <span className={styles.brand}>{nav.name}</span>
          <NavItem
            kind="link"
            href={nav.langSwitchHref}
            className="text-xs sm:hidden"
            ariaLabel={nav.langSwitchAriaLabel}
          >
            {nav.langSwitch}
          </NavItem>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:flex-nowrap sm:gap-6">
          <NavItem href="#projects">{nav.projects}</NavItem>
          <NavItem href={nav.cvHref} download>
            {nav.cv}
          </NavItem>
          <NavItem href="#contact">{nav.contact}</NavItem>
          <div className={styles.controls}>
            <NavItem
              kind="link"
              href={nav.langSwitchHref}
              className="hidden sm:inline-flex"
              ariaLabel={nav.langSwitchAriaLabel}
            >
              {nav.langSwitch}
            </NavItem>
          </div>
        </div>
      </div>
    </nav>
  );
}
