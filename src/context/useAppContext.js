import { createContext, useContext, useState, useEffect } from "react";
import swal from "sweetalert";
import firebase from "firebase/app";
import { useLocalStorage } from "../components/useLocalStorage/useLocalStorage";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext); //Custum Hook para solo importar useAppContext y AppProvider

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useLocalStorage("products", []);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID, // Other providers don't need to be given as object.
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
        setUser(user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
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

    swal(
      "Excelente!",
      `Agregaste ${quantity} ${product.title} al carrito de compras!`, ///Cambiar de lugar desp///
      "success"
    );
  };

  const handleQuantity = (product, quantity) => {
    product.quantity = quantity;
    setProducts([...products]);
    console.log("mnisil", products);
  };

  //Total Quantity in Cart
  const productsQuantity = () => {
    return products.reduce((acc, product) => (acc += product.quantity), 0);
  };

  // Delete Product from List
  const deleteProduct = (id) => {
    products.splice(
      products.findIndex((product) => product.id === id),
      1
    );
    setProducts([...products]);
  };

  // Total $ Shopping Cart
  const totalPrice = () => {
    return products.reduce(
      (acc, product) => (acc += product.quantity * product.price),
      0
    );
  };

  const emptyCart = () => {
    products.splice(0, products.length);
    return setProducts([...products]);
  };

  return (
    <AppContext.Provider
      value={{
        uiConfig,
        isSignedIn,
        user,
        products,
        addProduct,
        handleQuantity,
        productsQuantity,
        deleteProduct,
        totalPrice,
        emptyCart,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default useAppContext;
