import type { Lang } from "../i18n";

/**
 * Ocasions. Per afegir-ne una de nova només cal afegir un objecte aquí:
 * - `card` surt a la portada (sempre).
 * - `pages` (opcional) genera la pàgina d'ocasió en cada idioma, amb la seva URL.
 *   Si una ocasió no té `pages`, la targeta de la portada no enllaça enlloc.
 */
export type OccasionText = {
  card: { title: string; examples: string[] };
};

export type OccasionPage = {
  slug: string;
  seoTitle: string; // <= 60
  seoDescription: string; // <= 155
  h1: string;
  intro: string[];
  situations: string[]; // 15-20, originals
  tip: string;
};

export type Occasion = {
  id: string;
  text: Record<Lang, OccasionText>;
  pages?: Record<Lang, OccasionPage>;
};

export const OCCASIONS: Occasion[] = [
  {
    id: "christmas",
    text: {
      en: { card: { title: "Christmas dinner", examples: ["Someone falls asleep on the sofa", "A cousin arrives late", "Too much nougat", "The same joke again"] } },
      es: { card: { title: "Cena de Navidad", examples: ["Alguien se duerme en el sofá", "Un primo llega tarde", "Sobran turrones", "El mismo chiste de siempre"] } },
      ca: { card: { title: "Sopar de Nadal", examples: ["Algú s'adorm al sofà", "Un cosí arriba tard", "Sobren torrons", "El mateix acudit de sempre"] } },
    },
    pages: {
      en: {
        slug: "christmas-dinner-bingo",
        seoTitle: "Christmas dinner bingo: free game for the family",
        seoDescription:
          "Turn Christmas dinner into a game. 18 funny situations to copy and a free Christmas dinner template to play with the family.",
        h1: "Christmas dinner bingo",
        intro: [
          "Every family has its Christmas rituals: the story everyone has heard ten times, the relative who always brings too much food and the debate nobody can win. A Christmas dinner bingo turns those rituals into a game the whole table can play.",
          "Write down what you are sure will happen, share the link and let everyone mark the moments as they happen. The first to complete a line or the whole card wins. It works for kids, grandparents and the friend who is only there for the dessert.",
        ],
        situations: [
          "Someone falls asleep on the sofa",
          "The first toast is made with an empty glass",
          "A cousin arrives late with a bag of gifts",
          "Someone says “I could not eat another bite” and eats dessert",
          "The same family story is told again",
          "A kid opens a gift before the right moment",
          "Someone asks who made the soup",
          "A phone call from a relative who could not come",
          "The group photo needs three attempts",
          "Someone hides the last piece of nougat",
          "A grown-up loses at a board game to a ten-year-old",
          "A carol starts and only half the table joins in",
          "The oven timer goes off at the worst moment",
          "Someone wears a Christmas sweater on purpose",
          "A debate about the right way to cook the main dish",
          "Leftovers are packed for everyone",
          "A pet steals something from the table",
          "Someone says “this is the best Christmas ever”",
        ],
        tip: "Tip: keep a few easy squares and a few rare ones, so the game lasts the whole dinner.",
      },
      es: {
        slug: "bingo-cena-navidad",
        seoTitle: "Bingo cena de Navidad: juego gratis en familia",
        seoDescription:
          "Convierte la cena de Navidad en un juego. 18 situaciones divertidas para copiar y una plantilla gratis de Cena de Navidad para jugar en familia.",
        h1: "Bingo para la cena de Navidad",
        intro: [
          "Cada familia tiene sus rituales de Navidad: la anécdota que todos han oído diez veces, el pariente que siempre trae demasiada comida y el debate que nadie gana. Un bingo de Navidad convierte esos rituales en un juego para toda la mesa.",
          "Escribe lo que seguro que va a pasar, comparte el enlace y deja que cada uno marque las situaciones cuando ocurran. Quien complete antes una línea o el cartón entero, gana. Funciona con niños, abuelos y el amigo que solo viene por el postre.",
        ],
        situations: [
          "Alguien se duerme en el sofá",
          "El primer brindis se hace con la copa vacía",
          "Un primo llega tarde con una bolsa de regalos",
          "Alguien dice “no puedo más” y se come el postre",
          "Se cuenta otra vez la misma anécdota familiar",
          "Un niño abre un regalo antes de tiempo",
          "Alguien pregunta quién ha hecho la sopa",
          "Llamada de un familiar que no ha podido venir",
          "La foto de grupo necesita tres intentos",
          "Alguien esconde el último trozo de turrón",
          "Un adulto pierde a un juego de mesa contra un niño de diez años",
          "Empieza un villancico y solo canta media mesa",
          "Suena el temporizador del horno en el peor momento",
          "Alguien lleva un jersey navideño a propósito",
          "Debate sobre cómo se cocina bien el plato principal",
          "Se reparten tápers con las sobras",
          "Una mascota roba algo de la mesa",
          "Alguien dice “esta es la mejor Navidad”",
        ],
        tip: "Consejo: mezcla casillas fáciles con otras raras para que el juego dure toda la cena.",
      },
      ca: {
        slug: "bingo-sopar-de-nadal",
        seoTitle: "Bingo sopar de Nadal: joc gratis en família",
        seoDescription:
          "Converteix el sopar de Nadal en un joc. 18 situacions divertides per copiar i una plantilla gratis de Sopar de Nadal per jugar en família.",
        h1: "Bingo per al sopar de Nadal",
        intro: [
          "Cada família té els seus rituals de Nadal: l'anècdota que tothom ha sentit deu vegades, el familiar que sempre porta massa menjar i el debat que ningú guanya. Un bingo de Nadal converteix aquests rituals en un joc per a tota la taula.",
          "Escriu el que segur que passarà, comparteix l'enllaç i deixa que cadascú marqui les situacions quan passin. Qui completa abans una línia o el cartó sencer, guanya. Funciona amb nens, avis i l'amic que només ve pel postre.",
        ],
        situations: [
          "Algú s'adorm al sofà",
          "El primer brindis es fa amb la copa buida",
          "Un cosí arriba tard amb una bossa de regals",
          "Algú diu “no puc més” i es menja el postre",
          "Es torna a explicar la mateixa anècdota familiar",
          "Un nen obre un regal abans d'hora",
          "Algú pregunta qui ha fet la sopa",
          "Trucada d'un familiar que no ha pogut venir",
          "La foto de grup necessita tres intents",
          "Algú amaga l'últim tros de torró",
          "Un adult perd a un joc de taula contra un nen de deu anys",
          "Comença una nadala i només canta mitja taula",
          "Sona el temporitzador del forn al pitjor moment",
          "Algú porta un jersei de Nadal a propòsit",
          "Debat sobre com es cuina bé el plat principal",
          "Es reparteixen tuppers amb les sobres",
          "Una mascota roba alguna cosa de la taula",
          "Algú diu “aquest és el millor Nadal”",
        ],
        tip: "Consell: barreja caselles fàcils amb d'altres de rares perquè el joc duri tot el sopar.",
      },
    },
  },
  {
    id: "newyear",
    text: {
      en: { card: { title: "New Year's Eve", examples: ["Someone loses count of the grapes", "A toast at the wrong time", "The countdown starts early", "Nobody finds the lighter"] } },
      es: { card: { title: "Nochevieja", examples: ["Alguien pierde la cuenta de las uvas", "Un brindis a destiempo", "La cuenta atrás empieza pronto", "Nadie encuentra el mechero"] } },
      ca: { card: { title: "Cap d'Any", examples: ["Algú perd el compte del raïm", "Un brindis a destemps", "El compte enrere comença aviat", "Ningú troba el llumí"] } },
    },
    pages: {
      en: {
        slug: "new-years-eve-bingo",
        seoTitle: "New Year's Eve bingo: game for your party",
        seoDescription:
          "Play a bingo at your New Year's Eve party. 18 situations to copy, from the countdown to the first toast, and an app to play together.",
        h1: "New Year's Eve bingo",
        intro: [
          "New Year's Eve is full of things you can predict: the countdown that starts too early, the resolutions nobody will keep and the toast that someone always forgets. A bingo makes the wait until midnight a lot more fun.",
          "Create a game with the moments you expect, share the link with your guests and let everyone mark what happens. It works at a big party, at a dinner with friends or on a video call with the family far away.",
        ],
        situations: [
          "The countdown starts a minute early",
          "Someone loses count of the grapes",
          "A toast is made with the wrong glass",
          "Somebody cannot find the bottle opener",
          "A guest announces a very ambitious resolution",
          "The group hug lasts longer than planned",
          "Someone sends a message at 00:00 and it does not arrive",
          "A song everyone knows starts and the whole room sings",
          "A guest falls asleep before midnight",
          "Somebody asks what time it is every five minutes",
          "The photo of the year is blurry",
          "Confetti ends up in the food",
          "Someone says “this year I will start the gym”",
          "A guest arrives at 23:58",
          "A neighbour's fireworks start too soon",
          "Someone gives a speech nobody asked for",
          "The party moves to the kitchen",
          "Someone says “let's do this again next year”",
        ],
        tip: "Tip: add a few squares for after midnight, so the game keeps going into the new year.",
      },
      es: {
        slug: "bingo-nochevieja",
        seoTitle: "Bingo de Nochevieja: juego para tu fiesta",
        seoDescription:
          "Juega a un bingo en tu fiesta de Nochevieja. 18 situaciones para copiar, de las uvas al primer brindis, y una app para jugar juntos.",
        h1: "Bingo de Nochevieja",
        intro: [
          "La Nochevieja está llena de cosas que se pueden adivinar: la cuenta atrás que empieza demasiado pronto, los propósitos que nadie cumplirá y el brindis que siempre alguien olvida. Un bingo hace la espera hasta medianoche mucho más divertida.",
          "Crea una partida con las situaciones que esperas, comparte el enlace con tus invitados y deja que cada uno marque lo que pasa. Funciona en una gran fiesta, en una cena con amigos o en una videollamada con la familia que está lejos.",
        ],
        situations: [
          "La cuenta atrás empieza un minuto antes",
          "Alguien pierde la cuenta de las uvas",
          "Se brinda con la copa equivocada",
          "Nadie encuentra el abrebotellas",
          "Un invitado anuncia un propósito muy ambicioso",
          "El abrazo de grupo dura más de lo previsto",
          "Alguien manda un mensaje a las 00:00 y no llega",
          "Suena una canción que todos conocen y canta toda la sala",
          "Un invitado se duerme antes de medianoche",
          "Alguien pregunta la hora cada cinco minutos",
          "La foto del año sale movida",
          "El confeti acaba en la comida",
          "Alguien dice “este año me apunto al gimnasio”",
          "Un invitado llega a las 23:58",
          "Los fuegos artificiales de un vecino empiezan antes de tiempo",
          "Alguien da un discurso que nadie ha pedido",
          "La fiesta se traslada a la cocina",
          "Alguien dice “el año que viene lo repetimos”",
        ],
        tip: "Consejo: añade unas casillas para después de medianoche y el juego seguirá en el año nuevo.",
      },
      ca: {
        slug: "bingo-cap-d-any",
        seoTitle: "Bingo de Cap d'Any: joc per a la teva festa",
        seoDescription:
          "Juga a un bingo a la teva festa de Cap d'Any. 18 situacions per copiar, del raïm al primer brindis, i una app per jugar junts.",
        h1: "Bingo de Cap d'Any",
        intro: [
          "El Cap d'Any està ple de coses que es poden endevinar: el compte enrere que comença massa aviat, els propòsits que ningú complirà i el brindis que sempre algú oblida. Un bingo fa l'espera fins a mitjanit molt més divertida.",
          "Crea una partida amb les situacions que esperes, comparteix l'enllaç amb els convidats i deixa que cadascú marqui el que passa. Funciona en una gran festa, en un sopar amb amics o en una videotrucada amb la família que és lluny.",
        ],
        situations: [
          "El compte enrere comença un minut abans",
          "Algú perd el compte del raïm",
          "Es brinda amb la copa equivocada",
          "Ningú troba el tirabuixó",
          "Un convidat anuncia un propòsit molt ambiciós",
          "L'abraçada de grup dura més del previst",
          "Algú envia un missatge a les 00:00 i no arriba",
          "Sona una cançó que tothom coneix i canta tota la sala",
          "Un convidat s'adorm abans de mitjanit",
          "Algú pregunta l'hora cada cinc minuts",
          "La foto de l'any surt moguda",
          "El confeti acaba al menjar",
          "Algú diu “aquest any m'apunto al gimnàs”",
          "Un convidat arriba a les 23:58",
          "Els focs artificials d'un veí comencen abans d'hora",
          "Algú fa un discurs que ningú ha demanat",
          "La festa es trasllada a la cuina",
          "Algú diu “l'any que ve ho repetim”",
        ],
        tip: "Consell: afegeix unes caselles per a després de mitjanit i el joc continuarà a l'any nou.",
      },
    },
  },
  {
    id: "wedding",
    text: {
      en: { card: { title: "Weddings", examples: ["The best man's speech runs long", "Someone cries at the vows", "The dance floor stays empty at first", "A guest catches the bouquet"] } },
      es: { card: { title: "Bodas", examples: ["El discurso del padrino se alarga", "Alguien llora con los votos", "La pista de baile empieza vacía", "Una invitada coge el ramo"] } },
      ca: { card: { title: "Casaments", examples: ["El discurs del padrí s'allarga", "Algú plora amb els vots", "La pista de ball comença buida", "Una convidada agafa el ram"] } },
    },
    pages: {
      en: {
        slug: "wedding-bingo",
        seoTitle: "Wedding bingo: fun game for guests",
        seoDescription:
          "A wedding bingo your guests play on their phones. 18 situations to copy, from the speeches to the first dance, and an app to share it.",
        h1: "Wedding bingo for your guests",
        intro: [
          "Weddings are full of moments you can see coming: the speech that runs long, the tears at the vows and the dance floor that stays empty until the right song. A wedding bingo gives guests something to look for between the courses.",
          "Make a game with the moments you expect, share the link or the 6-letter code on the table cards and let every guest play on their phone. It is a good way to get tables who do not know each other talking.",
        ],
        situations: [
          "Someone cries during the vows",
          "A speech runs longer than planned",
          "A guest arrives after the ceremony starts",
          "The first dance gets a round of applause",
          "A child falls asleep under a table",
          "Someone catches the bouquet",
          "A guest takes a selfie with the couple",
          "The dance floor is empty at first",
          "Someone tells an embarrassing story about the groom",
          "The cake is cut with a very serious face",
          "A guest loses a shoe",
          "A toast is made and the glass is empty",
          "An uncle dances like nobody is watching",
          "Someone asks the DJ for a song",
          "The photographer asks everyone to move again",
          "A guest says “I do not know anyone here”",
          "Somebody takes the favours home twice",
          "The last song empties the room",
        ],
        tip: "Tip: print the 6-letter code on the table cards so nobody has to look for a link.",
      },
      es: {
        slug: "bingo-boda",
        seoTitle: "Bingo de boda: juego divertido para invitados",
        seoDescription:
          "Un bingo de boda que tus invitados juegan desde el móvil. 18 situaciones para copiar, de los discursos al primer baile, y una app para compartirlo.",
        h1: "Bingo de boda para tus invitados",
        intro: [
          "Las bodas están llenas de momentos que se ven venir: el discurso que se alarga, las lágrimas con los votos y la pista de baile vacía hasta que suena la canción adecuada. Un bingo de boda da a los invitados algo que buscar entre plato y plato.",
          "Crea una partida con los momentos que esperas, comparte el enlace o el código de 6 letras en las tarjetas de las mesas y deja que cada invitado juegue desde su móvil. Es una buena forma de que hablen mesas que no se conocen.",
        ],
        situations: [
          "Alguien llora con los votos",
          "Un discurso dura más de lo previsto",
          "Un invitado llega con la ceremonia empezada",
          "El primer baile recibe un aplauso",
          "Un niño se duerme debajo de una mesa",
          "Alguien coge el ramo",
          "Un invitado se hace un selfi con los novios",
          "La pista de baile empieza vacía",
          "Alguien cuenta una anécdota vergonzosa del novio",
          "Se corta la tarta con cara muy seria",
          "Un invitado pierde un zapato",
          "Se brinda y la copa está vacía",
          "Un tío baila como si nadie mirase",
          "Alguien le pide una canción al DJ",
          "El fotógrafo pide que todos se muevan otra vez",
          "Un invitado dice “aquí no conozco a nadie”",
          "Alguien se lleva dos veces el detalle de la boda",
          "La última canción vacía la sala",
        ],
        tip: "Consejo: imprime el código de 6 letras en las tarjetas de las mesas y nadie tendrá que buscar un enlace.",
      },
      ca: {
        slug: "bingo-casament",
        seoTitle: "Bingo de casament: joc divertit per als convidats",
        seoDescription:
          "Un bingo de casament que els teus convidats juguen des del mòbil. 18 situacions per copiar, dels discursos al primer ball, i una app per compartir-lo.",
        h1: "Bingo de casament per als teus convidats",
        intro: [
          "Els casaments estan plens de moments que es veuen venir: el discurs que s'allarga, les llàgrimes amb els vots i la pista de ball buida fins que sona la cançó adequada. Un bingo de casament dona als convidats alguna cosa a buscar entre plat i plat.",
          "Crea una partida amb els moments que esperes, comparteix l'enllaç o el codi de 6 lletres a les targetes de les taules i deixa que cada convidat jugui des del mòbil. És una bona manera que parlin taules que no es coneixen.",
        ],
        situations: [
          "Algú plora amb els vots",
          "Un discurs dura més del previst",
          "Un convidat arriba amb la cerimònia començada",
          "El primer ball rep un aplaudiment",
          "Un nen s'adorm sota una taula",
          "Algú agafa el ram",
          "Un convidat es fa una selfie amb els nuvis",
          "La pista de ball comença buida",
          "Algú explica una anècdota vergonyosa del nuvi",
          "Es talla el pastís amb cara molt seriosa",
          "Un convidat perd una sabata",
          "Es brinda i la copa és buida",
          "Un oncle balla com si ningú mirés",
          "Algú demana una cançó al DJ",
          "El fotògraf demana que tothom es mogui un altre cop",
          "Un convidat diu “aquí no conec ningú”",
          "Algú s'emporta dues vegades el detall del casament",
          "L'última cançó buida la sala",
        ],
        tip: "Consell: imprimeix el codi de 6 lletres a les targetes de les taules i ningú haurà de buscar un enllaç.",
      },
    },
  },
  {
    id: "trips",
    text: {
      en: { card: { title: "Trips", examples: ["Someone forgets the charger", "A wrong turn on the road", "The same song on repeat", "A photo of the sunset"] } },
      es: { card: { title: "Viajes", examples: ["Alguien olvida el cargador", "Nos equivocamos de salida", "La misma canción en bucle", "Foto de la puesta de sol"] } },
      ca: { card: { title: "Viatges", examples: ["Algú oblida el carregador", "Ens equivoquem de sortida", "La mateixa cançó en bucle", "Foto de la posta de sol"] } },
    },
  },
  {
    id: "match",
    text: {
      en: { card: { title: "Matches", examples: ["A goal is disallowed", "The commentator says “incredible”", "Someone shouts at the screen", "A snack runs out"] } },
      es: { card: { title: "Partidos", examples: ["Anulan un gol", "El comentarista dice “increíble”", "Alguien grita a la pantalla", "Se acaban las patatas"] } },
      ca: { card: { title: "Partits", examples: ["S'anul·la un gol", "El comentarista diu “increïble”", "Algú crida a la pantalla", "S'acaben les patates"] } },
    },
  },
  {
    id: "series",
    text: {
      en: { card: { title: "Series nights", examples: ["Someone guesses the twist", "A cliffhanger ends the episode", "A phone check mid-scene", "Someone asks “who is that?”"] } },
      es: { card: { title: "Noches de series", examples: ["Alguien adivina el giro", "Un final de episodio deja con la intriga", "Alguien mira el móvil en plena escena", "Alguien pregunta “¿quién es ese?”"] } },
      ca: { card: { title: "Nits de sèries", examples: ["Algú endevina el gir", "Un final d'episodi deixa amb la intriga", "Algú mira el mòbil en plena escena", "Algú pregunta “qui és aquest?”"] } },
    },
  },
];

export function occasionsWithPages(lang: Lang) {
  return OCCASIONS.filter((o) => o.pages).map((o) => ({ id: o.id, page: o.pages![lang] }));
}
