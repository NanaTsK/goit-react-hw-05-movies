import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalInfoWrap = styled('div')({
  //   paddingTop: '20px',
  color: '#f1f1f1',
  //   boxShadow: '0 1px 8px 2px #0a0a0a',
  boxShadow: '0px 0px 6px 1px rgba(0, 0, 0, 0.2)',

  //   marginBottom: '40px',
});

export const AdditionalTitle = styled('h3')({
  fontSize: '26px',
  marginBottom: '28px',
});

export const AdditionalNavBox = styled('div')({
  display: 'flex',
  gap: '16px',
  //   paddingBottom: '6px',
});

export const AdditionalNavLink = styled(NavLink)({
  fontSize: '18px',
  fontWeight: '600',
  letterSpacing: '0.6px',
  textTransform: 'uppercase',
  color: '#f1f1f1',
  padding: '10px 12px',
  transition:
    'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&.active': {
    background: 'rgba(255,0,0, 0.8)',
    borderRadius: '8px',
    color: '#1f1f1f',
  },

  '&.active, &:is(:hover, :focus)': {
    transform: 'scale(1.1)',
  },
});
