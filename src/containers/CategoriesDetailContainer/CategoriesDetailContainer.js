import CategoryDetail from "../../components/CategoryDetail/CategoryDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProductsByCategory from "../../backend/itemCategory";

export default function CategoriesDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      getProductsByCategory(categoryId).then((result) => {
        console.log(result, "hola");
      });
    }, 2000);
  }, []);

  return (
    <>
      <CategoryDetail />
    </>
  );
}
