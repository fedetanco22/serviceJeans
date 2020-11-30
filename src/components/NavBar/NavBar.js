import CartIcon from "../CartIcon/CartIcon";
import logo from "../../../src/assets/images/logo.jpg";
import { Link } from "react-router-dom";

import "./NavBar.scss";

export default function NavBar() {
  const handleClick = (e) => {
    alert(e.target.outerHTML);
  };

  return (
    <div
      id="Navbar"
      className=" bg-white align-items-center justify-content-between">
      <nav className="container menu">
        <Link to={"/"}>
          <img src={logo} alt="logo" width="20%" className="logo" />
        </Link>
        {/* <CartIcon iconName="user" callback={handleClick}></CartIcon>
        <CartIcon iconName="search" callback={handleClick}></CartIcon> */}
        <CartIcon iconName="shopping-bag" callback={handleClick}></CartIcon>
        {/* </Navbar.Collapse> */}{" "}
      </nav>
    </div>
  );
}
