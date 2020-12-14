import Category from "../Category/Category";

export default function CategoryList({ categories }) {
  return (
    <>
      {categories.map((category, index) => {
        return <Category category={category} key={index} />;
      })}
    </>
  );
}
