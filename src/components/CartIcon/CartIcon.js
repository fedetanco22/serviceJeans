import { NavLink } from "react-router-dom";

import "./CartIcon.scss";

export default function CartIcon({ iconName, path }) {
  return (
    <>
      <NavLink to={path}>
        <i className={`fas fa-${iconName} icons`}></i>
      </NavLink>
    </>
  );
}
