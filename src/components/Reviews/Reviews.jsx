import {
  Container,
  ErrorMessage,
  NoReviewMessage,
} from 'components/App.styled';

import { Loader } from 'components/Loader/Loader';
import { ReviewsCard, SubTitle, Text } from './Reviews.styled';
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
    <Container>
      {isLoading && <Loader />}

      {isError && !isLoading && (
        <ErrorMessage>
          Oops... Something went wrong. Please, try again.
        </ErrorMessage>
      )}

      {reviewsList?.length === 0 && !isLoading && (
        <NoReviewMessage>
          We don`t have any reviews for this movie.
        </NoReviewMessage>
      )}

      {reviewsList?.length > 0 && !isLoading && (
        <ul>
          {reviewsList.map(({ id, author, content }) => (
            <ReviewsCard key={id}>
              <SubTitle>Author: {author}</SubTitle>
              <Text>{content}</Text>
            </ReviewsCard>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Reviews;
