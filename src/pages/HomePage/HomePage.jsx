import { Section } from 'components/App.styled';
import { ErrorMessage } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movies-api';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (movies) return;
    const fetchMovies = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch ({ message }) {
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movies]);

  return (
    <main>
      <Section>
        {movies && <TrendingMovies movies={movies} />}

        {isError && !isLoading && (
          <ErrorMessage>
            Oops... Something went wrong. Please, try again.
          </ErrorMessage>
        )}

        {isLoading && <Loader />}
      </Section>
    </main>
  );
};

export default HomePage;
