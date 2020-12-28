import { NavLink } from "react-router-dom";
import useAppContext from "../../context/useAppContext";
import "./CartIcon.scss";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default function CartIcon({ path }) {
  const { productsQuantity } = useAppContext();

  return (
    <>
      <NavLink to="/cart/">
        <div className="shopCart">
          <AddShoppingCartIcon className="icons" />
          <div className="shopCart__number">
            <span className="shopCart__number--span">{productsQuantity()}</span>
          </div>
        </div>
      </NavLink>
    </>
  );
}
