import { useState, useEffect } from "react";
// import addOrder from "../../backend/addOrder";
import useAppContext from "../../context/useAppContext";
import { getFirestore } from "../../backend/firebase/index";

export default function Form(submitForm, validate) {
  const { products, totalPrice, user } = useAppContext();
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
  const [orderId, setOrderId] = useState();

  const addOrder = (products, totalPrice, user) => {
    let newOrder = {
      buyer: {
        name: user.displayName,
        email: user.email,
      },
      items: products,
      date: new Date(),
      total: totalPrice(),
    };

    const query = getFirestore();
    query
      .collection("orders")
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
        console.log(orderId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      addOrder(products, totalPrice, user);
      submitForm();
    }
  }, [errors, isSubmitting]);

  return { handleChange, handleSubmit, values, errors, orderId };
}
