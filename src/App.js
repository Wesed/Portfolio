import React from "react";
import { GlobalStyle } from "./Components/Styles/Global";
import Light from "./Components/Styles/Light";
import Dark from "./Components/Styles/Dark";
import { ThemeProvider } from "styled-components";
import ConfigMenu from './Components/ConfigMenu';
import Navbar from './Components/Navbar';
import Header from './Components/Header/Header';
import User from './Components/User/User';
import UserExperience from "./Components/User/UserExperience";
import Projetos from './Components/User/Projetos/Projetos';
import Clientes from './Components/User/Clientes/Clientes';

function App() {
  const [theme, setTheme] = React.useState(Dark);
  const [color, setColor] = React.useState('#FE3525');

  function handleChange() {
    setTheme(theme.title === "light" ? Dark : Light);
  }

  return (
    <div>
      {/* O theme provider atua como o useContext, ele serve pra passar o theme pra todos os outros elementos filho */}
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header color={color}/>
          <ConfigMenu theme={theme}  setTheme={setTheme} color={color} setColor={setColor}/>
          {/* <Navbar color={color} theme={theme}/> */}
          <User color={color}/> 
          <UserExperience color={color} />
          <Projetos color={color}/>
          <Clientes color={color}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
