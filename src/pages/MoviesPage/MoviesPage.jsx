import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'services/movies-api';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Section, Container } from 'components/App.styled';
import { ErrorMessage } from 'components/App.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyInit } from 'components/App.styled';

// import { MoviesList } from 'components/MoviesList/MoviesList';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState('');
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const refMovie = useRef(searchParams.get('query') ?? '');

  const fetchMovies = useCallback(async (searchedMovies, page) => {
    try {
      setIsError('');
      setIsLoading(true);

      const { results } = await getMoviesBySearch(searchedMovies, page);

      setMovies(prevMovies =>
        page === 1 ? results : [...prevMovies, ...results]
      );
      if (results.length === 0) {
        Notify.warning(
          'Sorry, there are no movies matching your search query. Please try again.',
          notifyInit
        );
      }
    } catch (message) {
      setIsError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refMovie.current && fetchMovies(refMovie.current, page);
  }, [fetchMovies, page]);

  useEffect(() => {
    searchedMovies && fetchMovies(searchedMovies, page);
  }, [fetchMovies, searchedMovies, page]);

  function onSubmit(value) {
    if (value === searchedMovies) return;
    setMovies(null);
    setSearchedMovies(value);
    setPage(1);
  }

  return (
    <main>
      <Section>
        <Container>
          <SearchForm onSubmit={onSubmit} query={query} setQuery={setQuery} />
          {isLoading && <Loader />}

          <Suspense fallback={<Loader />}>
            {isError && !isLoading && (
              <ErrorMessage>
                Oops... Something went wrong. Please, try again.
              </ErrorMessage>
            )}

            {movies && <MoviesList moviesList={movies} />}
          </Suspense>
        </Container>
      </Section>
    </main>
  );
};

export default MoviesPage;
