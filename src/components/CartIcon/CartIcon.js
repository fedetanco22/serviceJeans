import { NavLink } from "react-router-dom";
import useAppContext from "../../context/useAppContext";
import "./CartIcon.scss";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default function CartIcon({ numberActive, iconActive }) {
  const { productsQuantity } = useAppContext();

  return (
    <>
      <NavLink to="/cart/">
        <div className="shopCart">
          <AddShoppingCartIcon className={`icons ${iconActive}`} />
          <div className={`shopCart__number ${numberActive}`}>
            <span className="shopCart__number--span ">
              {productsQuantity()}
            </span>
          </div>
        </div>
      </NavLink>
    </>
  );
}
