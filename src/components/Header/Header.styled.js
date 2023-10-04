import styled from 'styled-components';

export const HeaderStyled = styled('header')({
  position: 'fixed',
  zIndex: '20',
  width: '100%',
  // background: 'teal',
  background: 'rgba(0, 128, 128, 0.6)',

  boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.5)',

  '&>div': {
    display: 'flex',
  },
});
