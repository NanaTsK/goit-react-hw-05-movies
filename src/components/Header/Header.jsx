// import NavList from 'components/NavList/NavList';
import { HeaderStyled } from './Header.styled';
import { Container } from 'components/App.styled';
// import Logo from 'components/Logo';
// import { HeaderStyled } from '../Loader/Header.styled';
// import { Header } from 'components/Header';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <button>HEADer</button>
        {/* <NavList /> */}
        {/* <Logo /> */}
      </Container>
    </HeaderStyled>
  );
};
