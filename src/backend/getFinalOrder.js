import { getFirestore } from "./firebase/index";

export default function getOrder() {
  return new Promise((resolve, reject) => {
    const query = getFirestore().collection("orders");

    // Pedimos los datos
    query.get().then((response) => {
      if (response.size === 0) reject("Empty");
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log("🚀 ~ file: getFinalOrder.js ~ line 14 ~ data ~  data", data);
      resolve(data);
    });
  });
}
