import { Container } from 'components/App.styled';
import {
  AdditionalInfoWrap,
  AdditionalNavBox,
  AdditionalNavLink,
  AdditionalTitle,
} from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <AdditionalInfoWrap>
      <Container>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <AdditionalNavBox>
          {/* <button
            style={{
              display: 'flex',
              fontSize: 22,
              color: '#010101',
            }}
          >
            CAST
          </button>
          <button
            style={{
              display: 'flex',
              fontSize: 22,
              color: '#010101',
            }}
          >
            REVIEWS
          </button> */}

          <AdditionalNavLink to="cast">Cast</AdditionalNavLink>
          <AdditionalNavLink to="reviews">Reviews</AdditionalNavLink>
        </AdditionalNavBox>
      </Container>
    </AdditionalInfoWrap>
  );
};

export default AdditionalInfo;
