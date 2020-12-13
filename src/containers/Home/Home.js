// import {useState, useEffect} from 'react';
import { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import ItemList from "../../components/ItemList/ItemList";

import Spinner from "../../components/Spinner/Spinner";
import foto from "../../assets/images/3.png";
import "./Home.scss";

export default function Home({ greeting }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Traer Array de Productos
  useEffect(() => {
    setTimeout(() => {
      // Referencia
      const db = getFirestore();
      const itemCollection = db.collection("productos").limit(8);
      // Pedimos los datos
      itemCollection.get().then((response) => {
        if (response.size) {
          const data = response.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          setProducts(data);
        }
        // Guardamos en un state
        setLoading(false);
      });
    }, 2000);
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
