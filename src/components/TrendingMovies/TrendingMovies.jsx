import { Container, Heading } from 'components/App.styled';
import MoviesList from 'components/MoviesList/MoviesList';

export function TrendingMovies({ movies }) {
  return (
    <Container>
      <Heading>Trending today</Heading>
      <MoviesList moviesList={movies} />
    </Container>
  );
}
