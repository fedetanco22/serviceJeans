export default function FormValidation(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Debe insertar el Titular de la tarjeta";
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = "Insertar un nombre válido";
  }

  if (!values.number.trim()) {
    errors.number = "Debe insertar el Numero de la tarjeta";
  } else if (
    !/^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}| 222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/.test(
      values.number.trim()
    )
  ) {
    errors.number = "Tarjeta inválida";
  }

  //   if (!values.email) {
  //     errors.email = "Email required";
  //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //     errors.email = "Email address is invalid";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 6) {
  //     errors.password = "Password needs to be 6 characters or more";
  //   }

  //   if (!values.password2) {
  //     errors.password2 = "Password is required";
  //   } else if (values.password2 !== values.password) {
  //     errors.password2 = "Passwords do not match";
  //   }
  return errors;
}
