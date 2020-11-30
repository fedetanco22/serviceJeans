import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProdSolo from "../../dataBase/db";

import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Spinner from "../../components/Spinner/Spinner";

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getProdSolo()
        .then((result) => {
          return JSON.parse(result);
        })
        .then((result) => {
          result.forEach((item) => {
            if (item.id === Number(id)) {
              setProduct(item);
            }
          });

          setLoading(false);
        });
    }, 3000);
  }, [id]);

  return (
    <div id="Item">
      {loading ? <Spinner /> : <ItemDetail product={product} />}
    </div>
  );
}
