import { useEffect, useState } from "react";
import addOrders from "../../backend/addOrder";
import Spinner from "../Spinner/Spinner";
// import { getFirestore } from "../../backend/firebase/index";
// import useForm from "../useForm/useForm";

export default function FormSuccess() {
  const [loading, setLoading] = useState(true);
  // const [orderId, setOrderId] = useState();

  useEffect(() => {
    setTimeout(() => {}, 1000);
    setLoading(false); // aca recibimos los resultados por eso sacamos el loading
  }, []);

  return <div>{loading ? <Spinner /> : <h1>Tu numero de Compra es: </h1>}</div>;
}
