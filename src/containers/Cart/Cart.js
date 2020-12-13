import useAppContext from "../../context/useAppContext";
import Button from "../../components/Button/Button";
import "./Cart.scss";
import "../../components/Button/Button.scss";

export default function Cart() {
  const { products } = useAppContext();
  console.log(
    "🚀 ~ file: useAppContext.js ~ line 17 ~ addProduct ~ products",
    products
  );
  return (
    <div id="Cart">
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
        products.map((product, key) => (
          <div key={key} className="container cart">
            <div className="cart__detail container">
              <div className="cart__img cart__items">
                <img
                  src={product.image}
                  alt={`img-${product.id}`}
                  className="cart__img-imagen"
                />
              </div>
              <div className="cart__items">
                <h5 className="cart__item"> {product.title} </h5>
              </div>
              <div className="cart__items">
                <h6 className="cart__cantidad"> {product.quantity} </h6>
              </div>
              <div className="cart__items">
                <h6 className="cart__precio"> {product.price} </h6>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
