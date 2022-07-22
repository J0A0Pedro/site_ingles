import "./styles.css";
import Nav from "./componentes/nav/Nav";
import Body from "./componentes/body/Body";
import Conteudo from "./componentes/conteudo/Conteudo";
import Metodologia from "./componentes/metodologia/Metodologia";

export default function App() {
  return (
    <div className="App">

      <Nav />

      <Body />

      <Conteudo />

      <Metodologia />

    </div>
  );
}
