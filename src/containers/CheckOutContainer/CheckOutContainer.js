import useAppContext from "../../context/useAppContext";
import Button from "../../components/Button/Button";
import CheckOutCart from "../../components/CheckOutCart/CheckOutCart";
import addOrder from "../../backend/addOrder";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import "./CheckOutContainer.scss";
import Form from "../../components/FormPayment/FormPayment";

export default function CheckOutContainer() {
  const { products, totalPrice, uiConfig, isSignedIn, user } = useAppContext();

  const createOrder = (products, user, totalPrice) => {
    addOrder(products, user, totalPrice);
  };
  return (
    <div id="CheckOut" className="checkout">
      <h1>Detalle de compra</h1>
      {/* Detalle de compra- products q recibo de context */}
      <div>
        {products.map((product) => (
          <CheckOutCart key={product.id} product={product} />
        ))}
      </div>
      {/* Button comprar que genere mi Order, con un on click db.firestore.add() */}
      <div className="cart__items">
        <h5 className="cart__items__title">
          Total{" "}
          <span className="cart__buyTotal__title--bold">${totalPrice()}</span>
        </h5>
      </div>

      {!isSignedIn ? (
        <div className="nocheckout__login">
          <h6 className="nocheckout__login__titulo">
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
          {/* Formulario de pago */}
          {/* component formulario */}
          <Form callback={createOrder} />
          {/* <Button
            path={"/order/"}
            className={"button__agregar"}
            content={"Finalizar Compra"}
            
          /> */}
        </div>
      )}
    </div>
  );
}
