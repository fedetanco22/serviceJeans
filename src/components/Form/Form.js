import { useState } from "react";
// import "./Form.scss";
import FormPayment from "../FormPayment/FormPayment";
import FormSuccess from "../FormSuccess/FormSuccess";

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log("🚀 ~ file: Form.js ~ line 8 ~ Form ~ isSubmitted", isSubmitted);

  const submitForm = () => {
    setIsSubmitted(true);
    console.log(
      "🚀 ~ file: Form.js ~ line 12 ~ submitForm ~ IsSubmitted",
      IsSubmitted
    );
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
