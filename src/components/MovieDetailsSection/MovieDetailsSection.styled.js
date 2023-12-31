import styled from 'styled-components';

export const DetailsWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  color: rgba(5, 5, 5, 0.6);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MovieImage = styled.img`
  @media screen and (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`;

export const MovieInfoDetails = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const MovieTitleDetail = styled('h2')({
  fontSize: '36px',
  marginBottom: '20px',
});

export const SpanStyled = styled('span')({
  fontSize: '26px',
  fontWeight: '700',
  letterSpacing: '0.8px',
});

export const MovieScore = styled('p')({
  fontSize: '24px',
  marginBottom: '20px',
});

export const MovieDescription = styled('p')({
  fontSize: '24px',
  marginBottom: '20px',
});

export const MovieGenres = styled('p')({
  fontSize: '24px',
});
