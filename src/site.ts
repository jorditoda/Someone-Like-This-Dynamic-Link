/**
 * Configuració del lloc. El nom de l'app es canvia NOMÉS aquí
 * (els textos dels idiomes el reben com a paràmetre).
 */
export const SITE = {
  name: "Someone Like This",
  url: "https://someonelikethis.yapplic.com",
  company: "Yapplic",
  companyUrl: "https://yapplic.com",
  contactEmail: "info@yapplic.com",
  appStoreId: "6739965531",
  appStoreSlug: "like-this",
  playPackage: "com.stormfkrs.like_this",
  // Xarxes socials del peu (deixa-ho buit si no n'hi ha).
  socials: {} as { instagram?: string; tiktok?: string },
} as const;

type StoreLang = "en" | "es" | "ca";

const APPLE_COUNTRY: Record<StoreLang, string> = { en: "us", es: "es", ca: "es" };

export function appStoreUrl(lang: StoreLang = "en") {
  return `https://apps.apple.com/${APPLE_COUNTRY[lang]}/app/${SITE.appStoreSlug}/id${SITE.appStoreId}`;
}

export function playStoreUrl(lang: StoreLang = "en") {
  return `https://play.google.com/store/apps/details?id=${SITE.playPackage}&hl=${lang}`;
}
