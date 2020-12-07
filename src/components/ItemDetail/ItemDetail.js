import { useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import "./ItemDetail.scss";
// import Button from "../Button/Button";
import useAppContext from "../../context/useAppContext";

export default function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(1);

  const { addProduct } = useAppContext();

  const handleCounter = (contador) => {
    setQuantity(contador);
  };

  const addToCart = () => {
    addProduct(product, quantity);
    // alert(`Se agrego ${quantity} items a tu carrito.`);
  };

  return (
    <div id="Detail" className="container">
      <div className="item text-center m-3 mt-5 ">
        <img
          className="item__img"
          src={product.image}
          alt={`img-${product.id}`}
        />
        <div className="item__detail">
          <div className="item__txt">
            <p className="item__titulo">{product.name} </p>
            <p className="item__precio">{product.price} </p>
          </div>
          <ItemCounter
            initialValue={1}
            maxValue={15}
            onAdd={handleCounter}></ItemCounter>
          <button className="button__agregar" onClick={addToCart}>
            Añadir al carrito ({quantity})
          </button>
          {/* <Button
            classsName={"button__agregar"}
            path={"/cart/"}
            callback={addToCart}
            content={"Comprar"}
          /> */}
        </div>
      </div>
    </div>
  );
}
