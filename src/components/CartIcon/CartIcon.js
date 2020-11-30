import { NavLink } from "react-router-dom";

import "./CartIcon.scss";

export default function CartIcon({ iconName }) {
  return (
    <>
      <NavLink to="/cart/">
        <ul className="d-flex justify-content-between align-items-center">
          <li className={`fas fa-${iconName} icons`}></li>
        </ul>
      </NavLink>
    </>
  );
}
