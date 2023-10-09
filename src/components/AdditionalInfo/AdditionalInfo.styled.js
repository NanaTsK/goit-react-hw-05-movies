import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const AdditionalInfoWrap = styled('div')({
  color: '#f1f1f1',
  borderTop: '2px solid rgba(0, 0, 0, 0.2)',
  borderBottom: '2px solid rgba(0, 0, 0, 0.2)',
  paddingTop: '10px',
  paddingBottom: '10px',
});

export const AdditionalTitle = styled('h3')({
  fontSize: '26px',
  marginBottom: '20px',
});

export const AdditionalNavBox = styled('div')({
  display: 'flex',
  gap: '16px',
});

export const AdditionalNavLink = styled(NavLink)({
  fontSize: '22px',
  fontWeight: '600',
  letterSpacing: '0.6px',
  color: '#f1f1f1',
  padding: '10px 12px',

  background: 'transparent',
  borderRadius: '8px',

  transition: `transform ${transition}`,

  '&:hover, &:focus': {
    transform: 'scale(1.05)',
    boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)',
  },
  '&.active': {
    transform: 'none',
    boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.4)',
  },
});
