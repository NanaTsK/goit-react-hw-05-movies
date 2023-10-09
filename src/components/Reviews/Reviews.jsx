import { ErrorMessage } from 'components/App.styled';

// import NotFoundNotification from 'components/ErrorNotification/NotFoundNotification';
import { Loader } from 'components/Loader/Loader';
import { SubTitle, Text } from './Reviews.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/movies-api';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    !reviewsList && fetchReviews();

    async function fetchReviews() {
      setIsError(null);
      setIsLoading(true);

      try {
        const data = await getReviews(movieId);

        setReviewsList(data.results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [movieId, reviewsList]);

  return (
    <>
      {isLoading && <Loader />}

      {isError && !isLoading && (
        <ErrorMessage>
          Oops... Something went wrong. Please, try again.
        </ErrorMessage>
      )}

      {/* {reviewsList?.length === 0 && !isError && !isLoading && (
        <NotFoundNotification>
          We don`t have any reviews for this movie.
        </NotFoundNotification>
      )} */}

      {reviewsList?.length > 0 && !isLoading && !isError && (
        <ul>
          {reviewsList.map(({ id, author, content }) => (
            <li key={id}>
              <SubTitle>Author: {author}</SubTitle>
              <Text>{content}</Text>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
