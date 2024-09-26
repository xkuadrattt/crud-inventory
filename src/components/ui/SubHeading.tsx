import { HeadingSub } from "../../model/type";

const SubHeading = ({ style, children, ...props }: HeadingSub) => {
  return (
    <h2 className={`${style} text-xl font-semibold`} {...props}>
      {children}
    </h2>
  );
};

export default SubHeading;
