import { useEffect, useState } from "react";
import { getMobileOperatingSystem } from "utils/common";
import type { TemplateConfig } from "utils/configType";

interface Props {
  config: TemplateConfig;
}

type Lang = "ca" | "es" | "en";

const TEXTS: Record<
  Lang,
  { title: string; about: string; open: string; help: string; codeLabel: string; copy: string; copied: string }
> = {
  ca: {
    title: "T'han convidat a una partida",
    about:
      "Someone Like This és un joc on tu i els teus amics busqueu objectes de la vida real.",
    open: "Ja tinc l'app: obrir la partida",
    help: "Després d'instal·lar-la, torna a tocar l'enllaç o entra el codi de 6 lletres que t'han enviat.",
    codeLabel: "Codi de la partida",
    copy: "Copiar codi",
    copied: "Copiat!",
  },
  es: {
    title: "Te han invitado a una partida",
    about:
      "Someone Like This es un juego en el que tú y tus amigos buscáis objetos de la vida real.",
    open: "Ya tengo la app: abrir la partida",
    help: "Después de instalarla, vuelve a tocar el enlace o introduce el código de 6 letras que te han enviado.",
    codeLabel: "Código de la partida",
    copy: "Copiar código",
    copied: "¡Copiado!",
  },
  en: {
    title: "You've been invited to a game",
    about:
      "Someone Like This is a game where you and your friends hunt for real-life items.",
    open: "I already have the app: open the game",
    help: "After installing it, tap the link again or enter the 6-letter code you were sent.",
    codeLabel: "Game code",
    copy: "Copy code",
    copied: "Copied!",
  },
};

const CODE_RE = /^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{6}$/;

function detectLang(): Lang {
  const lang = (navigator.language || "en").toLowerCase();
  if (lang.startsWith("ca")) return "ca";
  if (lang.startsWith("es")) return "es";
  return "en";
}

function InvitePage({ config }: Props) {
  const { appStoreLink, googlePlayLink } = config;
  const [lang] = useState<Lang>(detectLang);
  const [params] = useState(() => {
    const q = new URLSearchParams(window.location.search);
    const raw = q.get("code")?.trim().toUpperCase();
    return {
      // El codi només es mostra si és vàlid.
      code: raw && CODE_RE.test(raw) ? raw : undefined,
      gameId: q.get("gameId")?.trim() || undefined,
      search: window.location.search,
    };
  });
  const { code, gameId } = params;
  const [copied, setCopied] = useState(false);
  const [os, setOs] = useState<string | undefined>();
  const t = TEXTS[lang];

  useEffect(() => {
    setOs(getMobileOperatingSystem());
    document.documentElement.lang = lang;
  }, [lang]);

  // Mateixa URL i mateixos paràmetres (format nou ?code= o antic ?gameId=).
  const openUrl =
    code || gameId ? `/someonelikethis${params.search}` : undefined;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code!);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* sense portapapers: el codi continua visible */
    }
  };

  // El sistema detectat va primer i destacat; l'altre es mostra sempre, atenuat.
  const stores = [
    { id: "ios", href: appStoreLink, img: "/stores/app-store.svg", alt: "Download on the App Store" },
    { id: "android", href: googlePlayLink, img: "/stores/google-play.svg", alt: "Get it on Google Play" },
  ];
  if (os === "android") stores.reverse();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-10 text-center">
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        <img src="/logo.svg" alt="Someone Like This" className="h-20 w-20" />
        <h1 className="text-3xl font-bold">{t.title}</h1>
        <p className="opacity-80">{t.about}</p>

        <div className="flex flex-col items-center gap-3">
          {stores.map(({ id, href, img, alt }) => (
            <a
              key={id}
              href={href}
              className={
                os === id
                  ? "rounded-lg ring-2 ring-primary ring-offset-2 ring-offset-base-100"
                  : os
                    ? "opacity-70"
                    : ""
              }
            >
              <img className="h-14" src={img} alt={alt} />
            </a>
          ))}
        </div>

        {code && (
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm opacity-70">{t.codeLabel}</span>
            <span className="text-5xl font-mono font-bold tracking-widest">
              {code}
            </span>
            <button type="button" className="btn btn-outline btn-sm" onClick={copyCode}>
              {copied ? t.copied : t.copy}
            </button>
          </div>
        )}

        {openUrl && (
          <a href={openUrl} className="btn btn-primary w-full">
            {t.open}
          </a>
        )}

        <p className="text-sm opacity-70">{t.help}</p>
      </div>
    </main>
  );
}

export default InvitePage;
