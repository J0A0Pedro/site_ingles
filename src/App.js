import "./styles.css";
import Nav from "./componentes/nav/Nav";
import Body from "./componentes/body/Body";
import Conteudo from "./componentes/conteudo/Conteudo";

export default function App() {
  return (
    <div className="App">

      <Nav />

      <Body />

      <Conteudo />
      
    </div>
  );
}
