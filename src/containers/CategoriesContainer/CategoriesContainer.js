import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProductsbyCategory from "../../backend/categories";

import CategoryList from "../../components/CategoryList/CategoryList";

// import Spinner from "../../components/Spinner/Spinner";
import "./CategoriesContainer.scss";

export default function CategoriesContainer() {
  const { categoryId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      getProductsbyCategory(categoryId).then((result) => {
        console.log(result, "holaaaa");
        /* setProducts(result);
        setLoading(false); */
        // aca recibimos los resultados por eso sacamos el loading
      });
    }, 1000);
  }, []);

  return (
    <>
      <CategoryList />
    </>
  );
}
