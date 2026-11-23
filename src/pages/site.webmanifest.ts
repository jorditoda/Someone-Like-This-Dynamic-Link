import { SITE } from "../site";

export function GET() {
  return new Response(
    JSON.stringify({
      name: SITE.name,
      short_name: SITE.name,
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      theme_color: "#eee9fb",
      background_color: "#eee9fb",
      display: "browser",
    }),
    { headers: { "Content-Type": "application/manifest+json" } },
  );
}
