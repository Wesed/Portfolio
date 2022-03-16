import React from "react";
import { ReactComponent as Config } from "../Assets/gear.svg";
import { ReactComponent as Dark } from "../Assets/moon.svg";
import { ReactComponent as Light } from "../Assets/sun.svg";
import { GlobalStyle } from './Styles/Global';

const ConfigMenu = ({ theme }) => {
  const [color, setColor] = React.useState('#FE3525');
  const [config, setConfig] = React.useState(false);

  const colorList = ['#FE3525', '#FF7105', '#239583', '#0B52C0', '#FF56B8'];


  return (
    <div className="config">

      <GlobalStyle color={color} />


      <div className="btnConfig">
        <a href="#">{theme.title === "light" ? <Dark /> : <Light />}</a>

        <a href="#" onClick={() => setConfig(!config)}>
          <Config />
        </a>
      </div>

      {config && 
      <div className="colorsConfig animeRight">
          <p>Escolha um thema</p>

          <div className='colorContainer'> 
            {colorList.map(color => 
            <span style={{ background: `${color}`}} 
            key={color} value={color} 
            className="colorItem"
            onClick={() => {setColor(color)}}></span>)}
          </div>
          </div>}
      </div>
  );
};

export default ConfigMenu;