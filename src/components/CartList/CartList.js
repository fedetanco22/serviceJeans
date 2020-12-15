import Cart from "../Cart/Cart";
import "./CartList.scss";

export default function CartList({ products }) {
  return (
    <div id="Cart">
      <div className="cart__titulos container">
        <h6 className="cart__titulos__text">Producto</h6>
        <h6 className="cart__titulos__text">Descripción</h6>
        <h6 className="cart__titulos__text">Cantidad</h6>
        <h6 className="cart__titulos__text">Precio</h6>
      </div>
      {products.map((product, key) => (
        <Cart key={key} product={product} />
      ))}
    </div>
  );
}
