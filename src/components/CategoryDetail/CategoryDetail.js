import Item from "../Item/Item";
import Button from "../Button/Button";

export default function CategoryDetail({ products, category }) {
  return (
    <div id="itemList" className="itemList">
      <h1> {category}</h1>
      {products ? (
        products.map((product, index) => {
          return <Item item={product} key={index} />;
        })
      ) : (
        <div className="cart__vacio">
          <h3 className="titulo">
            Actualmente no tienes artículos en esta {category}
          </h3>
          <Button
            path="/"
            content="Volver a comprar"
            className="button__agregar"
          />
        </div>
      )}
    </div>
  );
}
