import Layout from "../components/Layout";
import "../styles/globals.css";

import React from "react";
import Head from "../components/Head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
