import { twMerge } from "tailwind-merge";
import { ParagraphUI } from "../../model/type";

const ParagraphUi = ({ style, children, ...props }: ParagraphUI) => {
  return (
    <p
      className={twMerge(`text-sm text-gray-600 leading-relaxed`, style)}
      {...props}
    >
      {children}
    </p>
  );
};

export default ParagraphUi;
