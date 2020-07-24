import Head from 'next/head';
import { useRouter } from 'next/router';
import useSwr from 'swr';
import { Search } from '../components/search';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SearchResults() {
  const router = useRouter();
  const query = router.query.query;
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
      <ul>
        {data?.results?.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </>
  );
}
