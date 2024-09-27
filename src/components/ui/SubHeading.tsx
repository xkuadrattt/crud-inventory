import { HeadingSub } from "../../model/type";

const SubHeading = ({ style, children, ...props }: HeadingSub) => {
  return (
    <h2
      className={`${style} text-xl font-semibold text-gray-800 mb-2`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SubHeading;
