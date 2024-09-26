import { LinkType } from "../../model/type";

const LinkUi = ({ href, style, children, ...props }: LinkType) => {
  return (
    <a href={href} className={`${style} hover:underline`} {...props}>
      {children}
    </a>
  );
};

export default LinkUi;
