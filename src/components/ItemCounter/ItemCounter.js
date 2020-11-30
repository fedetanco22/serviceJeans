import { useState, useEffect } from "react";
import "./ItemCounter.scss";
import AddItemButton from "../AddItemButton/AddItemButton";

export default function ItemCounter({ initialValue, maxValue, onAdd }) {
  const [contador, setContador] = useState(initialValue);
  // useState me devuelve un arr con un valor (contador) y una funcion (setContador)

  // useEffect(() => {
  //   // si queremos que se aplique solo a onMount usamos un arr vacio
  //   // return es el cleanUp
  // }, []); // [contador] se actualice o cambie cuando se modifique contador , [] se ejecute solo al montar

  const addToCounter = () => {
    if (contador < maxValue) {
      setContador((prevContador) => prevContador + 1);
    }
  };
  const substractCounter = () => {
    if (contador > initialValue) {
      setContador((prevContador) => prevContador - 1);
    }
  };
  const handleAddToCart = () => {
    onAdd(contador);
  };

  return (
    <div id="ItemCounter" className="contador">
      <div className=" contador__buttons">
        <p className="contador__num"> {contador} </p>
        <button className="contador__btn" onClick={substractCounter}>
          -
        </button>
        <button className="contador__btn" onClick={addToCounter}>
          +
        </button>
      </div>

      <AddItemButton
        onClick={handleAddToCart}
        contador={contador}></AddItemButton>
    </div>
  );
}
