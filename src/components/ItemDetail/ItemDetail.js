import ItemCounter from "../ItemCounter/ItemCounter";
import "./ItemDetail.scss";

export default function ItemDetail({ product }) {
  console.log(product);
  const addToCart = (value) => {
    alert(`Se agregaron ${value} productos a su Carrito `);
  };

  return (
    <div id="Detail" className="container">
      <div className="item text-center m-3 mt-5 ">
        <img className="item__img" src={product.image} alt={product.id} />
        <div className="item__txt">
          <p className="item__titulo">{product.name} </p>
          <p className="item__precio">{product.price} </p>
          <ItemCounter
            initialValue={1}
            maxValue={15}
            onAdd={addToCart}></ItemCounter>
        </div>
      </div>
    </div>
  );
}
