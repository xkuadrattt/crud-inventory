import { categories } from "../../../data/categories";
import { CardCategory } from "../../fragments";

const CardsCategories = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <CardCategory
            name={item.name}
            description={item.description}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default CardsCategories;
