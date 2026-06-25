import TokenShowcase from "@/components/TokenShowcase";
import { notFound } from "next/navigation";
import { contentMap, hasLocale } from "@/content/portfolio";

export default async function page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const c = contentMap[locale];
  return <TokenShowcase showcase={c.showcase} />;
}
