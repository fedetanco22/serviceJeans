import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProductById from "../../backend/item";

import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Spinner from "../../components/Spinner/Spinner";

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      getProductById(id).then((result) => {
        setProduct(result);
        setLoading(false); // aca recibimos los resultados por eso sacamos el loading
      });
    }, 1000);
  }, [id]);

  return (
    <div id="Item">
      {loading ? <Spinner /> : <ItemDetail product={product} />}
    </div>
  );
}
