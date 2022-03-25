import React from "react";
import styled from "styled-components";
import { ReactComponent as Linkedin } from "../../Assets/linkedin.svg";
import { ReactComponent as Github } from "../../Assets/github.svg";
import { ReactComponent as Download } from "../../Assets/download.svg";

const Skills = styled.ul`
  position: absolute;
  left: -10px;
  top: 65%;
  transform: translateY(-65%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  width: 150px;
  transform: translateY(-50%);
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


  }

  :hover {
    li {
      opacity: 1;
    }
  }
`

const ListItem = styled.li`
  width: 18px;
  height: 18px;
  fill: ${props => props.theme.colors.text};

  :after {
    content: attr(data-name);
    color: ${props => props.theme.colors.text};
    position: absolute;
    /* left: 30px; */
    padding: 0 0 0 10px;
    opacity: 0;
    width: 80%;
  }

  :hover:after {
    opacity: 1;
  }

  :hover {
    cursor: pointer;
    fill: ${props => props.theme.colors.text};
;
    /* transform: scale(1.2); */
  }
`

const SkillsShortcuts = ({color}) => {
  const skills = [
    {
      name: 'Linkedin',
      content: <Linkedin />
    }, 

    {
      name: 'Github',
      content: <Github />
    }, 

    {
      name: 'Download CV',
      content: <Download />
    }, 
  ]
  return (
    <>
      <Skills>
            {skills.map((item, index) => 
            <DivItem key={index} color={color}><ListItem data-name={item.name}> {item.content} </ListItem> </DivItem>)}
      </Skills>
    </>
  );
};

export default SkillsShortcuts;
