// import {useState, useEffect} from 'react';
import Item from "../Item/Item.js";
import Spinner from "../Spinner/Spinner";
import "./ItemList.scss";

export default function ItemList({ products }) {
  return (
    <div id="itemList" className="itemList">
      {products ? (
        products.map((product, index) => {
          return <Item item={product} key={index} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
}
