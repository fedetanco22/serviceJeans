import { Link } from "react-router-dom";

export default function AddItemButton({ contador, handleAddToCart }) {
  return (
    <Link to="/cart/">
      <button className="contador__btn--comprar" onClick={handleAddToCart}>
        Comprar ({contador})
      </button>
    </Link>
  );
}
