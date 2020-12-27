import { useState, useEffect } from "react";
import getOrder from "../../backend/getFinalOrder";
import Spinner from "../../components/Spinner/Spinner";

export default function FinalOrder() {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState();

  useEffect(() => {
    setTimeout(() => {
      getOrder().then((result) => {
        setOrder(result);
        setLoading(false);
      });
    }, 2000);
  }, []);

  return <>{loading ? <Spinner /> : <h1>{order.id}</h1>}</>;
}
