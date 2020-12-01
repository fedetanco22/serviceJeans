import CartIcon from "../CartIcon/CartIcon";
import logo from "../../../src/assets/images/logo.jpg";
import Button from "../Button/Button";

import "./NavBar.scss";

export default function NavBar() {
  return (
    <div
      id="Navbar"
      className=" bg-white align-items-center justify-content-between">
      <nav className="container menu">
        <Button path="/" content={logo} className="logo" />
        <CartIcon iconName="user" path="/" />
        <CartIcon iconName="search" path="/" />
        <CartIcon iconName="shopping-bag" path="./cart/" />
        {/* </Navbar.Collapse> */}{" "}
      </nav>
    </div>
  );
}
