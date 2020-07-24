import config from '../../../config';

// TODO avoid duplicate in index.tsx

export default async function handler(req, res) {
  // Get data from API
  const res1 = await fetch(
    `${config.TMDB_API_ROOT}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${req.query.query}`
  );
  const movies = await res1.json();

  res.status(200).json(movies);
}
