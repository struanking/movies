import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <div className="container">
      <Head>
        <title>Movie App</title>
      </Head>

      <main>
        <h1 data-testid="title">Welcome to Movie App</h1>
        <button type="button">Test button</button>
      </main>
    </div>
  );
}
