import CartIcon from "../CartIcon/CartIcon";
import logo from "../../../src/assets/images/logo.jpg";
import Button from "../Button/Button";

import "./NavBar.scss";
// import { NavLink } from "react-router-dom";

const linkMenu = [
  { link: "productos", path: "/" },
  { link: "colecciones", path: "/" },
  { link: "categorías", path: "/categories/" },
  { link: "venta mayorista", path: "/" },
];

export default function NavBar() {
  return (
    <div
      id="Navbar"
      className=" bg-white align-items-center justify-content-between">
      <nav className="container menu">
        <Button path="/" content={logo} className="logo" />
        <ul className="menu__list">
          {linkMenu.map(({ link, path }, key) => {
            return (
              <Button
                path={path}
                content={link}
                key={key}
                className="menu__items hvr-underline-from-center"
              />
            );
          })}
        </ul>
        <ul className="menu__list">
          <CartIcon iconName="user" path="/" />
          <CartIcon iconName="search" path="/" />
          <CartIcon iconName="shopping-bag" path="/cart/" />
        </ul>
        {/* </Navbar.Collapse> */}{" "}
      </nav>
    </div>
  );
}
