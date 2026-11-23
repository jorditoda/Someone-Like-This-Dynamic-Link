import type { Dict } from "./types";

export default (name: string): Dict => ({
  htmlLang: "ca",
  ogLocale: "ca_ES",
  label: "Català",
  nav: {
    how: "Com funciona",
    occasions: "Ocasions",
    pricing: "Preu",
    faq: "Preguntes",
    cta: "Descarrega",
    menu: "Menú",
    skip: "Saltar al contingut",
    language: "Idioma",
    home: `${name}, inici`,
  },
  home: {
    seo: {
      title: `${name}: app de bingo per a festes amb amics`,
      description:
        "Crea un bingo amb el que segur que passarà a la teva festa i juga amb la teva gent. Gratis a iPhone i Android.",
    },
    hero: {
      h1: "El bingo de les teves festes, amb la teva gent",
      sub: "Converteix sopars, casaments, viatges i partits en un joc. Comparteix un enllaç, marca el que passa i guanya la ronda.",
      storesNote: "Gratis per jugar a iPhone i Android.",
    },
    how: {
      title: "Com funciona",
      intro: "Tres passos i la teva festa és un joc.",
      steps: [
        {
          title: "Crea la partida",
          text: "Tria una plantilla o escriu el que segur que passarà.",
          shot: "04-create",
          alt: `App ${name}: creant una partida amb una llista de situacions`,
        },
        {
          title: "Comparteix l'enllaç o el codi",
          text: "Envia l'enllaç o el codi de 6 lletres. La teva gent hi entra en segons.",
          shot: "02-invite",
          alt: `App ${name}: convidant amics amb un enllaç o un codi de 6 lletres`,
        },
        {
          title: "Marca el que passa i guanya",
          text: "Quan una cosa passa, toca-la. Qui faci línia o bingo primer, guanya.",
          shot: "06-win",
          alt: `App ${name}: el guanyador d'una ronda de bingo`,
        },
      ],
    },
    occasions: {
      title: "Un bingo per a cada ocasió",
      intro: "Sempre que pensis “això segur que passa”, hi ha una partida.",
      more: "Veure idees",
    },
    modes: {
      title: "Tres maneres de jugar",
      items: [
        { title: "Bingo", text: "Un cartó amb les situacions. Fes línia i després bingo." },
        {
          title: "One Shot",
          text: "Una llista de coses per trobar. Guanya qui les troba primer.",
        },
        {
          title: "Mega Score",
          text: "Cada situació val punts. Les partides poden durar dies o setmanes.",
        },
      ],
    },
    templates: {
      title: "Una plantilla per a cada festa",
      text: "No saps què escriure? Comença amb una plantilla i canvia el que vulguis.",
      free: "El Sopar de Nadal és gratis.",
      paid: "Desbloqueja les altres amb un anunci curt, una a una, o totes alhora amb Pro.",
      alt: `App ${name}: llista de plantilles de partides`,
    },
    privacy: {
      title: "Privades per defecte",
      text: "Totes les partides són privades. Només hi entra qui té el teu enllaç o codi.",
      points: ["Sense xat", "Sense desconeguts", "Sense partides públiques"],
    },
    pricing: {
      title: "Gratis per jugar",
      intro: "Crea i juga totes les partides que vulguis.",
      free: {
        title: "Gratis",
        price: "0",
        rows: [
          "Partides il·limitades",
          "Plantilla del Sopar de Nadal",
          "Altres plantilles amb un anunci curt",
          "Amb anuncis",
        ],
      },
      pro: {
        title: "Pro",
        price: "6,99 €",
        badge: "Un sol pagament, per sempre",
        rows: [
          "Totes les plantilles",
          "Imatges de fons per a les teves partides",
          "Sense anuncis",
          "Sense subscripció",
        ],
      },
      note: "El preu pot variar segons el país i es mostra a la botiga.",
    },
    faq: {
      title: "Preguntes freqüents",
      contact: "Més dubtes? Escriu-nos des de la pàgina de suport.",
      items: [
        {
          q: "Cal que tothom tingui l'app?",
          a: "Sí. Cada persona que juga instal·la l'app gratis i hi entra amb el teu enllaç o codi.",
        },
        {
          q: "Quanta gent pot jugar?",
          a: "No hi ha límit. Comparteix l'enllaç o el codi amb tots els que juguin, des d'uns pocs amics fins a una taula sencera.",
        },
        {
          q: "És gratis?",
          a: "Sí. Jugar i crear partides és gratis i sense límit. Algunes plantilles i les imatges de fons són de pagament.",
        },
        {
          q: "Què inclou Pro?",
          a: "Totes les plantilles i imatges de fons per a les teves partides, sense anuncis. És un sol pagament, no una subscripció.",
        },
        {
          q: "Puc entrar amb el codi en lloc de l'enllaç?",
          a: "Sí. Cada partida té un codi de 6 lletres. Obre l'app, escriu el codi i ja hi ets.",
        },
        {
          q: "Com contacto amb vosaltres?",
          a: "Fes servir la pàgina de suport i et responem per correu.",
        },
      ],
    },
    cta: {
      title: "La teva propera festa és un joc",
      sub: "Descarrega l'app i crea el teu primer bingo en un minut.",
    },
  },
  occasion: {
    howTitle: "Com jugar-hi amb l'app",
    examplesTitle: "Situacions per copiar",
    examplesHint: "Tria les que sonin a la teva gent o fes-les servir com a punt de partida.",
    relatedTitle: "Més idees",
    ctaTitle: "Crea el teu bingo ara",
    ctaSub: "Gratis per jugar a iPhone i Android.",
    breadcrumbHome: "Inici",
    shotAlt: `App ${name}: cartó de bingo per a una festa`,
  },
  footer: {
    tagline: "Bingo de festa amb els amics.",
    support: "Suport",
    privacy: "Política de privacitat",
    terms: "Termes i condicions",
    cookies: "Política de galetes",
    deleteAccount: "Esborrar el compte",
    rights: "Tots els drets reservats",
  },
  stores: {
    appStore: "Descarrega a l'App Store",
    googlePlay: "Disponible a Google Play",
    appStoreAlt: "Descarrega a l'App Store",
    googlePlayAlt: "Disponible a Google Play",
  },
});
