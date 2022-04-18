import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Download } from "../../Assets/download.svg";
import UseHex from './../Hooks/UseHex';

const Link = styled.a`
  display: inline-block;
  /* margin: 0 auto; */
`;

const ButtonStyle = styled.button`
  border: none;
  background: ${props => props.theme.colors.primary};
  background-image: linear-gradient(-125deg, ${props => props.hex}, 
    ${props => props.hex2});
  padding: 1rem 2rem;
  gap: 10px;
  border-radius: 10px;
  color: white;
  font-weight: 700;
  font-size: 1rem;

  :hover {
    background: transparent;
    box-shadow: 0 0 5px 1px ${props => props.hex2};
    cursor: pointer;
    color: ${props => props.theme.colors.text};

    svg {
      fill: ${props => props.theme.colors.text};
    }
  }

  svg {
    width: 16px;
    fill: white;
  }
`

const Button = ({color, children, href, download, ...props}) => {
  const hex = UseHex(color, .6);
  const hex2 = UseHex(color, 1);
  return (
      <Link href={href} {...props}>
        <ButtonStyle hex={hex} hex2={hex2}>
          {children} {download && <Download />}
        </ButtonStyle>
      </Link>
    )
}

export default Button;