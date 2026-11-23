import type { Dict } from "./types";

export default (name: string): Dict => ({
  htmlLang: "en",
  ogLocale: "en_US",
  label: "English",
  nav: {
    how: "How it works",
    occasions: "Occasions",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Get the app",
    menu: "Menu",
    skip: "Skip to content",
    language: "Language",
    home: `${name}, home`,
  },
  home: {
    seo: {
      title: `${name}: party bingo app for friends and family`,
      description:
        "Make a bingo of the things that are bound to happen at your party and play it with your people. Free on iPhone and Android.",
    },
    hero: {
      h1: "Party bingo for every celebration",
      sub: "Turn dinners, weddings, trips and matches into a game. Share a link, mark what happens, win the round.",
      storesNote: "Free to play on iPhone and Android.",
    },
    how: {
      title: "How it works",
      intro: "Three steps and your party is a game.",
      steps: [
        {
          title: "Create the game",
          text: "Pick a template or write the things that are bound to happen.",
          shot: "04-create",
          alt: `${name} app: creating a game with a list of moments`,
        },
        {
          title: "Share the link or code",
          text: "Send the link or the 6-letter code. Your people join in seconds.",
          shot: "02-invite",
          alt: `${name} app: inviting friends with a link or a 6-letter code`,
        },
        {
          title: "Mark what happens and win",
          text: "When something happens, tap it. First to get a line or bingo wins.",
          shot: "06-win",
          alt: `${name} app: the winner of a bingo round`,
        },
      ],
    },
    occasions: {
      title: "A bingo for every occasion",
      intro: "Whenever you think “this will definitely happen”, there is a game.",
      more: "See the ideas",
    },
    modes: {
      title: "Three ways to play",
      items: [
        { title: "Bingo", text: "A card full of moments. Get a line, then bingo." },
        { title: "One Shot", text: "A list of things to spot. First to find them all wins." },
        {
          title: "Mega Score",
          text: "Every moment is worth points. Games can last days or weeks.",
        },
      ],
    },
    templates: {
      title: "A template for every party",
      text: "Not sure what to write? Start from a ready-made template and change what you like.",
      free: "Christmas dinner is free.",
      paid: "Unlock the others with a short ad, one at a time, or all at once with Pro.",
      alt: `${name} app: list of game templates`,
    },
    privacy: {
      title: "Private by default",
      text: "Every game is private. Only people with your link or code can join.",
      points: ["No chat", "No strangers", "No public games"],
    },
    pricing: {
      title: "Free to play",
      intro: "Create and play as many games as you want.",
      free: {
        title: "Free",
        price: "0",
        rows: [
          "Unlimited games",
          "Christmas dinner template",
          "Other templates with a short ad",
          "Includes ads",
        ],
      },
      pro: {
        title: "Pro",
        price: "6.99 €",
        badge: "One payment, forever",
        rows: [
          "All templates",
          "Background images for your games",
          "No ads",
          "No subscription",
        ],
      },
      note: "Prices can vary by country and are shown in the store.",
    },
    faq: {
      title: "Frequently asked questions",
      contact: "Still have a question? Write to us at the support page.",
      items: [
        {
          q: "Does everyone need the app?",
          a: "Yes. Everyone who plays installs the free app and joins with your link or code.",
        },
        {
          q: "How many people can play?",
          a: "There is no limit. Share the link or code with everyone who plays, from a few friends to a whole dinner table.",
        },
        {
          q: "Is it free?",
          a: "Yes. Playing and creating games is free and unlimited. Some templates and the background images are paid.",
        },
        {
          q: "What does Pro include?",
          a: "All templates and background images for your games, with no ads. It is a single payment, not a subscription.",
        },
        {
          q: "Can I join with a code instead of a link?",
          a: "Yes. Every game has a 6-letter code. Open the app, enter the code and you are in.",
        },
        {
          q: "How do I contact you?",
          a: "Use the support page and we will answer by email.",
        },
      ],
    },
    cta: {
      title: "Your next party is a game",
      sub: "Download the app and make your first bingo in a minute.",
    },
  },
  occasion: {
    howTitle: "How to play it with the app",
    examplesTitle: "Situations you can copy",
    examplesHint: "Pick the ones that sound like your people, or use them as a starting point.",
    relatedTitle: "More ideas",
    ctaTitle: "Make your bingo now",
    ctaSub: "Free to play on iPhone and Android.",
    breadcrumbHome: "Home",
    shotAlt: `${name} app: bingo card for a party`,
  },
  footer: {
    tagline: "Party bingo with your friends.",
    support: "Support",
    privacy: "Privacy policy",
    terms: "Terms and conditions",
    cookies: "Cookies policy",
    deleteAccount: "Delete account",
    rights: "All rights reserved",
  },
  stores: {
    appStore: "Download on the App Store",
    googlePlay: "Get it on Google Play",
    appStoreAlt: "Download on the App Store",
    googlePlayAlt: "Get it on Google Play",
  },
});
