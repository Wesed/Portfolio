import React from "react";
import styled from "styled-components";
import { ReactComponent as Dark } from "../Assets/moon.svg";
import { ReactComponent as Light } from "../Assets/sun.svg";
import { ReactComponent as Config } from "../Assets/gear.svg";
import { GlobalStyle } from "./Styles/Global";
import LightTheme from "./Styles/Light";
import DarkTheme from "./Styles/Dark";

const Configuration = styled.div`
  position: absolute;
  display: flex;
  top: 100px;
  right: 15px;
  gap: 20px;
`;

const BtnConfig = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ColorsConfig = styled.div`
  text-align: center;
  background: ${(props) => props.theme.colors.secondary};
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  transition: 0.1s;
`;

const ColorsConfigP = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColorItem = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid transparent;
  margin-right: 5px;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
    transition: 0.1s;
  }
`;

const ConfigMenu = ({theme, setTheme, color, setColor }) => {
  const [config, setConfig] = React.useState(null);

  const colorList = ["#FE3525", "#FF7105", "#239583", "#0B52C0", "#FF56B8"];

  React.useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!document.getElementById("config").contains(e.target)) {
        setConfig(false);
      }
    });
  }, [config]);

  return (
    <Configuration id="config">
      {/* ver se dps de tudo ainda é necessario */}
      <GlobalStyle color={color} />

      {/* classe foi necessario pq os icones precisam de um estilo igual pra todos eles, e nao so pra um unico */}
      <BtnConfig className="btnConfig">
        <a href="#" onClick={() => {setTheme(theme.title === 'light' ? DarkTheme : LightTheme)}}>
          {theme.title === "light" ? <Dark /> : <Light />}
        </a>

        <a href="#" onClick={() => setConfig(!config)}>
          <Config />
        </a>
      </BtnConfig>

      {config && (
        <ColorsConfig className="animeRight">
          <ColorsConfigP>Escolha um thema</ColorsConfigP>

          <ColorsContainer>
            {colorList.map((color) => (
              <ColorItem
                style={{ background: `${color}` }}
                key={color}
                value={color}
                className="colorItem"
                onClick={() => {
                  setColor(color);
                }}
              ></ColorItem>
            ))}
          </ColorsContainer>
        </ColorsConfig>
      )}
    </Configuration>
  );
};

export default ConfigMenu;
