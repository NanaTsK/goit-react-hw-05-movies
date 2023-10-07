import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { MoviesListStyled } from './MoviesList.styled';
// import { MoviesListStyled } from './MoviesList.styled';

export const MoviesList = ({ moviesList }) => {
  return (
    <MoviesListStyled>
      {moviesList.map(movie => (
        <MoviesItem key={movie.id} movie={movie} />
      ))}
    </MoviesListStyled>
  );
};
