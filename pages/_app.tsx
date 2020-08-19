import { AppProps } from "next/app";
import "../styles/index.css";

import Head from "../components/head";
import { GlobalCSS, GlobalStyle } from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyle />
      <GlobalCSS>
        <Head title="Dennis Stassen" />
        <Component {...pageProps} />
      </GlobalCSS>
    </div>
  );
}

export default MyApp;
