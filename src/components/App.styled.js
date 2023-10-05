import styled from 'styled-components';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Container = styled('div')({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '20px',
});

export const Heading = styled('h1')({
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '0.8px',
  marginBottom: '40px',
  color: '#f1f1f1',
});
export const Section = styled('section')({
  padding: '40px 0',
});

export const ErrorMessage = styled('p')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%)',
  textAlign: 'center',
  fontSize: '32px',
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
