import Head from 'next/head';
import config from '../config';
import { Search } from '../components/search';

export default function Home({ latestFilm, nowPlaying }): JSX.Element {
  return (
    <>
      <Head>
        <title>Movie App - Home</title>
      </Head>

      <h1 data-testid="title">The Movie App</h1>

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
