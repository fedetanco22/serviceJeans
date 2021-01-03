import Item from "../Item/Item";
import Button from "../Button/Button";
import "./CategoryDetail.scss";

export default function CategoryDetail({ products, category }) {
  return (
    <div>
      <h1 className="category__title "> {category}</h1>
      <div id="CategoryDetail" className="category container">
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
    </div>
  );
}
