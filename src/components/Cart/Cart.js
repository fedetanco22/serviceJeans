import useAppContext from "../../context/useAppContext";

export default function Cart({ product }) {
  const { deleteProduct, addQuantity, substractQuantity } = useAppContext();

  const deleteItem = () => {
    deleteProduct();
  };
  const add = () => {
    addQuantity(product, product.quantity);
  };
  const substract = () => {
    substractQuantity(product, product.quantity);
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
          <h6 className="cart__cantidad"> {product.quantity} </h6>
          <div className="cart__flechas">
            <i class="fas fa-chevron-up cart__flechas--up" onClick={add}></i>
            <i
              class="fas fa-chevron-down cart__flechas--down"
              onClick={substract}></i>
          </div>
        </div>
        <div className="cart__items">
          <h6 className="cart__precio"> {product.price} </h6>
        </div>
        <div className="cart__items">
          <i
            className="far fa-trash-alt cart__eliminar"
            onClick={deleteItem}></i>
        </div>
      </div>
    </div>
  );
}
