import { ButtonUI } from "../../model/type";
import { twMerge } from "tailwind-merge";

const ButtonUi = ({ style, variant, children, ...props }: ButtonUI) => {
  // Menentukan class berdasarkan variant
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
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
