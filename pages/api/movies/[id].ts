import config from '../../../config';

// TODO avoid duplicate in index.tsx

export default async function movieHandler({ query: { id } }, res) {
  // Get data from API
  const res1 = await fetch(
    `${config.TMDB_API_ROOT}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  );
  const movie = await res1.json();

  res.status(200).json(movie);
}
