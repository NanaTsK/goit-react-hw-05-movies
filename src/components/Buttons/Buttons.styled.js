import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)({
  // position: 'fixed',
  // top: '100px',
  // left: '5px',
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

// export const BtnGoBack = styled.button`
// background-color: transparent;
// border:transparent;
// margin-bottom:10px;
// margin-left:10px;

// &:hover {
//     color: #ff7f7f;
// }

// export const BackButton = styled(SearchButton)`
//   height: 40px;
//   margin-bottom: 40px;
// `;
