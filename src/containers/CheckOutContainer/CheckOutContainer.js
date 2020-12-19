import useAppContext from "../../context/useAppContext";
import Button from "../../components/Button/Button";
import addOrder from "../../backend/addOrder";

export default function CheckOutContainer() {
	const { products } = useAppContext();

	const createOrder = () => {
		addOrder();
	};
	return (
		// Detalle de compra- products q recibo de context

		/* component formulario */
		<>
			{/* Button comprar que genere mi Order, con un on click db.firestore.add() */}
			<Button
				path={"/thankyou/"}
				className={"button__agregar"}
				content={"Finalizar Compra"}
				callback={createOrder}
			/>
			<h1>Hola loxon</h1>
		</>
	);
}
