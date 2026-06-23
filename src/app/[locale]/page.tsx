import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { contentMap, hasLocale } from "@/content/portfolio";

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const c = contentMap[locale];

  return (
    <>
      <Navbar nav={c.nav} />
      <Header nav={c.nav} hero={c.hero} stats={c.stats} />
      <main>
        <Projects label={c.nav.projects} projects={c.projects} />
        <Languages languages={c.languages} />
        <Contact label={c.nav.contact} contact={c.contact} />
      </main>
      <Footer footer={c.footer} />
    </>
  );
}
