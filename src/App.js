import React from "react";
import { GlobalStyle } from "./Components/Styles/Global";
import Header from "./Components/Header";
import Light from "./Components/Styles/Light";
import Dark from "./Components/Styles/Dark";
import { ThemeProvider } from "styled-components";
import ConfigMenu from './Components/ConfigMenu';

function App() {
  const [theme, setTheme] = React.useState(Dark);

  function handleChange() {
    setTheme(theme.title === "light" ? Dark : Light);
  }

  return (
    <div>
      {/* O theme provider atua como o useContext, ele serve pra passar o theme pra todos os outros elementos filho */}
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <ConfigMenu theme={theme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
