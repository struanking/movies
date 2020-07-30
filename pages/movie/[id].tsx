import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Movie() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/movies/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const { tagline, title } = data;

  return (
    <>
      <Head>
        <title>Movie App - {title}</title>
      </Head>
      <p>Getting details for movie id: {query.id}</p>
      <h1>{title}</h1>
      <p>{tagline}</p>
    </>
  );
}
