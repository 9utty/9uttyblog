import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <ThemeProvider theme={original}>
        <div style={{ height: "100vh" }}>
          <Component {...pageProps} />
          <Layout />
        </div>
      </ThemeProvider>
    </>
  );
}
