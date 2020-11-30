// import {useState, useEffect} from 'react';

import { NavLink } from "react-router-dom";
import Item from "../Item/Item.js";
import "./ItemList.scss";

export default function ItemList({ products }) {
  return (
    <div id="itemList" className="itemList">
      {products.map((product, index) => {
        return (
          <NavLink to={`/item/${product.id}`} key={index}>
            <Item item={product} />
          </NavLink>
        );
      })}{" "}
    </div>
  );
}
