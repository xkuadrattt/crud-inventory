import { HeadingOne } from "../../model/type";

const HeadingLvOne = ({ style, children, ...props }: HeadingOne) => {
  return (
    <h1 className={`${style} text-2xl font-bold text-gray-800`} {...props}>
      {children}
    </h1>
  );
};

export default HeadingLvOne;
