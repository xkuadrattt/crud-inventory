import { ParagraphUI } from "../../model/type";

const ParagraphUi = ({ style, children, ...props }: ParagraphUI) => {
  return (
    <p className={`${style} text-sm text-gray-600 leading-relaxed`} {...props}>
      {children}
    </p>
  );
};

export default ParagraphUi;
