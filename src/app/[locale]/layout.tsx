import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { contentMap, hasLocale, locales } from "@/content/portfolio";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const c = contentMap[locale];

  return {
    title: `Carolina Papes — ${c.hero.role}`,
    description: c.hero.body,
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-black font-sans">
        {children}
      </body>
    </html>
  );
}
