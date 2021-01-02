import { useEffect, useState } from "react";
import { addOrderAndGetId } from "../../backend/addOrder";
import useAppContext from "../../context/useAppContext";

import Spinner from "../Spinner/Spinner";

export default function FormSuccess() {
  const { products, totalPrice, user } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    setTimeout(() => {
      addOrderAndGetId(products, user, totalPrice).then((result) => {
        setOrderId(result);
        setLoading(false);
      });
    }, 2000);
  }, [products, user, totalPrice]);

  return (
    <div id="OrderId">
      {loading ? (
        <Spinner />
      ) : (
        <div className="">
          <h1>Tu numero de Compra es: {orderId}</h1>
        </div>
      )}
    </div>
  );
}
