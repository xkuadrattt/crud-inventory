import { ButtonUI } from "../../model/type";
import { twMerge } from "tailwind-merge";

const ButtonUi = ({ style, variant, children, ...props }: ButtonUI) => {
  // Menentukan class berdasarkan variant
  const variantClasses = {
    primary: "bg-cyan-700 text-white hover:bg-cyan-500",
    secondary: "bg-purple-700 text-white hover:bg-purple-500",
    danger: "bg-pink-700 text-white hover:bg-pink-500",
    warning: "bg-yellow-700 text-white hover:bg-yellow-500",
    bordersecondary:
      "bg-white border border-purple-700 hover hover:bg-purple-200",
    borderprimary: "bg-white border border-cyan-700 hover hover:bg-cyan-200",
    borderwarning:
      "bg-white border border-yellow-700 hover hover:bg-yellow-200",
    borderdanger: "bg-white border border-pink-700 hover hover:bg-pink-200",
  };

  return (
    <button
      className={twMerge(
        `${
          variantClasses[variant || "primary"]
        } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2`,
        style
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonUi;
