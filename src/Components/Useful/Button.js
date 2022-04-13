import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Download } from "../../Assets/download.svg";

const Link = styled.a`
  display: inline-block;
  margin: 0 auto;
`;

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: ${props => props.theme.colors.primary};
  background-image: linear-gradient(-125deg, transparent, 
    ${props => props.color});
  padding: 1rem 2rem;
  gap: 10px;
  border-radius: 10px;
  color: ${props => props.theme.colors.text};
  font-weight: 700;
  font-size: 1rem;

  :hover {
    background: transparent;
    box-shadow: 1px 1px 5px 1px ${props => props.color};
    cursor: pointer;
  }

  svg {
    width: 16px;
    fill: ${props => props.theme.colors.text};
  }
`

const Button = ({color, children, href, download, ...props}) => {
  return (
      <Link href={href} {...props}>
        <ButtonStyle color={color}>
          {children} {download && <Download />}
        </ButtonStyle>
      </Link>
    )
}

export default Button;