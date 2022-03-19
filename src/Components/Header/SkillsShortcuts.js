import React from "react";
import styled from "styled-components";
import { ReactComponent as Linkedin } from "../../Assets/linkedin.svg";
import { ReactComponent as Github } from "../../Assets/github.svg";
import { ReactComponent as Download } from "../../Assets/download.svg";

const Skills = styled.div`
  position: absolute;
  left: 0;
  font-size: 4rem;
`;

const SkillsShortcuts = () => {
  return (
    <>
      <Skills>
        <ul>
          {/* <li>3</li> */}
          <li><Linkedin /></li>
          <li><Download /></li>
          <li><Github /></li>
        </ul>
      </Skills>
    </>
  );
};

export default SkillsShortcuts;
