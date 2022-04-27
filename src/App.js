import React from "react";
import { GlobalStyle } from "./Components/Styles/Global";
import Dark from "./Components/Styles/Dark";
import { ThemeProvider } from "styled-components";
import ConfigMenu from './Components/ConfigMenu';
import Navbar from './Components/Navbar';
import Header from './Components/Header/Header';
import User from './Components/User/User';
import UserExperience from "./Components/User/UserExperience";
import Projetos from './Components/User/Projetos/Projetos';
import Clientes from './Components/User/Clientes/Clientes';
import Contato from './Components/User/Contato/Contato';
import Footer from './Components/Footer/Footer';

function App() {
  const [theme, setTheme] = React.useState(Dark);
  const [color, setColor] = React.useState('#FE3525');

  return (
    <div>
      {/* O theme provider atua como o useContext, ele serve pra passar o theme pra todos os outros elementos filho */}
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header color={color}/>
          <ConfigMenu theme={theme}  setTheme={setTheme} color={color} setColor={setColor}/>
          <User color={color}/> 
           <UserExperience color={color} />
          <Projetos color={color}/>
          <Clientes color={color}/>
          <Contato color={color}/>
          <Footer />
          <Navbar color={color} theme={theme}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
