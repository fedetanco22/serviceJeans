import { NavLink } from "react-router-dom";
import "./Item.scss";
import useAppContext from "../../context/useAppContext";

export default function Item({ item }) {
  const { addProduct } = useAppContext();
  return (
    <div id="Item" className="listItem">
      <NavLink to={`/item/${item.id}`}>
        <img
          src={item.image}
          alt={`img-${item.id}`}
          className="listItem__img"
        />
        <p className="listItem__titulo">{item.title}</p>
        <p className="listItem__precio">$ {item.price}</p>
      </NavLink>
      <i className="plusIcon fas fa-plus-circle" onClick={() => {}}></i>
    </div>
  );
}
