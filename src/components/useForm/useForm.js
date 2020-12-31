import { useState, useEffect } from "react";
import addOrder from "../../backend/addOrder";
import useAppContext from "../../context/useAppContext";

export default function Form(callback, validate) {
  const { products, totalPrice, user } = useAppContext();

  const [values, setValues] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvv: "",
    cardType: "💳",
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
      addOrder(user, products, totalPrice);
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
}
