import '../styles/globals.css'
import Script from 'next/script'
import { Outfit } from '@next/font/google';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from "react";
import * as gtag from "../lib/gtag"

const outfit = Outfit({
  subsets: ['latin'],
  weights: [500, 700],
});

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <main className={outfit.className}>
      <Head>
        <title>Teameal</title>
        <meta name="qui facilite la découverte de restaurants originaux, la création de groupes de repas et la rencontre de nouvelles personnes partageant votre passion pour la gastronomie" content="Teameal" />
        <link rel="icon" href="favicon.svg" />
      </Head>

      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-0DBZKY4SFQ"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0DBZKY4SFQ', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

      <Component {...pageProps} />
    </main>
  );
}


export default App;
