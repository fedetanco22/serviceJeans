import { getFirestore } from "./firebase/index";

export default function getProductsById(id) {
  return new Promise((resolve, reject) => {
    const query = getFirestore().collection("productos").doc(id);
    // Pedimos los datos
    query.get().then((response) => {
      if (response.size === 0) reject("Empty");
      const data = { ...response.data(), id: response.id };
      resolve(data);
    });
  });
}
