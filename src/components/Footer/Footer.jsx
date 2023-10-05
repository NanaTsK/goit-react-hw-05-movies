import { Container } from 'components/App.styled';
import { Link } from 'react-router-dom';
import { FooterStyled, LogoText } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Link to="/">
          <LogoText>PopcornSearch</LogoText>
        </Link>
      </Container>
    </FooterStyled>
  );
};
