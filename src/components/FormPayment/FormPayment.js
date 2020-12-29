import "./FormPayment.scss";
import useForm from "../useForm/useForm";
import validate from "../../FormValidation/FormValidation";

export default function FormPayment({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

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
        {errors.name && <p>{errors.name}</p>}
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
        {errors.number && <p>{errors.number}</p>}
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
          {errors.month && <p>{errors.month}</p>}
          <input
            type="select"
            name="year"
            placeholder="Año"
            maxLength="2"
            className="form__input"
            value={values.year}
            onChange={handleChange}
          />
          {errors.year && <p>{errors.year}</p>}
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
