import { getFirestore } from "./firebase/index";

export default function getProducts() {
  return new Promise((resolve, reject) => {
    const query = getFirestore().collection("productos").limit(8);
    // Pedimos los datos
    query.get().then((response) => {
      if (response.size === 0) reject("Empty");
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      resolve(data);
    });
  });
}
