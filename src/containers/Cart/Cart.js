import useAppContext from "../../context/useAppContext";
import "./Cart.scss";

export default function Cart() {
  const { products } = useAppContext();
  console.log(products);
  return (
    <div id="Cart">
      {products.length === 0 ? (
        <h3>El carrito de compras está vacío</h3>
      ) : (
        products.map((product, idx) => (
          <div key={idx} className="container">
            <h1> {product.name} </h1>
            <h1> {product.quantity} </h1>
            <img
              src={product.image}
              alt={`img-${product.id}`}
              className="w-2"
            />
          </div>
        ))
      )}
    </div>
  );
}
