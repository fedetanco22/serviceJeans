// import {useState, useEffect} from 'react';
import { useState, useEffect } from "react";
import useAppContext from "../../context/useAppContext";
import ItemList from "../../components/ItemList/ItemList";
import getProdFromDatabase from "../../dataBase/db";
import Spinner from "../../components/Spinner/Spinner";
import foto from "../../assets/images/3.png";
import "./Home.scss";

export default function Home({ greeting }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { data } = useAppContext();

  setTimeout(() => {
    console.log(data);
  }, 3000);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getProdFromDatabase()
        .then((result) => {
          // Simulamos un fetch
          return JSON.parse(result);
        })
        .then((result) => {
          setProducts(result);
          setLoading(false); // aca recibimos los resultados por eso sacamos el loading
        });
    }, 1000);
  }, []);

  return (
    <main>
      <section className="banner">
        <img src={foto} alt="foto1" className="w-100" />
      </section>
      <div className="container">
        <div>
          <h1 className="text-center p-4">{greeting}</h1>
        </div>
        {loading ? <Spinner /> : <ItemList products={data} />}
        {/* Va a Item Detail */}{" "}
      </div>
    </main>
  );
}
