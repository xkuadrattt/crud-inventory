import { CardCategoryType } from "../../model/type";
import { HeadingLvOne, ParagraphUi } from "../ui";

const CardCategory = ({ name, description }: CardCategoryType) => {
  return (
    <div>
      <HeadingLvOne style="mb-2">{name}</HeadingLvOne>
      <ParagraphUi>{description}</ParagraphUi>
    </div>
  );
};

export default CardCategory;
