export default function FormValidation(values) {
  let errors = {};
  const mes = Number(new Date().getMonth()); // 11
  const year = Number(new Date().getFullYear().toString().substr(-2)); // 2020
  const monthInserted = parseInt(Number(values.month));
  const yearInserted = parseInt(Number(values.year));

  console.log("date hoy ", mes + "/" + year);

  if (!values.name.trim()) {
    errors.name = "Insertar el Titular de la tarjeta";
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = "Nombre Inválido";
  }

  if (!values.number.trim()) {
    errors.number = "Insertar el Numero de la tarjeta";
  } else if (
    !/^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}| 222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/.test(
      values.number.trim()
    )
  ) {
    errors.number = "Tarjeta inválida";
  }

  if (!values.cvv.trim()) {
    errors.cvv = "Inserte CVV";
  } else if (!/^\d{3,3}$/.test(values.cvv.trim())) {
    errors.cvv = "CVV inválido";
  }

  if (!values.month.trim()) {
    errors.month = "Inserte Mes";
  } else if (!/^\d{2,2}$/.test(values.month.trim())) {
    errors.month = "Mes inválido";
  }

  if (!values.year.trim()) {
    errors.year = "Inserte Año";
  } else if (!/^\d{2,2}$/.test(values.year.trim())) {
    errors.year = "Año inválido";
  }
  if (monthInserted <= 0 || monthInserted > 12) {
    errors.month = "Mes inválido";
  }
  if (mes >= monthInserted || year >= yearInserted) {
    errors.fecha = "Fecha inválida";
  }

  return errors;
}

// mes 11
// year 20
