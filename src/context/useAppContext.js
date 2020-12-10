import { createContext, useContext, useState, useEffect } from "react";
import { getFirestore } from "../firebase";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext); //Custum Hook para solo importar useAppContext y AppProvider

export const AppProvider = ({ children }) => {
  const [data, setData] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    itemCollection.get().then((response) => {
      const data = response.docs.map((element) => {
        return element.data();
      });
      setData(data);
    });
  }, []);

  // Add Product to Cart
  const addProduct = (product, quantity) => {
    const existingProduct = products.find((prod) => prod.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
      setProducts([...products]);
    } else {
      setProducts([...products, { ...product, quantity }]);
    }
  };

  //Total Quantity in Cart
  const productsQuantity = () => {
    return products.reduce((acc, product) => (acc += product.quantity), 0);
  };

  return (
    <AppContext.Provider
      value={{ data, products, addProduct, productsQuantity }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
