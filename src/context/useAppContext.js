import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext); //Custum Hook para solo importar useAppContext y AppProvider

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product, quantity) => {
    const existingProduct = products.find((prod) => prod.id === product.id);

    if (existingProduct) {
      product.quantity = +quantity;
      setProducts([...products]);
    } else {
      setProducts([...products, { ...product, quantity }]);
    }
  };

  return (
    <AppContext.Provider value={{ products, addProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
