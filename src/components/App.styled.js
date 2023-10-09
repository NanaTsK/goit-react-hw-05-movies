import styled from 'styled-components';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Section = styled('section')({
  padding: '10px 0',
});

export const Container = styled('div')({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 20px',
});

export const Heading = styled('h1')({
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '0.8px',
  marginBottom: '30px',
  color: '#f1f1f1',
});

export const ErrorMessage = styled('p')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%)',
  textAlign: 'center',
  fontSize: '32px',
  color: 'rgba(5, 5, 5, 0.6)',
});

export const NoReviewMessage = styled('p')({
  fontSize: '28px',
  color: 'rgba(5, 5, 5, 0.6)',
  textAlign: 'center',
});

export const notifyInit = Notify.init({
  width: '280px',
  position: 'center-center',
  distance: '20px',
  opacity: 0.8,
  fontSize: '20px',
  borderRadius: '50px 10px',
  notiflixIconColor: 'rgba(0,0,0,0.6)',
  pauseOnHover: true,
});
