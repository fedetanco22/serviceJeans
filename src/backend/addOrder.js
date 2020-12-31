import { getFirestore } from "./firebase/index";

export default function addOrder(user, cart, totalPrice) {
  let newOrder = {
    buyer: {
      name: user.displayName,
    },
    items: cart,
    date: new Date(),
    total: totalPrice(),
  };

  const query = getFirestore();
  query.collection("orders").add(newOrder);
}
