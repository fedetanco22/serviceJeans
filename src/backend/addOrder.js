import { getFirestore } from "./firebase/index";

export default function addOrder(cart, buyer, totalPrice) {
	let newOrder = {
		buyer: buyer,
		items: cart,
		date: new Date(),
		total: totalPrice(),
	};

	const query = getFirestore();
	query.collection("orders").add(newOrder);
}
