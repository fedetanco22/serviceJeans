import { Link } from "react-router-dom";

export default function AddItemButton({ contador, callback }) {
  return (
    <Link to="/cart/">
      <button className="contador__btn--comprar" onClick={callback}>
        Comprar ({contador})
      </button>
    </Link>
  );
}
