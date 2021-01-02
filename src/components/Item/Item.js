import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Item.scss";
import useAppContext from "../../context/useAppContext";
import SvgIcon from "@material-ui/core/Icon";

export default function Item({ item }) {
  const [quantity] = useState(1);
  const { addProduct } = useAppContext();

  const addItem = () => {
    addProduct(item, quantity);
  };

  return (
    <div id="Item" className="listItem">
      <NavLink to={`/item/${item.id}`} className="listItem__link">
        <img
          src={item.image}
          alt={`img-${item.id}`}
          className="listItem__img"
        />
        <div className="listItem__descrip">
          <p className="listItem__descrip__titulo">{item.title}</p>
          <p className="listItem__descrip__precio">$ {item.price}</p>
        </div>
      </NavLink>
      <SvgIcon
        className="listItem__descrip__plusIcon fas fa-plus-circle"
        color="secondary"
        onClick={addItem}
      />
    </div>
  );
}
