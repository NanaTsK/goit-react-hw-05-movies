import { useEffect, useState } from 'react';
import { ErrorMessage } from 'components/App.styled';

import { Outlet, useParams } from 'react-router-dom';

import { getMovieByID } from 'services/movies-api';
import { Section } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';

import MovieDetailsSection from 'components/MovieDetailsSection/MovieDetailsSection';
// import AdditionalInfo from 'components/AdditionalInfo';
// import ErrorMessage from 'components/ErrorMessage';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [detailsMovie, setDetailsMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (detailsMovie) return;
    const getDetails = async movieId => {
      try {
        setIsError(false);
        setIsLoading(true);
        const getMovieDetails = await getMovieByID(movieId);
        setDetailsMovie(getMovieDetails);
      } catch ({ message }) {
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails(movieId);
  }, [detailsMovie, movieId]);

  return (
    <main>
      {isError && !isLoading && (
        <ErrorMessage>
          Oops... Something went wrong. Please, try again.
        </ErrorMessage>
      )}

      {isLoading && <Loader />}
      {detailsMovie && <MovieDetailsSection details={detailsMovie} />}
      <Section>
        {/* <AdditionalInfo /> */}
        <Outlet />
      </Section>
    </main>
  );
};

export default MovieDetailsPage;
