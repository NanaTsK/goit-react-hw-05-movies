import styled from 'styled-components';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const MoviesItemStyled = styled('li')({
  maxWidth: '200px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '4px',

  transition: `transform ${transition}`,

  '&:hover, &:focus': {
    transform: 'scale(1.05)',
    boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)',
  },
});

export const TitleWrap = styled('div')({
  padding: '10px 4px',
});

export const MovieTitle = styled('h2')({
  fontSize: '20px',
  fontWeight: '500',
  color: '#fff',
});
