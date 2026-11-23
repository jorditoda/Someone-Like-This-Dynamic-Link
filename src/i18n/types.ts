export type Dict = {
  htmlLang: string;
  ogLocale: string;
  label: string; // nom de l'idioma al selector
  nav: {
    how: string;
    occasions: string;
    pricing: string;
    faq: string;
    cta: string;
    menu: string;
    skip: string;
    language: string;
    home: string; // aria-label del logo
  };
  home: {
    seo: { title: string; description: string };
    hero: { h1: string; sub: string; storesNote: string };
    how: {
      title: string;
      intro: string;
      steps: { title: string; text: string; shot: string; alt: string }[];
    };
    occasions: { title: string; intro: string; more: string };
    modes: { title: string; items: { title: string; text: string }[] };
    templates: { title: string; text: string; free: string; paid: string; alt: string };
    privacy: { title: string; text: string; points: string[] };
    pricing: {
      title: string;
      intro: string;
      free: { title: string; price: string; rows: string[] };
      pro: { title: string; price: string; badge: string; rows: string[] };
      note: string;
    };
    faq: { title: string; items: { q: string; a: string }[]; contact: string };
    cta: { title: string; sub: string };
  };
  occasion: {
    howTitle: string;
    examplesTitle: string;
    examplesHint: string;
    relatedTitle: string;
    ctaTitle: string;
    ctaSub: string;
    breadcrumbHome: string;
    shotAlt: string;
  };
  footer: {
    tagline: string;
    support: string;
    privacy: string;
    terms: string;
    cookies: string;
    deleteAccount: string;
    rights: string;
  };
  stores: { appStore: string; googlePlay: string; appStoreAlt: string; googlePlayAlt: string };
};
