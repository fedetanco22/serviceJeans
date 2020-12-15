import useAppContext from "../../context/useAppContext";

import Cart from "../../components/Cart/Cart";
import "../../components/Button/Button.scss";

export default function CartContainer() {
  const { products } = useAppContext();

  return (
    <>
      <Cart products={products} />
    </>
  );
}
