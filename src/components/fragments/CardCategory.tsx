import { CardCategoryType } from "../../model/type";
import { HeadingLvOne, ParagraphUi } from "../ui";

const CardCategory = ({ name, description }: CardCategoryType) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <HeadingLvOne style="mb-2 text-gray-800">{name}</HeadingLvOne>
      <ParagraphUi>{description}</ParagraphUi>
    </div>
  );
};
export default CardCategory;
