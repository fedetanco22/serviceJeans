import { getFirestore } from "./firebase/index";

export default function addOrder() {
	/* let newOrder = {
		buyer,
	}; */
	const query = getFirestore().add("orders");
}
