import CategoryDetail from "../../components/CategoryDetail/CategoryDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProductsByCategory from "../../backend/itemCategory";
import Spinner from "../../components/Spinner/Spinner";

export default function CategoriesDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      getProductsByCategory(categoryId).then((result) => {
        setProducts(result);
        setLoading(false);
      });
    }, 2000);
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <CategoryDetail products={products} category={categoryId} />
      )}
    </>
  );
}
