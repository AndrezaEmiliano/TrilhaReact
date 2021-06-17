import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />

      <Home />
    </div>
  );
}

export default App;
