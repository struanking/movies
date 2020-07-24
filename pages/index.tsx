import Head from 'next/head';
import { useSession } from 'next-auth/client';
import config from '../config';
import { Search } from '../components/search';

export default function Home({ latestFilm, nowPlaying }): JSX.Element {
  const [session, loading] = useSession();
  return (
    <>
      <Head>
        <title>Movie App - Home</title>
      </Head>

      <h1 data-testid="title">Welcome to The Movie App, 1</h1>
      <button type="button">Test button</button>
      <p>
        {!session && (
          <>
            Not signed in <br />
            <a href="/api/auth/signin">Sign in</a>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <a href="/api/auth/signout">Sign out</a>
          </>
        )}
      </p>
      <Search />
      <p>
        Latest Film
        <br />
        <code>{JSON.stringify(latestFilm, null, '\t')}</code>
      </p>

      <ul>
        {nowPlaying?.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </>
  );
}

function apiRequest(path) {
  return `${config.TMDB_API_ROOT}${path}?api_key=${process.env.TMDB_API_KEY}`;
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(apiRequest('/movie/latest'));
  const latestFilm = await res.json();

  const res2 = await fetch(apiRequest('/movie/now_playing'));
  const nowPlaying = await res2.json();

  return {
    props: {
      latestFilm,
      nowPlaying: nowPlaying.results,
    },
  };
}
