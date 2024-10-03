import { CardFooterProps } from "../../model/type";

const CardFooter = ({ title, content }: CardFooterProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p>{title}</p>
      <p className="text-gray-700 max-w-max">{content}</p>
    </div>
  );
};

export default CardFooter;
