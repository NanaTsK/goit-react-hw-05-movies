import { HeaderStyled } from './Header.styled';
import { Container } from 'components/App.styled';
import { NavList } from 'components/NavList/NavList';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <NavList />
      </Container>
    </HeaderStyled>
  );
};
