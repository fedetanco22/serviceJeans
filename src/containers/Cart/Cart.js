import useAppContext from "../../context/useAppContext";
import "./Cart.scss";

export default function Cart() {
  const { products } = useAppContext();

  return (
    <div id="Cart">
      {products.map((product, idx) => (
        <div key={idx} className="container">
          <h1> {product.name} </h1>
          <h1> {product.quantity} </h1>
          <img src={product.image} alt={`img-${product.id}`} className="w-2" />
        </div>
      ))}
    </div>
  );
}
