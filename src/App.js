import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from "./Components/Styles/Global";
import Dark from "./Components/Styles/Dark";
import { ThemeProvider } from "styled-components";
import ConfigMenu from './Components/ConfigMenu';
import Navbar from './Components/Navbar';
import Header from './Components/Header/Header';
import User from './Components/User/User';
import Footer from './Components/Footer/Footer';
import Detalhes from './Components/Detalhes/Detalhes';

function App() {
  const [theme, setTheme] = React.useState(Dark);
  const [color, setColor] = React.useState('#FE3525');

  return (
    <BrowserRouter>
      {/* O theme provider atua como o useContext, ele serve pra passar o theme pra todos os outros elementos filho */}
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header color={color}/>
          <Navbar color={color} theme={theme}/>
          <ConfigMenu theme={theme}  setTheme={setTheme} color={color} setColor={setColor}/>

          <Routes>
            <Route path="/" element={<User color={color}/>} />
            <Route path="projeto/:titulo" element={<Detalhes/>} />
          </Routes>

          <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
