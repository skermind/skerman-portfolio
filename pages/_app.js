import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Daniel Skerman | Portfolio</title>
        <meta name="description" content="Portfolio of Daniel Skerman – Data Engineer & Mathematician" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Daniel Skerman | Portfolio" />
        <meta property="og:description" content="Portfolio of Daniel Skerman – Data Engineer & Mathematician" />
        <meta property="og:url" content="https://danielskerman.com" />
        <meta property="og:image" content="https://danielskerman.com/api/og?title=Daniel%20Skerman&subtitle=Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daniel Skerman | Portfolio" />
        <meta name="twitter:description" content="Portfolio of Daniel Skerman – Data Engineer & Mathematician" />
        <meta name="twitter:image" content="https://danielskerman.com/api/og?title=Daniel%20Skerman&subtitle=Portfolio" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA / Android */}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}