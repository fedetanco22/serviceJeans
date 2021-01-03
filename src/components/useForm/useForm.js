import { useState, useEffect } from "react";

export default function Form(submitForm, validate) {
  // const { products, totalPrice, user } = useAppContext();
  const [values, setValues] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvv: "",
    // cardType: "💳",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [errors, isSubmitting, submitForm]);

  return { handleChange, handleSubmit, values, errors };
}
