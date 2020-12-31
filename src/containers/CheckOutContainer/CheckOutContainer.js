import useAppContext from "../../context/useAppContext";
import CheckOutCart from "../../components/CheckOutCart/CheckOutCart";
// import addOrder from "../../backend/addOrder";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import "./CheckOutContainer.scss";
import Form from "../../components/FormPayment/FormPayment";

export default function CheckOutContainer() {
  const { products, totalPrice, uiConfig, isSignedIn } = useAppContext();

  // const createOrder = (products, user, totalPrice) => {
  //   addOrder(products, user, totalPrice);
  // };
  return (
    <div id="CheckOut" className="checkout container">
      <div className="checkout__sections checkout__sections--detalle ">
        <h1 className="checkout__titulo">Detalle de compra</h1>
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
      </div>

      {!isSignedIn ? (
        <div className="checkout__sections checkout__sections--login">
          <h6 className="nocheckout__login__titulo">
            Para finalizar la compra deberás iniciar sesión
          </h6>

          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      ) : (
        <div className="checkout__sections checkout__sections--pago">
          <h6 className="checkout__titulo">
            Bienvenido{" "}
            <span className="checkout__titulo--weight">
              {firebase.auth().currentUser.displayName}
            </span>
            ! Finalizá tu compra!
          </h6>
          {/* Formulario de pago */}
          <Form />
        </div>
      )}
    </div>
  );
}
