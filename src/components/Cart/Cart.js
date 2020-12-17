import { useState } from "react";

import useAppContext from "../../context/useAppContext";

export default function Cart({ product }) {
	const [contador, setContador] = useState(product.quantity);
	const { deleteProduct } = useAppContext();

	const deleteItem = (product) => {
		deleteProduct(product.id);
	};
	const addToCounter = () => {
		if (contador < 10) {
			setContador((prevContador) => {
				let contador = prevContador + 1;

				return contador;
			});
		}
	};

	const substractCounter = () => {
		if (contador > 0) {
			setContador((prevContador) => {
				let contador = prevContador - 1;

				return contador;
			});
		}
	};

	return (
		<div className='container cart'>
			<div className='cart__detail container'>
				<div className='cart__img cart__items'>
					<img
						src={product.image}
						alt={`img-${product.id}`}
						className='cart__img-imagen'
					/>
				</div>
				<div className='cart__items'>
					<h5 className='cart__item'> {product.title} </h5>
				</div>
				<div className='cart__items'>
					<h6 className='cart__cantidad'> {contador} </h6>
					<div className='cart__flechas'>
						<i
							class='fas fa-chevron-up cart__flechas--up'
							onClick={addToCounter}></i>
						<i
							class='fas fa-chevron-down cart__flechas--down'
							onClick={substractCounter}></i>
					</div>
				</div>
				<div className='cart__items'>
					<h6 className='cart__precio'> {product.price} </h6>
				</div>
				<div className='cart__items'>
					<i
						className='far fa-trash-alt cart__eliminar'
						onClick={() => deleteItem(product)}></i>
				</div>
			</div>
		</div>
	);
}
