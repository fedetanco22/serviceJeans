import { NavLink } from "react-router-dom";

import "./CartIcon.scss";

export default function CartIcon({ iconName, callback }) {
  return (
    <>
      <NavLink to="/cart/">
        <ul className="d-flex justify-content-between align-items-center">
          <li className={`fas fa-${iconName} icons`} onClick={callback}></li>
        </ul>
      </NavLink>
    </>
  );
}

// {

//     icons.map(
//         (icon, key) => <li key={
//                 key.toString()
//             }
//             className="fa fa-li list-unstyled icons">
//             {icon}</li>
//     )
// }
