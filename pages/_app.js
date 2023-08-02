import "@/styles/globals.scss";
import Layout from "./components/Layout";
import Head from "next/head";
import { ApiDataProvider } from "./context/DataApi";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          next-tao
        </title>
        <link rel="icon" href="/icon-tao.ico" />
      </Head>
      <Layout>
        <ApiDataProvider>
        <Component {...pageProps} />
        </ApiDataProvider>
      </Layout>
    </>
  );
}
