import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useAppContext from "../../context/useAppContext";
import "./SignUp.scss";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const { user } = useAppContext();
  return (
    <div id="SignUp" className="signup">
      {user ? (
        <div className="signup__user">
          <p className="signup__user__saludo">Hola</p>
          <p className="signup__user__name">{user.displayName}</p>
        </div>
      ) : (
        <NavLink to="/login/" className=" signup__user__name--a ">
          Iniciar Sesión
        </NavLink>
      )}
      <NavLink to="/login/">
        <AccountCircleIcon className="icons" />
      </NavLink>
    </div>
  );
}
