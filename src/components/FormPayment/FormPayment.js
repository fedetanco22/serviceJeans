import "./FormPayment.scss";
import useForm from "../useForm/useForm";

export default function FormPayment({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    // validate
  );
  console.log("🚀 ", values);

  return (
    <div>
      <h1>Pago con Tarjeta de Credito</h1>
      <form
        className="container d-flex flex-column form"
        onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ingrese Nombre del Titular"
          maxLength="19"
          autoComplete="off"
          className="form__input"
          value={values.name}
          onChange={handleChange}
        />
        {errors.cardName && <p>{errors.cardName}</p>}
        <input
          type="text"
          name="number"
          placeholder="Ingrese Numero de Tarjeta de Credito"
          maxLength="16"
          autoComplete="off"
          className="form__input"
          value={values.number}
          onChange={handleChange}
        />
        {errors.cardNumber && <p>{errors.cardNumber}</p>}
        <div>
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            maxLength="3"
            minLength="3"
            className="form__input"
            value={values.cvv}
            onChange={handleChange}
          />
          {errors.cvv && <p>{errors.cvv}</p>}
          <input
            type="select"
            name="month"
            placeholder="Mes"
            maxLength="2"
            className="form__input"
            value={values.month}
            onChange={handleChange}
          />
          {errors.date && <p>{errors.date}</p>}
          <input
            type="select"
            name="year"
            placeholder="Año"
            maxLength="2"
            className="form__input"
            value={values.year}
            onChange={handleChange}
          />
          {errors.date && <p>{errors.date}</p>}
        </div>
        <input
          type="submit"
          value="Finalizar compra "
          className="button__agregar"
          // onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}
