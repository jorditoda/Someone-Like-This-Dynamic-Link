import AppBanner from "@components/appBanner";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import Markdown from "react-markdown";
import { ConfigContext } from "utils/configContext";
import type { TemplateConfig } from "utils/configType";

interface Props {
  config: TemplateConfig;
  content: string;
}

/** Pàgina de text en Markdown (suport, esborrat del compte...). */
function ContentPage({ config, content }: Props) {
  return (
    <ConfigContext.Provider value={config}>
      <main>
        <Navbar />
        <section className="max-w-screen-lg mx-auto py-4 px-4 md:py-16">
          <Markdown className="prose">{content}</Markdown>
        </section>
        <AppBanner />
        <Footer />
      </main>
    </ConfigContext.Provider>
  );
}

export default ContentPage;
