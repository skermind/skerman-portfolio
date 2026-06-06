import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Daniel Skerman | Portfolio</title>
        <meta name="description" content="Portfolio of Daniel Skerman – Data Engineer & Mathematician" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
