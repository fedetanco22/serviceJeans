import useAppContext from "../../context/useAppContext";
import Button from "../../components/Button/Button";
import CheckOutCart from "../../components/CheckOutCart/CheckOutCart";
// import Input from "../../components/Input/Input";
import addOrder from "../../backend/addOrder";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

import "./CheckOutContainer.scss";

export default function CheckOutContainer() {
  const { products, totalPrice, uiConfig, isSignedIn, user } = useAppContext();

  const createOrder = () => {
    addOrder(products, user, totalPrice);
  };
  return (
    <>
      {/* Detalle de compra- products q recibo de context */}
      <div>
        {products.map((product) => (
          <CheckOutCart key={product.id} product={product} />
        ))}
      </div>
      {/* component formulario */}

      {/* Button comprar que genere mi Order, con un on click db.firestore.add() */}
      <div className="cart__items">
        <h5>Total ${totalPrice()}</h5>
      </div>

      {!isSignedIn ? (
        <div>
          <h6 className="login__titulo">
            Para finalizar la compra deberás iniciar sesión
          </h6>

          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      ) : (
        <div className="checkout container">
          <h6 className="checkout__titulo">
            Bienvenido{" "}
            <span className="checkout__titulo--weight">
              {firebase.auth().currentUser.displayName}
            </span>
            ! Finalizá tu compra!
          </h6>

          <Button
            path={"/order/"}
            className={"button__agregar"}
            content={"Finalizar Compra"}
            callback={createOrder}
          />
        </div>
      )}
    </>
  );
}
