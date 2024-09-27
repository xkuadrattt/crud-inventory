import { twMerge } from "tailwind-merge";
import { InputUI } from "../../model/type";

const InputUi = ({
  id,
  style,
  name,
  type = "text",
  required = false,
  placeholder,
  ...props
}: InputUI) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      className={twMerge(
        `w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700 focus:outline-none transition duration-300 ease-in-out hover:border-cyan-400`,
        style
      )}
      {...props}
    />
  );
};

export default InputUi;
