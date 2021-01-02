// import { getFirestore } from "./firebase/index";
// import getOrder from "./getOrderById";

// export default function addOrders(user, cart, totalPrice) {
//   let newOrder = {
//     buyer: {
//       name: user.displayName,
//       email: user.email,
//     },
//     items: cart,
//     date: new Date(),
//     total: totalPrice(),
//   };
//   return newOrder;

// const query = getFirestore();
// query.collection("orders").add(newOrder);
// // .then(({ id }) => {
//   getOrder(id);
// })
// .catch((err) => {
//   console.log(err);
// });

// return newOrder;
// }
