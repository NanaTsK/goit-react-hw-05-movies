import MoviesItem from 'components/MoviesItem/MoviesItem';
import { MoviesListStyled } from './MoviesList.styled';

const MoviesList = ({ moviesList }) => {
  return (
    <MoviesListStyled>
      {moviesList.map(movie => (
        <MoviesItem key={movie.id} movie={movie} />
      ))}
    </MoviesListStyled>
  );
};

export default MoviesList;
