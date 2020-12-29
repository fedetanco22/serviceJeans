import { useState } from "react";
// import "./Form.scss";
import FormPayment from "../FormPayment/FormPayment";
import FormSuccess from "../FormSuccess/FormSuccess";

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {/* <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div> */}
        {!isSubmitted ? (
          <FormPayment submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
}

Form;
