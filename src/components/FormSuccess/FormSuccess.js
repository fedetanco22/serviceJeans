import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { addOrderAndGetId } from "../../backend/addOrder";
import useAppContext from "../../context/useAppContext";
import Spinner from "../Spinner/Spinner";
import "./FormSuccess.scss";

export default function FormSuccess() {
  const [loading, setLoading] = useState(true);
  const [orderId, setOrderId] = useState("");
  const { products, totalPrice, user, emptyCart } = useAppContext();

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      addOrderAndGetId(products, user, totalPrice).then((result) => {
        if (mounted) {
          setOrderId(result);
          setLoading(false);
          emptyCart();
          window.localStorage.clear();
        }
      });
      return function cleanup() {
        mounted = false;
      };
    }, 2000);
    // eslint-disable-next-line
  }, []);

  return (
    <div id="OrderSuccess" className="container success">
      {loading ? (
        <Spinner />
      ) : (
        <div className="success__gracias">
          <h1 className="success__gracias__titulo">
            su compra se realizó con éxito ✅
          </h1>
          <h4>
            Id de seguimiento: <span className="success__id">{orderId}</span>
          </h4>

          <NavLink to="/">Volver al inicio</NavLink>
        </div>
      )}
    </div>
  );
}
