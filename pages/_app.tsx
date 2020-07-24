import { AppProps } from 'next/app';
import Head from 'next/head';
import '../scss/critical.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Movie app</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
