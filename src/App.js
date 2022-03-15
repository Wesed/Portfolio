import "./App.css";
import React from "react";
import { GlobalStyle } from "./Components/Styles/global";
import MainSuperior from "./Components/MainSuperior";
import Light from "./Components/Styles/Light";
import Dark from "./Components/Styles/Dark";
import { ThemeProvider } from "styled-components";

// vai ser responsavel por trocar as cores globais do site usando styled components

/* 
* ira precisar de userContext, pq a variavel 'theme' que avisa se é dark ou light, vai ser compartilhada por todos os componentes, ja que
ela vai determinar as cores dos elementos;
todos os elementos recebera por parametro e irao checar o estado ' theme ? color white : color black '

* No caso das cores personalizadas, deve haver uma maneira de enviar por parametro e setar nos styled components
'color: ${variavelColor}' assim sempre ira mudar


* cria um styled component <Background> e coloca toda a aplicaçao ali, pq toda alteracao afetara todos os filhos desse styled component
assim, se mudar cor do titulo, texto, etc, altera pro projeto inteiro. E essa cor pode ser setada vindo por parametro
 - o projeto vai ter q ficar dentro de main, pq sera preciso passar pra ele qual a cor e qual o tema 
 - o botao sera importado no app.js

 **** as cores mudadas pelo theme NAO SAO as mesmas trocadas pelas cores 
*/

function App() {
  const [theme, setTheme] = React.useState(Light);

  function handleChange() {
    setTheme(theme.title === "light" ? Dark : Light);
  }

  return (
    <div>
      {/* O theme provider atua como o useContext, ele serve pra passar o theme pra todos os outros elementos filho */}
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MainSuperior />
          <button onClick={handleChange}>Troca</button>
      </ThemeProvider>
    </div>
  );
}

export default App;
