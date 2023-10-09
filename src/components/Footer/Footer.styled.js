import styled from 'styled-components';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const FooterStyled = styled('footer')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  paddingTop: '20px',
  paddingBottom: '20px',

  background: 'rgba(0, 128, 128, 0.6)',
  boxShadow: '0px -4px 10px 2px rgba(0, 0, 0, 0.5)',
});

export const LogoText = styled('p')({
  fontSize: '26px',
  fontWeight: '600',
  letterSpacing: '0.6px',
  color: 'rgba(255, 255, 255, 0.5)',
  textShadow: '1px 3px 0 rgba(0, 0, 0, 0.2), -1px 3px 0 rgba(0, 0, 0, 0.2)',

  transition: `transform ${transition}`,

  '&:hover, &:focus': {
    transform: 'scale(1.05)',
  },
});
