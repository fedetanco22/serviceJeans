import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-suscription">
        <p className="footer-suscription-heading">
          Suscribite a nuestro Newsletter
        </p>
        <p className="footer-suscription-text">podes hacerlo cuando quieras</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Tu Email"
              className="footer-input"
            />
            <Button path="/" content="Suscribite" />{" "}
            {/* Hacer un success suscribe container */}
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Comprar</h2>
            <NavLink to="/login/">Inicia Sesión</NavLink>
            <NavLink to="/">Productos</NavLink>
            <NavLink to="/categories/">Categorías</NavLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Redes Sociales</h2>
            <NavLink to="/login/">Instagram</NavLink>
            <NavLink to="/">Facebook</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
