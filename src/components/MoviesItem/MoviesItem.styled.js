import styled from 'styled-components';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const MoviesItemStyled = styled('li')({
  maxWidth: '200px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '4px',

  //   '&::after': {
  //     position: 'absolute',
  //     left: '0',
  //     bottom: '0',
  //     content: '""',
  //     transform: 'translateX(-100%)',
  //     height: '4px',
  //     width: '100%',
  //     background: '#f00',
  //     transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  //   },
  //   '&:hover': {
  //     '&::after': {
  //       transform: 'translateX(0%)',
  //     },
  //   },
  //   'a:is(:hover,:focus) ': {
  //     transform: 'scale(1.02)',
  //   },
  //   '& a': {
  //     display: 'block',
  //     width: '100%',
  //     height: '100%',
  //     transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  //   },
  transition: `borderColor ${transition}, transform ${transition}`,

  '&:hover, &:focus': {
    transform: 'scale(1.05)',
    boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)',
  },
  //   '&.active': {
  //     transform: 'none',
  //     boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.4)',
  //   },
});

export const TitleWrap = styled('div')({
  padding: '10px 4px',
});

export const MovieTitle = styled('h2')({
  fontSize: '20px',
  fontWeight: '500',
  // color: '#f1f1f1',
  color: '#fff',
});
