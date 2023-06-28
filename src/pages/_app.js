import "../styles/globals.css";
import Script from "next/script";
import { Outfit } from "@next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import TagManager from "gtm-for-react";

const outfit = Outfit({
  subsets: ["latin"],
  weights: [500, 700],
});

const tagManagerArgs = {
  gtmId: "GTM-TJ6FHJD",
};

function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <main className={outfit.className}>
      <Head>
        <title>Teameal</title>
        <meta
          name="Teameal"
          content="Teameal est une plateforme qui vous facilite la découverte d'expérience culinaire ! Matchez avec des utilisateurs pour créer de groupes d'évènements et osez les rencontres avec de nouvelles personnes autour du partage de votre passion pour la gastronomie."
        />
        <link rel="icon" href="favicon.svg" />
        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
