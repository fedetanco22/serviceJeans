import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Spinner from "../../components/Spinner/Spinner";

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      // Referencia
      const db = getFirestore();
      const itemCollection = db.collection("productos");
      const itemId = itemCollection.doc(id);
      // Pedimos los datos
      itemId.get().then((response) => {
        const item = { ...response.data(), id: id };
        setProduct(item);
      });
      setLoading(false);
    }, 2000);
  }, [id]);

  return (
    <div id="Item">
      {loading ? <Spinner /> : <ItemDetail product={product} />}
    </div>
  );
}
