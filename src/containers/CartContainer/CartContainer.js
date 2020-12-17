import { useState } from "react";
import useAppContext from "../../context/useAppContext";
import Button from "../../components/Button/Button";

import CartList from "../../components/CartList/CartList";
import "../../components/Button/Button.scss";

export default function CartContainer() {
  const { products, totalPrice } = useAppContext();

  return (
    <div id="CartContainer">
      <h1 className="cart__cart">Carrito</h1>
      {products.length === 0 ? (
        <div className="cart__vacio">
          <h3 className="titulo">
            Actualmente no tienes artículos en tu Carrito
          </h3>
          <Button
            path="/"
            content="Volver a comprar"
            className="button__agregar"
          />
        </div>
      ) : (
        <div>
          <CartList products={products} />
          <h1>Total $ {totalPrice()}</h1>
        </div>
      )}
    </div>
  );
}
