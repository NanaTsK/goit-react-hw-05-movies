import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoadMoreBtnStyled = styled('button')({
  padding: '12px 16px',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '2px',
  backgroundColor: 'rgba(38, 192, 211, 0.6)',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  border: '0',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100vw',

  color: '#fff',
  boxShadow:
    '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',

  '&:is(:hover, :focus)': {
    backgroundColor: 'rgba(38, 192, 211, 0.8)',
  },
});

export const MovieLink = styled(Link)({
  position: 'fixed',
  top: '100px',
  left: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontWeight: '500',
  fontSize: '20px',
  padding: '5px',
  borderRadius: '8px',
  background: '#0f0f0ff1',
  color: '#aeaeae',
  transition:
    'color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&:hover': {
    transform: 'scale(1.1)',
    color: '#f1f1f1',
  },
});
