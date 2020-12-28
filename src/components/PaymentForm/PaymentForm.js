import React, { useState } from "react";
import "./PaymentForm.scss";

export default function PaymentForm({ callback }) {
  const [payment, setPayment] = useState({
    payment: {
      cardNumber: "0000 0000 0000 0000",
      cardHolderName: "",
      cardExpirationDate: "",
      cardCVV: "",
      cardType: "💳",
    },
  });
  const [cardName, setCardName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [ccv, setCCV] = useState();
  const [date, setDate] = useState();

  const handleChangeName = (event) => {
    event.preventDefault();
    const valueInputs = event.target.value;
    setCardName(valueInputs);
  };
  const handleChangeNumber = (event) => {
    event.preventDefault();
    const valueInputs = event.target.value;
    setCardName(valueInputs);
  };
  const handleChangeCVV = (event) => {
    event.preventDefault();
    const valueInputs = event.target.value;
    setCardName(valueInputs);
  };
  const handleChangeDate = (event) => {
    event.preventDefault();
    const valueInputs = event.target.value;
    setCardName(valueInputs);
  };

  return (
    <div>
      <h1>Pago con Tarjeta de Credito</h1>
      <form className="container d-flex flex-column form">
        <input
          type="text"
          name="name"
          placeholder="Titular"
          maxLength="19"
          autoComplete="off"
          className="form__input"
          value={cardName}
          onChange={handleChangeName}
        />
        <input
          type="text"
          name="number"
          placeholder="Numero de Tarjeta de Credito"
          maxLength="16"
          autoComplete="off"
          className="form__input"
          value={cardNumber}
          onChange={handleChangeNumber}
        />
        <div>
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            className="form__input"
            value={ccv}
            onChange={handleChangeCVV}
          />
          <input
            type="text"
            name="date"
            placeholder="mm/year"
            className="form__input"
            value={date}
            onChange={handleChangeDate}
          />
        </div>
        <input
          type="submit"
          value="Finalizar compra "
          className="button__agregar"
          onSubmit={callback}
        />
      </form>
    </div>
  );
}
