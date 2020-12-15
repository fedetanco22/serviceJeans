import { createContext, useContext, useState } from "react";
import swal from "sweetalert";

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

    swal(
      "Excelente!",
      `Agregaste ${quantity} ${product.title} al carrito de compras!`, ///Cambiar de lugar desp///
      "success"
    );
  };

  //Total Quantity in Cart
  const productsQuantity = () => {
    return products.reduce((acc, product) => (acc += product.quantity), 0);
  };

  // Delete Product from List
  const deleteProduct = () => {
    products.splice(0, 1);
    setProducts([...products]);
  };

  // Add, Substract Quantity from Products
  const addQuantity = (product, quantity) => {
    product.quantity += quantity;
    setProducts([...products]);
  };
  const substractQuantity = (product, quantity) => {
    product.quantity += quantity;
    setProducts([...products]);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        addProduct,
        productsQuantity,
        deleteProduct,
        addQuantity,
        substractQuantity,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
