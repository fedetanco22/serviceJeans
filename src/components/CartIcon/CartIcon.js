import { NavLink } from "react-router-dom";
import useAppContext from "../../context/useAppContext";
import "./CartIcon.scss";

export default function CartIcon({ iconName, path }) {
  const { productsQuantity } = useAppContext();

  return (
    <>
      <NavLink to={path}>
        {iconName === "shopping-bag" ? (
          <>
            <i className={`fas fa-${iconName} icons`}>
              <div className="icons__number">
                <span>{productsQuantity()}</span>
              </div>
            </i>
          </>
        ) : (
          <i className={`fas fa-${iconName} icons`}></i>
        )}
      </NavLink>
    </>
  );
}
