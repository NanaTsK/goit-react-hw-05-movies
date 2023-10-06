import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
// import { notifyInit } from 'components/App.styled';
import { getMoviesBySearch } from 'services/movies-api';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Section, Container } from 'components/App.styled';

import { ErrorMessage } from 'components/App.styled';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));
const LoadMoreBtn = lazy(() => import('components/Buttons/Buttons'));

export const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState('');
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [searchParams] = useSearchParams();

  const query = useMemo(() => searchParams.get('query') ?? '', [searchParams]);

  const refMovie = useRef(query);

  const fetchMovies = useCallback(async (searchedMovies, page) => {
    try {
      setIsError('');
      setIsLoading(true);

      const { results, total_pages, total_results } = await getMoviesBySearch(
        searchedMovies,
        page
      );

      setTotalPage(total_pages);
      setMovies(prevMovie =>
        page === 1 ? results : [...prevMovie, ...results]
      );

      if (page === 1)
        Notify.success(`Hooray! We found ${total_results} movies.`);
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

  function onChangePage() {
    setPage(prevPage => prevPage + 1);
  }

  function onSubmit(value) {
    if (value === searchedMovies) return;
    setMovies(null);
    setSearchedMovies(value);
    setPage(1);
    setTotalPage(0);
  }

  return (
    <main>
      {/* <Section> */}
      {/* {<button>MOVIES PAGE</button>} */}
      {/* {movies && <TrendingMovies movies={movies} />} */}
      {/* {isError && <ErrorMessage error={isError} />} */}
      {/* {isLoading && <Loader />} */}
      {/* </Section> */}

      <Section>
        <Container>
          <SearchForm setSearchedMovies={onSubmit} />
          {isLoading && <Loader />}

          <Suspense fallback={<Loader />}>
            {isError && !isLoading && (
              <ErrorMessage>
                Oops... Something went wrong. Please, try again.
              </ErrorMessage>
            )}
            {movies && <MoviesList moviesList={movies} />}
            {totalPage > 1 && page < totalPage && (
              <LoadMoreBtn onClick={onChangePage} />
            )}
          </Suspense>
        </Container>
      </Section>
    </main>
  );
};
