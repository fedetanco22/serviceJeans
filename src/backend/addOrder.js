import { getFirestore } from "./firebase/index";

export const addOrderAndGetId = (products, user, totalPrice) => {
  let newOrder = {
    buyer: {
      name: user.displayName,
      email: user.email,
    },
    items: products,
    date: new Date(),
    total: totalPrice(),
  };
  return new Promise((resolve, reject) => {
    getFirestore()
      .collection("orders")
      .add(newOrder)
      .then((response) => {
        if (response.size === 0) reject("Empty");
        const data = response.id;
        resolve(data);
      });
  });
};
