import { useState } from "react";
import "./ItemCounter.scss";

import "./ItemCounter.scss";
import "../Button/Button.scss";

export default function ItemCounter({ initialValue, maxValue, onAdd }) {
  const [contador, setContador] = useState(initialValue);

  const addToCounter = () => {
    if (contador < maxValue) {
      setContador((prevContador) => {
        let contador = prevContador + 1;
        onAdd(contador);
        return contador;
      });
    }
  };

  const substractCounter = () => {
    if (contador > initialValue) {
      setContador((prevContador) => {
        let contador = prevContador - 1;
        onAdd(contador);
        return contador;
      });
    }
  };

  return (
    <div id="ItemCounter" className="contador">
      <div className=" contador__buttons">
        <p className="contador__num"> {contador} </p>
        <button className="button__counter" onClick={substractCounter}>
          -
        </button>
        <button className="button__counter" onClick={addToCounter}>
          +
        </button>
      </div>
    </div>
  );
}

// useState me devuelve un arr con un valor (contador) y una funcion (setContador)

// useEffect(() => {
//   // si queremos que se aplique solo a onMount usamos un arr vacio
//   // return es el cleanUp
// }, []); // [contador] se actualice o cambie cuando se modifique contador , [] se ejecute solo al montar
