import { useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import useAppContext from "../../context/useAppContext";
import "./ItemDetail.scss";

export default function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(1);

  const { addProduct } = useAppContext();

  const handleCounter = (contador) => {
    setQuantity(contador);
  };

  const addToCart = () => {
    addProduct(product, quantity);
  };

  return (
    <div id="Detail" className="container ">
      <div className="item text-center m-3 mt-5 ">
        <img
          className="item__img"
          src={product.image}
          alt={`img-${product.id}`}
        />
        <div className="item__detail">
          <div className="item__txt">
            <p className="item__titulo">{product.title} </p>
            <p className="item__precio">{product.price} </p>
          </div>
          <ItemCounter initialValue={1} maxValue={15} onAdd={handleCounter} />
          <button className="button__agregar" onClick={addToCart}>
            Añadir al carrito ({quantity})
          </button>
        </div>
      </div>
    </div>
  );
}
