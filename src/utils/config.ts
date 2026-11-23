import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Like This",
  seo: {
    title: "Download Like This",
    description: "Like This",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/logo.svg",
  theme: "corporate",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  appStoreLink: "https://apps.apple.com/us/app/like-this/id6739965531",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.stormfkrs.like_this",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
//       instagram: "https://instagram.com/google",
//       facebook: "https://facebook.com/google",
//       twitter: "https://x.com/google",
    },
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download Like This Today!",
    subtitle:
      "Discover the most amazing items in the world. Stay connected, informed, and in control wherever you are.",
    screenshots: [
      "/screenshots/1.webp",
      "/screenshots/2.webp",
      "/screenshots/4.png",
    ],
  },
  home: {
    seo: {
      title: "Download Like This Mobile App",
      description: "Download Like This Mobile App",
    },
    testimonials: {
      id: "testimonials",
      title: "Testimonials",
      subtitle: "Check out a few of our customer stories",
      cards: [
        {
          name: "Marta G.",
          comment:
            "Una app súper divertida y original. Me encanta cómo puedo agregar cualquier cosa que se me ocurra para encontrar en el juego. La nueva función de Bingo es un toque genial, ¡mis amigos y yo no podemos dejar de jugar!",
        },
        {
          name: "Carlos H.",
          comment:
            "‘Like This’ ha llevado nuestras reuniones familiares al siguiente nivel. El modo Bingo es nuestro favorito, especialmente cuando añadimos cosas graciosas y raras a nuestras tarjetas. ¡Muy recomendable!",
        },
        {
          name: "Ana P.",
          comment:
            "Soy un gran fan de las apps que combinan creatividad y diversión, y ‘Like This’ lo hace perfectamente. La animación de nieve navideña me ha encantado, ¡realmente le da un toque especial a la temporada!",
            },
        {
          name: "Jose R.",
          comment:
"Esta app es perfecta para mantener entretenidos a mis hijos durante las salidas. Les encanta buscar los ítems que agregamos en el juego. La nueva función de Bingo añade una competencia sana y mucha diversión.",
},
        {
          name: "Laura M.",
          comment:
"La simplicidad y el ingenio de ‘Like This’ me han sorprendido gratamente. Crear mis propias tarjetas de Bingo con ítems originales ha sido una experiencia única. ¡Gran trabajo con esta app!",
},
      ],
    },
//     partners: {
//       title: "As seen on",
//       logos: [
//         "/misc/companies/apple.svg",
//         "/misc/companies/aws.svg",
//         "/misc/companies/google.svg",
//         "/misc/companies/tumblr.svg",
//       ],
//     },
    howItWorks: {
      id: "how-it-works",
      title: "How it works",
      subtitle:
        "Explore our comprehensive step-by-step guide to understand how our process ensures seamless and effective results",
      steps: [
        {
          title: "Create a personalized game",
          subtitle:
            "Start the fun by creating a new game. Add the items or challenges you want your friends to find or accomplish. Let your imagination run wild with challenges like \"An elephant with a red hat\" or \"A bald man on a bicycle\"!",
          image: "/screenshots/4.png",
        },
        {
          title: "Invite your friends",
          subtitle:
            "Share the game with your friends so they can join. They can easily connect from their devices and will be ready to start playing together.",
          image: "/screenshots/share.png",
        },
        {
          title: "Find the items",
          subtitle:
            "During the game, all participants will try to find the added items. As they find them, they'll mark them in the app. Keep a keen eye on your surroundings and pay attention to every detail!",
          image: "/stock/03.webp",
        },
        {
          title: "Compete and win",
          subtitle:
            "The game ends when all the items have been found or the set time runs out. The player who has marked the most items will be the winner. Show that you're the fastest and most observant in the group!",
          image: "/stock/04.webp",
        },
//         {
//           title: "Connect with Others",
//           subtitle:
//             "Start connecting with friends, colleagues, and like-minded individuals to expand your network and collaborate efficiently.",
//           image: "/stock/05.webp",
//         },
      ],
    },
    features: {
      id: "features",
      title: "Transform The Way You See The World",
      subtitle:
        "Elevate your lifestyle with our innovative mobile app, designed for seamless living",
      cards: [
        {
          title: "Limitless Creativity 🎨",
          subtitle:
            "Invite your friends to a world full of creativity where you can add anything you can think of. From common objects to imaginative items, the only limit is your imagination.",
          icon: "/3D/paint-kit-front-color.webp",
        },
        {
          title: "Interactive Bingo Mode 🎲",
          subtitle:
            "The new Bingo feature, where you and your friends receive personalized cards and compete to complete a line or full Bingo. It adds an extra layer of fun and healthy competition.",
          icon: "/3D/clock-front-color.webp",
        },
        {
          title: "Play and Discover 🔍",
          subtitle:
            "We encourage to explore your surroundings in a fun and exciting way. Every game is a unique adventure that turns everyday activities into thrilling treasure hunts.",
          icon: "/3D/notify-heart-front-color.webp",
        },
        {
          title: "Festive Experience ❄️🎄",
          subtitle:
            "Check the seasonal animations and themes, like the new falling snow animation, which add a magical and festive touch to the gaming experience, making every session special.",
          icon: "/3D/gift-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "What is 'Like This'?",
          answer:
            "'Like This' is an interactive game where players create lists of fun and curious items they'd like to see or find. Each game is a unique adventure that turns everyday activities into exciting treasure hunts.",        },
        {
          question: "How does the Bingo mode work?",
          answer:
            "In Bingo mode, each player receives a personalized card with the items they've added. During the game, players search for and mark the items on their cards. The first to complete a line (horizontal) partially wins and th first to achieve a full Bingo wins.",
        },
        {
          question: "Can I play 'Like This' with friends and family?",
          answer:
            "Yes! 'Like This' is designed to be enjoyed both solo and with others. You can compete with friends and family to see who can complete the game first.",
        },
        {
          question: "What kind of items can I add in the game?",
          answer:
            "Anything you and your friends can find or do around you: from everyday objects to funny or imaginative challenges. You write the list.",
        },
         {
           question: "Is the app free?",
           answer:
             "'Like This' is free to use, with in-app purchase options for additional features and exclusive content.",
         },
           {
             question: "How can I report a problem or give feedback?",
             answer:
               "To report problems or give feedback, you can use the support section within the app or email us at info@yapplic.com. We love hearing your suggestions and working to improve the 'Like This' experience.",
           },
      ],
    },
    header: {
      headline: "Like This: Where Creativity Meets Adventure!",
      subtitle:
        "Turning Everyday Moments into Exciting Challenges. Unleash Your Imagination and Have Fun!",
      screenshots: [
        "/screenshots/3.png",
        "/screenshots/2.png",
        "/screenshots/1.png",
      ],
//       rewards: ["App of the year \n 1st", "Product of the day"],
      usersDescription: "100+ people already using the app",
      headlineMark: [0, 2],
    },
    pricing: {
      id: "pricing",
      title: "Pricing",
      subtitle: "Free to use",
      actionText: "Download the app",
      plans: [
        {
          title: "Free Plan",
          price: "Free",
          rows: ["Access all types of games"],
        },
        {
          title: "Pro",
          price: "5.99€/month",
          featured: true,
          rows: [
            "Limitless games",
            "Extra functionalities",
            "Remove Ads",
          ],
        },
        {
          title: "Premium Plan",
          price: "22.99€/month",
          rows: [
            "Customized UI Games",
            "Public Games",
            "Personalized App",
            "Exclusive content",
          ],
        },
      ],
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Someone Like This",
      description: "How Someone Like This collects, uses and protects your data.",
    },
    content: `# Privacy Policy

**Effective date:** 23 November 2026

## Who we are

Someone Like This (the "App") is a mobile game published by Yapplic ("we", "us"). We are the controller of the personal data described below. You can contact us at [info@yapplic.com](mailto:info@yapplic.com).

## What data we collect and why

**Account.** When you sign in with Apple or Google, we receive your email address, your name and your profile photo through Firebase Authentication. We use them to create and identify your account.

**Game content.** The games you create or join (items, cards, progress and results) are stored so you can play. Only the members of a game can see it. There are no public games and no chat.

**Background images.** If you upload a background image for a game, it is stored in Firebase Storage.

**Purchases.** Subscriptions and in-app purchases are managed with RevenueCat. Payment is processed by Apple or Google. We never receive your card details.

**Push notifications.** If you allow them, we use OneSignal to send you notifications about your games.

**Ads.** The free version shows ads served by Google AdMob, which may use your device's advertising identifier. In the European Economic Area we ask for your consent (GDPR) before showing personalised ads, and you can change your choice later.

**Analytics and crashes.** We use Firebase Analytics and Firebase Crashlytics to understand how the App is used and to fix errors. They may collect device information, app usage and crash reports.

## Legal bases

We process your data to provide the App (contract), to show ads and send optional notifications (your consent), and to keep the App secure and improve it (legitimate interest).

## Third parties

We share data only with the services that help us run the App. Each one has its own privacy policy:

- [Google and Firebase](https://policies.google.com/privacy) ([Firebase privacy](https://firebase.google.com/support/privacy))
- [Google AdMob](https://support.google.com/admob/answer/6128543)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [OneSignal](https://onesignal.com/privacy_policy)
- [Apple](https://www.apple.com/legal/privacy/) and [Google Play](https://policies.google.com/privacy) (sign-in and payments)

We do not sell your personal data. We may disclose data if the law requires it.

## Retention

We keep your account data while your account is active. When you delete your account, we delete the data linked to it as described in [Delete account](/delete-account). Some data may remain for a limited time in backups, or where the law requires us to keep it.

## Deleting your account

You can delete your account in the App (Profile, then Delete account) or by following the steps on [/delete-account](/delete-account).

## Your rights

If you are in the EEA or the UK, you have the right to access, correct, delete, restrict or port your data, and to object to its processing or withdraw your consent at any time. To use these rights, write to [info@yapplic.com](mailto:info@yapplic.com). You can also complain to your local data protection authority.

## Children

The App is not intended for children under 13, and we do not knowingly collect their data. If you think a child has given us personal data, contact us and we will delete it.

## Changes

We may update this policy. The effective date at the top shows the latest version. If a change is important, we will tell you in the App.

## Contact

Questions about privacy: [info@yapplic.com](mailto:info@yapplic.com).
`,
  },
  support: {
    seo: {
      title: "Support - Someone Like This",
      description: "Help and contact for Someone Like This.",
    },
    content: `# Support

Need help with Someone Like This? Write to us at [info@yapplic.com](mailto:info@yapplic.com) and we will get back to you as soon as we can.

## Frequently asked questions

### How do I join a game from a link?

Tap the invitation link you received. If the app is installed, it opens the game. If it is not installed, install it from the App Store or Google Play and then tap the link again.

### How do I join a game with a code?

Open the app and enter the 6-letter code that came with the invitation.

### The link does not open the app

Open the link in your phone's browser (Safari or Chrome) instead of inside another app, then tap "I already have the app". Make sure the app is installed and up to date. If it still fails, enter the 6-letter code in the app.

### How do I restore my purchases?

Sign in with the same Apple or Google account you used to buy, and use the restore purchases option in the app. If your subscription does not appear, email us.

### How do I delete my account?

Follow the steps on [Delete account](/delete-account).

### How do I report a problem?

Email [info@yapplic.com](mailto:info@yapplic.com) with a short description, your device model and the app version.

## More information

- [Privacy policy](/privacy-policy)
- [Terms and conditions](/terms-and-conditions)
`,
  },
  deleteAccount: {
    seo: {
      title: "Delete account - Someone Like This",
      description: "How to delete your Someone Like This account and data.",
    },
    content: `# Delete your account

You can delete your Someone Like This account and the data linked to it at any time.

## In the app

1. Open Someone Like This and sign in.
2. Go to your profile.
3. Tap **Delete account** and confirm.

## If you cannot access the app

Email [info@yapplic.com](mailto:info@yapplic.com) from the address linked to your account, with the subject "Delete my account". We may ask you to confirm your identity. We will reply within 30 days.

## What is deleted

- Your account (email, name, profile photo and sign-in link to Apple or Google).
- Your user data stored in our database (Firestore) and the game data linked to your account.
- Background images you uploaded.

## What may be kept

- Purchase records held by Apple, Google and RevenueCat, according to their own policies and legal obligations.
- Aggregated and anonymous analytics, which no longer identify you.
- Backups, until they are overwritten, and data we must keep by law.

Deleting your account does not cancel an active subscription. Cancel it in your App Store or Google Play subscription settings.

See also our [privacy policy](/privacy-policy).
`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Mobile App Landing Template",
      description: "Cookies Policy",
    },
    content: `# Cookies Policy

**Effective Date:** 17/12/2024

## Introduction

This Cookies Policy explains how Yapplic ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, Like This (the "App"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:

Yapplic
Jordi Toda
info@yapplic.com
`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and conditions - Mobile App Landing Template",
      description: "Terms and conditions",
    },
    content: `# Terms and Conditions

**Effective Date:** 17/12/2024

## Introduction

Welcome to Like This (the "App"). These Terms and Conditions ("Terms") govern your use of the App provided by Yapplic ("we," "our," or "us"). By accessing or using our App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.

## Use of the App

### 1. Eligibility
To use our App, you must be at least [Insert Age] years old and capable of entering into a legally binding agreement. By using the App, you represent and warrant that you meet these eligibility requirements.

### 2. User Accounts
- **Registration:** You may be required to create an account to access certain features of the App. You must provide accurate and complete information when creating your account.
- **Account Security:** You are responsible for maintaining the confidentiality of your account login details and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
- **Account Termination:** We reserve the right to terminate or suspend your account at any time, without notice, for any reason, including if we believe you have violated these Terms.

### 3. Prohibited Conduct
You agree not to:
- Use the App for any illegal or unauthorized purpose.
- Interfere with or disrupt the operation of the App or the servers or networks used to make the App available.
- Upload or transmit any viruses, malware, or other harmful code.
- Attempt to gain unauthorized access to any part of the App or to other accounts, systems, or networks connected to the App.

## Intellectual Property

### 1. Ownership
All content and materials available on the App, including but not limited to text, graphics, logos, and software, are the property of [Your Company Name] or its licensors and are protected by intellectual property laws.

### 2. License
We grant you a limited, non-exclusive, non-transferable license to access and use the App for your personal, non-commercial use. This license is subject to your compliance with these Terms.

### 3. Restrictions
You may not:
- Reproduce, distribute, modify, or create derivative works of any content or materials on the App without our prior written consent.
- Use any data mining, robots, or similar data gathering or extraction methods on the App.

## Disclaimers and Limitation of Liability

### 1. Disclaimers
The App is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content available on or through the App. We disclaim all warranties, whether express or implied, including any warranties of merchantability, fitness for a particular purpose, and non-infringement.

### 2. Limitation of Liability
To the fullest extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
- Your use or inability to use the App;
- Any unauthorized access to or use of our servers and/or any personal information stored therein;
- Any bugs, viruses, or other harmful code that may be transmitted to or through the App;
- Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the App.

## Indemnification

You agree to indemnify, defend, and hold harmless [Your Company Name], its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the App or your violation of these Terms.

## Governing Law

These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in [Your Jurisdiction] to resolve any legal matter arising from these Terms.

## Changes to These Terms

We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Terms.

## Contact Us

If you have any questions or concerns about these Terms, please contact us at:

Yapplic
Jordi Toda
info@yapplic.com
`,
  },
};

export default templateConfig;
