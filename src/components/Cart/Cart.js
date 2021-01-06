import useAppContext from "../../context/useAppContext";
import CartCounter from "../CartCounter/CartCounter";

export default function Cart({ product }) {
  const { deleteProduct } = useAppContext();

  const deleteItem = (id) => {
    deleteProduct(id);
  };

  return (
    <div className="container cart">
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
          <CartCounter inicialValue={product.quantity} product={product} />
        </div>
        <div className="cart__items">
          <h6 className="cart__precio"> {product.price} </h6>
        </div>
        <div className="cart__items">
          <i
            className="far fa-trash-alt cart__eliminar"
            onClick={() => deleteItem(product.id)}></i>
        </div>
      </div>
    </div>
  );
}
