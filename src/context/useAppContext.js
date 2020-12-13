import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext); //Custum Hook para solo importar useAppContext y AppProvider

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

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
    <AppContext.Provider value={{ products, addProduct, productsQuantity }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
