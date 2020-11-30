import "./Item.scss";

export default function Item({ item }) {
  return (
    <div id="Item" className="listItem">
      <img src={item.image} alt={item.id} className="listItem__img" />
      <p className="listItem__titulo">{item.name}</p>
      <p className="listItem__precio">$ {item.price}</p>
    </div>
  );
}
