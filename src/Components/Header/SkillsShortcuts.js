import React from "react";
import styled from "styled-components";
import { ReactComponent as Linkedin } from "../../Assets/linkedin.svg";
import { ReactComponent as Github } from "../../Assets/github.svg";
import { ReactComponent as Download } from "../../Assets/download.svg";

const Skills = styled.ul`
  position: absolute;
  left: -10px;
  top: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  width: 200px;
  width: auto;

  @media(max-width: 40rem) {
    left: 50%;
    transform: translateX(-50%);
    top: 35rem;
    flex-direction: row;
    gap: 2rem;
  }
`;

const DivItem = styled.div`
  position: relative;

  :hover:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 3px;  
    top: 25px;
    left: 30px;
    display: block;
    background:  ${props => props.color};

    @media (max-width: 30rem) {
      display: block;
      top: 4rem;
      left: -1px;
    }
  }

  :hover {
    li {
      opacity: 1;
    }
  }
`

const ListItem = styled.li`
  width: 18px;
  fill: ${props => props.theme.colors.text};
  

  :after {
    position: absolute;
    content: attr(data-name);
    color: ${props => props.theme.colors.text};
    /* left: 30px; */
    padding: 0 0 0 10px;
    opacity: 0;
    width: 150px;

    @media (max-width: 30rem) {
      display: block;
      top: 2.5rem;
      padding: 0;
    }
  }

  :hover:after {
    opacity: 1;
  }

  :hover {
    cursor: pointer;
    fill: ${props => props.theme.colors.text};
  }

  a {
    svg {
      fill: ${props => props.theme.colors.text};
    }
  }

  @media(max-width: 40rem) {
    width: 24px;
  }
`

const SkillsShortcuts = ({color}) => {
  const skills = [
    {
      name: 'Linkedin',
      content: <Linkedin />,
      href: 'https://www.linkedin.com/in/weslleyeduardo/'
    }, 

    {
      name: 'Github',
      content: <Github />,
      href: 'https://github.com/Wesed'
    }, 

    {
      name: 'Download CV',
      content: <Download />,
      href: 'https://github.com/Wesed/dogs/files/8459976/curriculo.pdf'
    }, 
  ]

  return (
    <>
      <Skills>
            {skills.map((item, index) => 
            <DivItem key={index} color={color}>
              <ListItem href={item.href} data-name={item.name}> 
              <a href={item.href}>{item.content}</a>
            </ListItem> 
            </DivItem>)}
      </Skills>
    </>
  );
};

export default SkillsShortcuts;
