import React from "react";
import styled from "styled-components";
import { ReactComponent as Home } from "../Assets/home2.svg";
import { ReactComponent as User } from "../Assets/user2.svg";
import { ReactComponent as Exp } from "../Assets/book2.svg";
import { ReactComponent as Portfolio } from "../Assets/portfolio.svg";
import { ReactComponent as Message } from "../Assets/message2.svg";

const Nav = styled.nav`
  position: fixed;
  bottom: 20px;
  width: 15.6rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;
  background: ${props => props.themeMode};
  /* fill: ${props => props.theme.colors.primary}; */
  fill: white;
  padding: .675rem;
  backdrop-filter: blur(10px);
  z-index: 999;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      cursor: pointer;
      border-radius: 50%;
      background: ${props => props.color};

      fill: white;
      transition: 0.1s;
    }

    svg {
      width: 24px;
      height: 24px;
      fill: white;
    }
  }
`;

const Navbar = ({color, theme}) => {
  let themeMode = theme.title;

  if(themeMode === 'light') {
    themeMode = 'rgba(51, 51, 51, 0.8)';
  } else {
    themeMode = 'rgba(21, 21, 21, 0.8)';
  }
  
  return (
    <Nav theme={theme} themeMode={themeMode} className='navSvg'>
        <NavMenu color={color}>
          <li><Home/></li>
          <li><User /></li>
          <li><Exp /></li>
          <li><Portfolio /></li>
          <li><Message /></li>
        </NavMenu>
    </Nav>
  );
};

export default Navbar;
