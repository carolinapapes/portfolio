import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { contentMap, hasLocale } from "@/content/portfolio";

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const c = contentMap[locale];

  return (
    <>
      <Navbar nav={c.nav} />
      <Header nav={c.nav} hero={c.hero} stats={c.stats} />
    </>
  );
}
