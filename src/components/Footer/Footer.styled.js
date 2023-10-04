import styled from 'styled-components';

export const FooterStyled = styled('footer')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  background: 'rgba(0, 128, 128, 0.6)',
  //   boxShadow: '0 -4px 8px 2px #0a0a0a',
  boxShadow: '0px -4px 10px 2px rgba(0, 0, 0, 0.5)',

  '&>div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
