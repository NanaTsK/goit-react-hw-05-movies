import { Container, Section } from 'components/App.styled';

import defaultImg from 'images/defImg.jpg';
import {
  DetailsWrap,
  MovieDescription,
  MovieGenres,
  MovieInfoDetails,
  MovieScore,
  MovieTitleDetail,
  SpanStyled,
} from './MovieDetailsSection.styled';
import GoBackBtn from 'components/Buttons/Buttons';

const MovieDetailsSection = ({ details }) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w400/';
  const { title, release_date, overview, vote_average, poster_path, genres } =
    details || {};
  const imageSrc = poster_path ? IMAGE_URL + poster_path : defaultImg;
  const userScore = Math.round((Number(vote_average) * 100) / 10);
  const releaseData = release_date?.slice(0, 4);
  return (
    <Section>
      <Container>
        <GoBackBtn />
        <DetailsWrap>
          <img src={imageSrc} alt={title} width={320} />
          <MovieInfoDetails>
            <MovieTitleDetail>
              {title} ({releaseData})
            </MovieTitleDetail>
            <MovieScore>
              <SpanStyled>User Score:</SpanStyled> <span>{userScore}%</span>
            </MovieScore>
            <MovieDescription>
              <SpanStyled>Overview:</SpanStyled> {overview}
            </MovieDescription>
            <MovieGenres>
              <SpanStyled>Genres:</SpanStyled>{' '}
              {genres?.map(({ name }) => name).join(' / ')}
            </MovieGenres>
          </MovieInfoDetails>
        </DetailsWrap>
      </Container>
    </Section>
  );
};

export default MovieDetailsSection;
