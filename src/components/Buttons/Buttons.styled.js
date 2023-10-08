import styled from 'styled-components';
import { Link } from 'react-router-dom';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const GoBackContainer = styled.div`
  display: flex;
  justify-content: center; /* Horizontally center the content */
  margin-bottom: 40px;
`;

export const GoBackLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',

  width: '80%',
  maxWidth: '600px',
  height: '48px',
  fontSize: '24px',
  color: 'rgba(5, 5, 5, 0.6)',

  background: 'transparent',
  borderRadius: '8px',
  boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.2)',

  transition: `boxShadow ${transition}, transform ${transition}`,

  '&:hover, &:focus': {
    transform: 'scale(1.05)',
    boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.4)',
  },
});
