import { twMerge } from "tailwind-merge";
import { LabelUI } from "../../model/type";

const LabelUi = ({ style, htmlFor, children, ...props }: LabelUI) => {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge("text-gray-500", style)}
      {...props}
    >
      {children}
    </label>
  );
};

export default LabelUi;
