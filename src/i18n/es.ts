import type { Dict } from "./types";

export default (name: string): Dict => ({
  htmlLang: "es",
  ogLocale: "es_ES",
  label: "Español",
  nav: {
    how: "Cómo funciona",
    occasions: "Ocasiones",
    pricing: "Precio",
    faq: "Preguntas",
    cta: "Descargar",
    menu: "Menú",
    skip: "Saltar al contenido",
    language: "Idioma",
    home: `${name}, inicio`,
  },
  home: {
    seo: {
      title: `${name}: app de bingo para fiestas con amigos`,
      description:
        "Crea un bingo con lo que seguro que pasará en tu fiesta y juega con tu gente. Gratis en iPhone y Android.",
    },
    hero: {
      h1: "El bingo de tus fiestas, con tu gente",
      sub: "Convierte cenas, bodas, viajes y partidos en un juego. Comparte un enlace, marca lo que pasa y gana la ronda.",
      storesNote: "Gratis para jugar en iPhone y Android.",
    },
    how: {
      title: "Cómo funciona",
      intro: "Tres pasos y tu fiesta es un juego.",
      steps: [
        {
          title: "Crea la partida",
          text: "Elige una plantilla o escribe lo que seguro que va a pasar.",
          shot: "04-create",
          alt: `App ${name}: creando una partida con una lista de situaciones`,
        },
        {
          title: "Comparte el enlace o el código",
          text: "Envía el enlace o el código de 6 letras. Tu gente entra en segundos.",
          shot: "02-invite",
          alt: `App ${name}: invitando a amigos con un enlace o un código de 6 letras`,
        },
        {
          title: "Marca lo que pasa y gana",
          text: "Cuando algo pasa, tócalo. Quien haga línea o bingo primero, gana.",
          shot: "06-win",
          alt: `App ${name}: el ganador de una ronda de bingo`,
        },
      ],
    },
    occasions: {
      title: "Un bingo para cada ocasión",
      intro: "Siempre que pienses “esto seguro que pasa”, hay una partida.",
      more: "Ver ideas",
    },
    modes: {
      title: "Tres formas de jugar",
      items: [
        { title: "Bingo", text: "Un cartón con las situaciones. Haz línea y luego bingo." },
        {
          title: "One Shot",
          text: "Una lista de cosas por encontrar. Gana quien las encuentre primero.",
        },
        {
          title: "Mega Score",
          text: "Cada situación vale puntos. Las partidas pueden durar días o semanas.",
        },
      ],
    },
    templates: {
      title: "Una plantilla para cada fiesta",
      text: "¿No sabes qué escribir? Empieza con una plantilla y cambia lo que quieras.",
      free: "La Cena de Navidad es gratis.",
      paid: "Desbloquea las demás con un anuncio corto, una a una, o todas a la vez con Pro.",
      alt: `App ${name}: lista de plantillas de partidas`,
    },
    privacy: {
      title: "Privadas por defecto",
      text: "Todas las partidas son privadas. Solo entra quien tiene tu enlace o código.",
      points: ["Sin chat", "Sin desconocidos", "Sin partidas públicas"],
    },
    pricing: {
      title: "Gratis para jugar",
      intro: "Crea y juega todas las partidas que quieras.",
      free: {
        title: "Gratis",
        price: "0",
        rows: [
          "Partidas ilimitadas",
          "Plantilla de Cena de Navidad",
          "Otras plantillas con un anuncio corto",
          "Con anuncios",
        ],
      },
      pro: {
        title: "Pro",
        price: "6,99 €",
        badge: "Un solo pago, para siempre",
        rows: [
          "Todas las plantillas",
          "Imágenes de fondo para tus partidas",
          "Sin anuncios",
          "Sin suscripción",
        ],
      },
      note: "El precio puede variar según el país y se muestra en la tienda.",
    },
    faq: {
      title: "Preguntas frecuentes",
      contact: "¿Más dudas? Escríbenos desde la página de soporte.",
      items: [
        {
          q: "¿Tiene que tener la app todo el mundo?",
          a: "Sí. Cada persona que juega instala la app gratis y entra con tu enlace o código.",
        },
        {
          q: "¿Cuánta gente puede jugar?",
          a: "Está pensada para grupos de amigos y familia, desde unas pocas personas hasta una mesa entera. Comparte el enlace o el código con quien juegue.",
        },
        {
          q: "¿Es gratis?",
          a: "Sí. Jugar y crear partidas es gratis y sin límite. Algunas plantillas y las imágenes de fondo son de pago.",
        },
        {
          q: "¿Qué incluye Pro?",
          a: "Todas las plantillas e imágenes de fondo para tus partidas, sin anuncios. Es un solo pago, no una suscripción.",
        },
        {
          q: "¿Puedo entrar con el código en lugar del enlace?",
          a: "Sí. Cada partida tiene un código de 6 letras. Abre la app, escribe el código y listo.",
        },
        {
          q: "¿Cómo contacto con vosotros?",
          a: "Usa la página de soporte y te respondemos por correo.",
        },
      ],
    },
    cta: {
      title: "Tu próxima fiesta es un juego",
      sub: "Descarga la app y crea tu primer bingo en un minuto.",
    },
  },
  occasion: {
    howTitle: "Cómo jugarlo con la app",
    examplesTitle: "Situaciones para copiar",
    examplesHint: "Elige las que suenen a tu gente o úsalas como punto de partida.",
    relatedTitle: "Más ideas",
    ctaTitle: "Crea tu bingo ahora",
    ctaSub: "Gratis para jugar en iPhone y Android.",
    breadcrumbHome: "Inicio",
    shotAlt: `App ${name}: cartón de bingo para una fiesta`,
  },
  footer: {
    tagline: "Bingo de fiesta con amigos.",
    support: "Soporte",
    privacy: "Política de privacidad",
    terms: "Términos y condiciones",
    cookies: "Política de cookies",
    deleteAccount: "Eliminar cuenta",
    rights: "Todos los derechos reservados",
  },
  stores: {
    appStore: "Descargar en el App Store",
    googlePlay: "Disponible en Google Play",
    appStoreAlt: "Descargar en el App Store",
    googlePlayAlt: "Disponible en Google Play",
  },
});
