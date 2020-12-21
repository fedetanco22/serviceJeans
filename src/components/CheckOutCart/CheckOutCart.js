export default function CheckOutCart({ product }) {
	return (
		//CAMBIAR CLASES Y ESTILOS
		<div className='container cart'>
			<div className='cart__detail container'>
				<div className='cart__items'>
					<h6 className='cart__cantidad'> {product.quantity} </h6>
				</div>
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
					<h6 className='cart__precio'> {product.price} </h6>
				</div>
			</div>
		</div>
	);
}
