import { NavLink } from "react-router-dom";
import "./Item.scss";

export default function Item({ item }) {
  return (
    <div id="Item" className="listItem">
      <NavLink to={`/item/${item.id}`}>
        <img src={item.image} alt={item.id} className="listItem__img" />
        <p className="listItem__titulo">{item.name}</p>
        <p className="listItem__precio">$ {item.price}</p>
      </NavLink>
    </div>
  );
}
