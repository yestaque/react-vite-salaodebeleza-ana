import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/contato">Contato</Link> |{" "}
      <Link to="/loja">Loja</Link> |{" "}
      <Link to="/produto/1">Produto Detalhe</Link>
    </nav>
  );
}

export default Menu;
