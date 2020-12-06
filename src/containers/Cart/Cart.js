import useAppContext from "../../context/useAppContext";
import "./Cart.scss";

export default function Cart() {
  const { products } = useAppContext();
  console.log(products);

  return (
    <div id="Cart">
      {products.map((product, idx) => (
        <div key={idx}>
          <h1> {product.name} </h1>
          <h1> {product.quantity} </h1>
          <img src={product.image} />
        </div>
      ))}
    </div>
  );
}
