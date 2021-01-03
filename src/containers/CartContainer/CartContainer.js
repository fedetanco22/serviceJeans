// import { useState } from "react";
import useAppContext from "../../context/useAppContext";
import Button from "../../components/Button/Button";
import "./CartContainer.scss";
import CartList from "../../components/CartList/CartList";
import "../../components/Button/Button.scss";

export default function CartContainer() {
  const { products } = useAppContext();

  return (
    <div id="CartContainer" className="cartContainer">
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
        </div>
      )}
    </div>
  );
}
