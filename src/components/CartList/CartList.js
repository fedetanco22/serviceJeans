import useAppContext from "../../context/useAppContext";

import Cart from "../Cart/Cart";
import "./CartList.scss";

export default function CartList({ products }) {
	const { totalPrice } = useAppContext();
	return (
		<div id='Cart'>
			<div className='cart__titulos container'>
				<h6 className='cart__titulos__text'>Producto</h6>
				<h6 className='cart__titulos__text'>Descripción</h6>
				<h6 className='cart__titulos__text'>Cantidad</h6>
				<h6 className='cart__titulos__text'>Precio</h6>
			</div>
			<div>
				{products.map((product, key) => (
					<Cart key={key} product={product} />
				))}
			</div>
			<div>
				<h1>Total ${totalPrice()}</h1>
			</div>
		</div>
	);
}
