import config from '../config';

// TODO fix inconsistent aspect ratio
// TODO add srcset?
// TODO add bg cover
export function Movie({ id, poster_path, title }) {
  return (
    <figure className="movie frame">
      <img
        loading="lazy"
        className="movie__image"
        src={`${config.TMDB_IMAGE_ROOT}/w185${poster_path}`}
        alt={`Poster image for ${title}`}
        draggable="false"
      />
      <figcaption className="movie__details">{title}</figcaption>
    </figure>
  );
}
