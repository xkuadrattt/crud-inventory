import { abouts } from "../../../data/about";
import { CardFooter } from "../../fragments";

const CardsFooter = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between [&>div:first-child>p:last-child]:max-w-[200px]">
      {abouts.map((item, index) => (
        <CardFooter key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default CardsFooter;
