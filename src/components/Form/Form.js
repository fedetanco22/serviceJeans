import { useState } from "react";
// import "./Form.scss";
import FormPayment from "../FormPayment/FormPayment";
import FormSuccess from "../FormSuccess/FormSuccess";

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="form-container">
        {!isSubmitted ? (
          <FormPayment submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
}
