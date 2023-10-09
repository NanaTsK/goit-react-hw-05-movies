//
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorCard, ActorImage, Text } from './Cast.styled';
import { ErrorMessage, Container } from 'components/App.styled';
import { getCast } from 'services/movies-api';

const Cast = () => {
  const [castList, setCastList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    !castList && fetchCast();

    async function fetchCast() {
      setIsError(null);
      setIsLoading(true);

      try {
        const data = await getCast(movieId);
        setCastList(data.cast);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [castList, movieId]);

  return (
    <Container>
      {isLoading && <Loader />}

      {isError && !isLoading && (
        <ErrorMessage>
          Oops... Something went wrong. Please, try again.
        </ErrorMessage>
      )}

      {castList?.length > 0 && (
        <ul>
          {castList.map(({ cast_id, name, character, profile_path }) => (
            <ActorCard key={cast_id}>
              <ActorImage
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width={100}
              />
              <div>
                <Text>{name}</Text>
                <Text>Character: {character}</Text>
              </div>
            </ActorCard>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Cast;
