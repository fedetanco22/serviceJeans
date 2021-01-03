import { useState, useEffect } from "react";
import getCategory from "../../backend/categories";
import CategoryList from "../../components/CategoryList/CategoryList";

import Spinner from "../../components/Spinner/Spinner";
import "./CategoriesContainer.scss";

export default function CategoriesContainer() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getCategory().then((result) => {
        setCategory(result);
        setLoading(false);
        // aca recibimos los resultados por eso sacamos el loading
      });
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="home">
          <Spinner />
        </div>
      ) : (
        <div id="CategoryContainer" className="categoryContainer">
          <CategoryList categories={category} />
        </div>
      )}
    </>
  );
}
