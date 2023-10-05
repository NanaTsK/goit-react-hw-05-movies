import { HeaderStyled } from './Header.styled';
import { Container } from 'components/App.styled';
import { NavList } from 'components/NavList/NavList';
// import Logo from 'components/Logo';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        {/* <button>HEADER</button> */}
        <NavList />
        {/* <Logo /> */}
      </Container>
    </HeaderStyled>
  );
};
