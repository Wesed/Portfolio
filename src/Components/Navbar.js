import React from "react";
import styled from "styled-components";
import { ReactComponent as Home } from "../Assets/home2.svg";
import { ReactComponent as User } from "../Assets/user2.svg";
import { ReactComponent as Users } from "../Assets/users.svg";
import { ReactComponent as Exp } from "../Assets/book2.svg";
import { ReactComponent as Portfolio } from "../Assets/portfolio.svg";
import { ReactComponent as Message } from "../Assets/message2.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = styled.nav`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;
  background: ${props => props.themeMode};
  /* fill: ${props => props.theme.colors.primary}; */
  fill: white;
  padding: .675rem;
  backdrop-filter: blur(10px);
  /* z-index: 998; */
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s;
}

    a {
      display: flex;
      padding: .5rem;

      :hover {
      cursor: pointer;
      border-radius: 50%;
      background: ${props => props.color};
      }
    }

    svg {
      width: 24px;
      height: 24px;
      fill: white;
    }
`;

const Navbar = ({color, theme}) => {
  let themeMode = theme.title;

  if(themeMode === 'light') {
    themeMode = 'rgba(51, 51, 51, 0.4)';
  } else {
    themeMode = 'rgba(21, 21, 21, 0.2)';
  }
  
  return (
    <Nav theme={theme} themeMode={themeMode}>
        <NavMenu color={color}>
          <li>
            <AnchorLink href="#home" offset="100">
              <Home/>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#user" offset="100">
              <User/>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#exp" offset="100">
              <Exp/>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#portfolio" offset="100">
              <Portfolio/>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#clients" offset="100">
              <Users/>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contato" offset="50">
              <Message />
            </AnchorLink>
          </li>
        </NavMenu>
    </Nav>
  );
};

export default Navbar;
