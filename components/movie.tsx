import Link from 'next/link';
import config from '../config';

// TODO fix inconsistent aspect ratio
// TODO add srcset?
// TODO add bg cover
// TODO url = /movie/id/title
export function Movie({ id, poster_path, title }) {
  return (
    <figure className="movie frame">
      <img
        loading="eager"
        className="movie__image"
        src={`${config.TMDB_IMAGE_ROOT}/w185${poster_path}`}
        alt={`Poster for ${title}`}
        draggable="false"
      />
      <figcaption className="movie__details">
        <Link href={`/movie/${id}/${title.replace(/ /, '')}`}>
          <a>{title}</a>
        </Link>
      </figcaption>
    </figure>
  );
}
