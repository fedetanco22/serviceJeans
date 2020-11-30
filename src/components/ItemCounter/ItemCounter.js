import { useState, useEffect } from "react";
import "./ItemCounter.scss";
import AddItemButton from "../AddItemButton/AddItemButton";

export default function ItemCounter({ initialValue, maxValue, onAdd }) {
  const [contador, setContador] = useState(initialValue);
  // useState me devuelve un arr con un valor (contador) y una funcion (setContador)
  console.log(onAdd);
  useEffect(() => {
    // si queremos que se aplique solo a onMount usamos un arr vacio
    // return es el cleanUp
  }, []); // [contador] se actualice o cambie cuando se modifique contador , [] se ejecute solo al montar

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
    <div className="d-flex align-items-center justify-content-center contador">
      <div className=" d-flex flex-column justify-content-center contador__bottons">
        <button className="contador__btn" onClick={addToCounter}>
          +
        </button>
        <p className="contador__num"> {contador} </p>
        <button className="contador__btn" onClick={substractCounter}>
          -
        </button>
      </div>

      <AddItemButton onClick={handleAddToCart}></AddItemButton>
    </div>
  );
}
