import styled from 'styled-components';

export const FooterStyled = styled('footer')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',

  //   minHeight: '100px',
  background: 'teal',

  boxShadow: '0 -4px 8px 2px #0a0a0a',

  '&>div': {
    display: 'flex',
    //   display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
