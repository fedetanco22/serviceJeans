// import { useState } from "react";
import useAppContext from "../../context/useAppContext";
// import CheckOutCart from "../../components/CheckOutCart/CheckOutCart";
// import addOrder from "../../backend/addOrder";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import "../../containers/CheckOutContainer/CheckOutContainer.scss";
// import Form from "../../components/FormPayment/FormPayment";
import FormPayment from "../../components/FormPayment/FormPayment";
// import FormSuccess from "../../components/FormSuccess/FormSuccess";

export default function Login({ submitForm }) {
  const { uiConfig, isSignedIn } = useAppContext();

  return (
    <>
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
          <div className="form-container">
            <FormPayment submitForm={submitForm} />
          </div>
        </div>
      )}
    </>
  );
}
