import Head from 'next/head';
import { useRouter } from 'next/router';
import useSwr from 'swr';
import { Grid } from '../components/grid';
import { Movie } from '../components/movie';
import { Search } from '../components/search';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SearchResults() {
  const router = useRouter();
  const { query } = router.query;
  const { data, error } = useSwr(`/api/search/${query}`, fetcher);

  return (
    <>
      <Head>
        <title>Movie App - Search</title>
      </Head>

      <h1 data-testid="title">Search results</h1>

      <Search />

      <p>Searching for: {query}</p>

      {error && <div>Failed to load search results</div>}
      {!data && <div>Loading...</div>}

      <Grid>
        {data?.results?.map((film) => (
          <Movie key={film.id} {...film} />
        ))}
      </Grid>
    </>
  );
}
