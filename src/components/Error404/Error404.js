import { NavLink } from "react-router-dom";
import "./Error404.scss";

export default function Error404() {
  return (
    <div id="Error">
      <h1>Error Page</h1>
      <p>Esta pagina no existe</p>
      <NavLink to={"/"}>Volver al Inicio</NavLink>
    </div>
  );
}
