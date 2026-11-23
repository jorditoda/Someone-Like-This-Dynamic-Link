import { SITE } from "../site";
import type { Dict } from "./types";
import en from "./en";
import es from "./es";
import ca from "./ca";

export const LANGS = ["en", "es", "ca"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

const dicts: Record<Lang, (name: string) => Dict> = { en, es, ca };

export function getDict(lang: Lang): Dict {
  return dicts[lang](SITE.name);
}

export function homePath(lang: Lang) {
  return lang === DEFAULT_LANG ? "/" : `/${lang}/`;
}

export function pagePath(lang: Lang, slug: string) {
  return lang === DEFAULT_LANG ? `/${slug}` : `/${lang}/${slug}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE.url).toString();
}
