import { useLocation, Link } from 'react-router-dom';
import defaultImg from 'images/defImg.jpg';
import { MoviesItemStyled, TitleWrap, MovieTitle } from './MoviesItem.styled';

export const MoviesItem = ({ movie }) => {
  const location = useLocation();

  function shortenTitle(title) {
    if (title.length < maxLength) return title;
    return title.slice(0, maxLength) + '...';
  }

  const IMG_URL = 'https://image.tmdb.org/t/p/w300/';
  const { id, title, poster_path, name } = movie || {};
  const maxLength = 16;
  const imageSrc = poster_path ? IMG_URL + poster_path : defaultImg;
  const titleMovie = title || name;

  return (
    <MoviesItemStyled title={title}>
      <Link to={`/movie/${id.toString()}`} state={{ from: location }}>
        <img src={imageSrc} alt={title} width={200} />
        <TitleWrap>
          <MovieTitle>{shortenTitle(titleMovie)}</MovieTitle>
        </TitleWrap>
      </Link>
    </MoviesItemStyled>
  );
};
