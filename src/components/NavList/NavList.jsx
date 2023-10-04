import { NavStyled, NavLinkStyled } from './NavList.styled';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BiCameraMovie } from 'react-icons/bi';

export const NavList = () => {
  return (
    <NavStyled>
      <NavLinkStyled to="/">
        <BiHomeAlt2 />
        <span>Home</span>
      </NavLinkStyled>
      <NavLinkStyled to="/movies">
        <BiCameraMovie />
        <span>Movies</span>
      </NavLinkStyled>
    </NavStyled>
  );
};
