import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { UiProvider } from "../context/ui-context";
import MenuPopup from "../components/menu/MenuPopup";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eatary</title>
        <meta
          name="description"
          content="This is a desription for My Next App"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UiProvider>
        <Layout>
          <Component {...pageProps} />
          <MenuPopup />
        </Layout>
      </UiProvider>
    </>
  );
}

export default MyApp;
