// import {useState, useEffect} from 'react';
import { useState, useEffect } from "react";
// import { getFirestore } from "../../firebase";
import ItemList from "../../components/ItemList/ItemList";

import Spinner from "../../components/Spinner/Spinner";
import foto from "../../assets/images/3.png";
import "./Home.scss";
import getProducts from "../../backend/products";

export default function Home({ greeting }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Traer Array de Productos
  useEffect(() => {
    setTimeout(() => {
      getProducts().then((result) => {
        setProducts(result);
        setLoading(false); // aca recibimos los resultados por eso sacamos el loading
      });
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <main>
          <section className="banner">
            <img src={foto} alt="foto1" className="w-100" />
          </section>
          <div className="container">
            <div>
              <h1 className="text-center p-4">{greeting}</h1>
            </div>
            <ItemList products={products} />
          </div>
        </main>
      )}
    </>
  );
}
