import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const NavStyled = styled('nav')({
  display: 'flex',
  gap: '20px',
});

export const NavLinkStyled = styled(NavLink)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '22px',
  fontWeight: '600',
  letterSpacing: '0.6px',
  // textTransform: 'uppercase',
  color: '#f1f1f1',
  padding: '14px 12px',

  background: 'transparent',
  borderRadius: '8px',

  transition: `borderColor ${transition}, transform ${transition}`,

  '&:hover, &:focus': {
    transform: 'scale(1.05)',
    boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)',
  },
  '&.active': {
    transform: 'none',
    boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.4)',
  },
});
