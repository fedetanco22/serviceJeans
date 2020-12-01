import { useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import "./ItemDetail.scss";

export default function ItemDetail({ product }) {
  const [value, setValue] = useState(1);

  const addToCart = (value) => {
    setValue(value);
  };

  return (
    <div id="Detail" className="container">
      <div className="item text-center m-3 mt-5 ">
        <img className="item__img" src={product.image} alt={product.id} />
        <div className="item__detail">
          <div className="item__txt">
            <p className="item__titulo">{product.name} </p>
            <p className="item__precio">{product.price} </p>
          </div>
          <ItemCounter
            initialValue={value}
            maxValue={15}
            onAdd={addToCart}></ItemCounter>
        </div>
      </div>
    </div>
  );
}
