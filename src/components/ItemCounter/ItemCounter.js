import {useState, useEffect} from 'react'
import './ItemCounter.scss'

export default function ItemCounter({initialValue, maxValue, onAdd}) {
    const [contador, setContador] = useState(initialValue)
    // useState me devuelve un arr con un valor (contador) y una funcion (setContador)

    useEffect(() => {

        // si queremos que se aplique solo a onMount usamos un arr vacio
        // return es el cleanUp
    }, []) // [contador] se actualice o cambie cuando se modifique contador , [] se ejecute solo al montar

    const addToCounter = () => {
        if (contador < maxValue) {
            setContador(prevContador => prevContador + 1)
        }
    };
    const substractCounter = () => {
        if (contador > initialValue) {
            setContador(prevContador => prevContador - 1)
        }
    };

    const handleAddToCart = () => {
        onAdd(contador)
    }

    return (<div className="d-flex align-items-center justify-content-center contador">
        <p className="contador__num align-content-center"> {contador} </p>

        <div className=" d-flex flex-column justify-content-center contador__bottons">
            <button className="contador__btn"
                onClick={addToCounter}>+</button>
            <button className="contador__btn"
                onClick={substractCounter}>-</button>
        </div>


        <button onClick={handleAddToCart}
            className="contador__btn--comprar ">
            Add to cart
        </button>


    </div>);

}
