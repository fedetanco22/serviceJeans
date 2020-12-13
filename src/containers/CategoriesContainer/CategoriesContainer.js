// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getFirestore } from "../../firebase";

import CategoryList from "../../components/CategoryList/CategoryList";

// import Spinner from "../../components/Spinner/Spinner";
import "./CategoriesContainer.scss";

export default function CategoriesContainer() {
  // Traer Array de Productos
  // useEffect(() => {
  //   setTimeout(() => {
  //     //     // Referencia
  //     //     const db = getFirestore();
  //     //     const itemCollection = db.collection("productos");
  //     //     const categorie = itemCollection.where("categoryId", "==", categoryId);
  //     //     // Pedimos los datos
  //     //     categorie.get().then((response) => {
  //     //       const categ = response.docs.map((docum) => {
  //     //         return docum.data();
  //     //       });
  //     //       // Guardamos en un state
  //     //       setCategory(categ);
  //     setLoading(false);
  //     //     });
  //   }, 2000);
  // }, []);

  return (
    <>
      <CategoryList />
    </>
  );
}
