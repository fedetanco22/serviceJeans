import useAppContext from "../../context/useAppContext";
import Button from "../../components/Button/Button";
import CheckOutCart from "../../components/CheckOutCart/CheckOutCart";
import Input from "../../components/Input/Input";
import addOrder from "../../backend/addOrder";

export default function CheckOutContainer() {
	const { products, totalPrice } = useAppContext();

	const createOrder = () => {
		addOrder();
	};
	return (
		<>
			{/* Detalle de compra- products q recibo de context */}
			<div>
				{products.map((product) => (
					<CheckOutCart key={product.id} product={product} />
				))}
			</div>
			{/* component formulario */}
			<form action='' method='get'>
				<Input />
			</form>
			{/* Button comprar que genere mi Order, con un on click db.firestore.add() */}
			<div className='cart__items'>
				<h5>Total ${totalPrice()}</h5>
			</div>
			<Button
				path={"/thankyou/"}
				className={"button__agregar"}
				content={"Finalizar Compra"}
				callback={createOrder}
			/>
		</>
	);
}
