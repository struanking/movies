import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../scss/critical.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Movie app</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Header />
      <main tabIndex={-1} id="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
