import Head from 'next/head';
import config from '../config';
import { Grid } from '../components/grid';
import { Movie } from '../components/movie';
import { Search } from '../components/search';

export default function Home({ latestFilm, nowPlaying, config }): JSX.Element {
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

      <h2>Now playing</h2>
      <Grid>
        {nowPlaying?.map((film) => (
          <Movie key={film.id} {...film} />
        ))}
      </Grid>
    </>
  );
}

function apiRequest(path) {
  return `${config.TMDB_API_ROOT}${path}?api_key=${process.env.TMDB_API_KEY}`;
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // TODO run requests in parallel
  const res = await fetch(apiRequest('/movie/latest'));
  const latestFilm = await res.json();

  const res2 = await fetch(apiRequest('/movie/now_playing'));
  const nowPlaying = await res2.json();

  // const conf = await fetch(apiRequest('/configuration'));
  // const config = await conf.json();
  // console.log('Config', config);

  return {
    props: {
      latestFilm,
      nowPlaying: nowPlaying.results,
      config,
    },
  };
}
