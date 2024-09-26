import { categories } from "../../../data/categories";
import { CardCategory } from "../../fragments";

const CardsCategories = () => {
  return (
    <>
      {categories.map((item) => (
        <CardCategory
          name={item.name}
          description={item.description}
          id={item.id}
          key={item.id}
        />
      ))}
    </>
  );
};

export default CardsCategories;
