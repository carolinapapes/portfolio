import { content as enContent } from "./portfolio.en";
import { content as esContent } from "./portfolio.es";

export const contentMap = {
  en: enContent,
  es: esContent,
} as const;

export const locales = Object.keys(contentMap) as Array<
  keyof typeof contentMap
>;

export type Locale = keyof typeof contentMap;

export function hasLocale(locale: string): locale is Locale {
  return locale in contentMap;
}
