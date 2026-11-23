import type { Lang } from "../i18n";

/**
 * Testimonis REALS de les botigues. Mentre sigui buit, la secció no es mostra.
 * Només s'hi poden posar ressenyes reals, amb nom i botiga d'origen.
 */
export type Testimonial = {
  name: string;
  store: "App Store" | "Google Play";
  text: Partial<Record<Lang, string>> & { en: string };
};

export const TESTIMONIALS: Testimonial[] = [];
