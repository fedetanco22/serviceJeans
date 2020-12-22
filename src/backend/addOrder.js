import { getFirestore } from "./firebase/index";

export default function addOrder(cart, user, totalPrice) {
  let newOrder = {
    buyer: user.providerData,
    items: cart,
    date: new Date(),
    total: totalPrice(),
  };

  const query = getFirestore();
  query.collection("orders").add(newOrder);
}
