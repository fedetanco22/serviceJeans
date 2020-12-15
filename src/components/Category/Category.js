import Button from "../Button/Button";
import "./Category.scss";
// import useAppContext from "../../context/useAppContext";

export default function Category({ category }) {
  return (
    <div id="Category" className="listCategory">
      <img
        src={category.image}
        alt={`img-${category.id}`}
        className="listCategory__img"
      />
      <Button
        path={category.key}
        content={category.description}
        className={"listCategory__button"}
      />
    </div>
  );
}
