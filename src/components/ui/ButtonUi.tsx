import { ButtonUI } from "../../model/type";

const ButtonUi = ({ style, variant, children, ...props }: ButtonUI) => {
  return (
    <button
      className={`${style} px-4 py-2 rounded-md`}
      data-variant={`${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonUi;
