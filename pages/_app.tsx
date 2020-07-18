import { AppProps } from "next/app";
import Head from "../components/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
