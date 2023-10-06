import styled from 'styled-components';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const SearchFormStyled = styled('form')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const SearchFormWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '80%',
  maxWidth: '600px',
  backgroundColor: 'rgba(245, 245, 245, 0.7)',

  borderRadius: '3px',
  overflow: 'hidden',
});

export const SearchFormBtn = styled('button')({
  width: '48px',
  height: '48px',
  fontSize: '24px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '0',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  opacity: '0.6',
  backgroundColor: 'rgba(187, 187, 187, 0.4)',

  '&:hover': {
    opacity: '0.8',
    fontSize: '28px',
    backgroundColor: 'rgba(187, 187, 187, 0.8)',
  },
  transition: `opacity ${transition}, font-size ${transition}, background-color ${transition}`,
});

export const SearchFormInput = styled('input')({
  display: 'inline-block',
  width: '100%',
  font: 'inherit',
  fontSize: '20px',
  border: 'none',
  outline: 'none',
  paddingLeft: '8px',
  paddingRight: '4px',
  backgroundColor: 'transparent',

  '&::placeholder': {
    font: 'inherit',
    fontSize: '18px',
    opacity: '0.4',
  },
});
