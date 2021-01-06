import "./FormPayment.scss";
import useForm from "../useForm/useForm";
import validate from "../../FormValidation/FormValidation";

export default function FormPayment({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <h2 className="checkout__titulosPpales--tarjeta">
        Pago con Tarjeta de Credito
      </h2>
      <form className="container form form__container" onSubmit={handleSubmit}>
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
        {errors.name && <p className="form__errors">{errors.name}</p>}
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
        {errors.number && <p className="form__errors">{errors.number}</p>}
        <div className="form__container--small">
          <div className="form__input__small">
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              maxLength="3"
              className="form__input form__input--small"
              value={values.cvv}
              onChange={handleChange}
            />
            {errors.cvv && <p className="form__errors">{errors.cvv}</p>}
          </div>
          <div className="form__input--small">
            <div className="form__input__small ">
              <input
                type="select"
                name="month"
                placeholder="Mes"
                maxLength="2"
                className="form__input form__input--date"
                value={values.month}
                onChange={handleChange}
              />
              {errors.month && <p className="form__errors">{errors.month}</p>}
              {errors.fecha && <p className="form__errors">{errors.fecha}</p>}
            </div>
            <p> / </p>
            <div className="form__input__small">
              <input
                type="select"
                name="year"
                placeholder="Año"
                maxLength="2"
                className="form__input form__input--date"
                value={values.year}
                onChange={handleChange}
              />
              {errors.year && <p className="form__errors">{errors.year}</p>}
            </div>
          </div>
        </div>

        <button type="submit" className="button__agregar">
          Finalizar compra
        </button>
      </form>
    </>
  );
}
