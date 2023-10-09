import { styled } from 'styled-components';

export const ActorCard = styled('li')({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  marginBottom: '12px',
});

export const ActorImage = styled('img')({
  width: '100px',
  borderRadius: '8px',
});

export const Text = styled('p')({
  color: 'rgba(5, 5, 5, 0.6)',
  fontSize: '22px',
  marginBottom: '20px',
});
