import Category from "../Category/Category";

export default function CategoryList({ categories }) {
  return (
    <div className="categorias__container">
      {/* ACA mete un BANNER */}

      {categories.map((category, index) => {
        return <Category category={category} key={index} />;
      })}
    </div>
  );
}
