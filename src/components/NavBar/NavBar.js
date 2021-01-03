import CartIcon from "../CartIcon/CartIcon";
// import logo from "../../../src/assets/images/logo.jpg";
import Button from "../Button/Button";
import SignUp from "../SignUp/SignUp";
import "./NavBar.scss";
import { useState } from "react";

const linkMenu = [
  { link: "productos", path: "/" },
  // { link: "colecciones", path: "/" },
  { link: "categorías", path: "/categories/" },
  // { link: "venta mayorista", path: "/" },
];

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div id="Navbar" className={navbar ? "navbar navbar__active" : "navbar"}>
      <nav className="container menu">
        <h2 className={navbar ? "logo logo--active" : "logo"}>SERVICE</h2>
        {/* <Button path="/" content={logo} c /> */}
        <ul className="menu__list">
          {linkMenu.map(({ link, path }, key) => {
            return (
              <Button
                path={path}
                content={link}
                key={key}
                className={
                  navbar
                    ? "menu__items menu__items--active hvr-underline-from-center"
                    : "menu__items hvr-underline-from-center"
                }
              />
            );
          })}
        </ul>
        <ul className="menu__list">
          <SignUp
            saludoActive={navbar ? "signup__user__saludo--active" : ""}
            nameActive={navbar ? "signup__user__name--active" : ""}
            iconActive={navbar ? "icons--active" : ""}
          />
          <CartIcon
            iconName="shopping-bag"
            path="/cart/"
            numberActive={navbar ? "shopCart__number--active" : ""}
            iconActive={navbar ? "icons--active" : ""}
          />
        </ul>
        {/* </Navbar.Collapse> */}{" "}
      </nav>
    </div>
  );
}
