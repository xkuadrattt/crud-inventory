import { twMerge } from "tailwind-merge";
import { InputUI } from "../../model/type";

const InputUi = ({
  style,
  name,
  type,
  required,
  placeholder,
  ...props
}: InputUI) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className={twMerge(
        `px-4 py-1 outline outline-cyan-400 focus:outline-cyan-700 active:outline-cyan-700`,
        style
      )}
      {...props}
    />
  );
};

export default InputUi;
