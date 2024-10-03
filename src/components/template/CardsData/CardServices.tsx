import { services } from "../../../data/serviceLandingPage";

const CardServices = () => {
  return (
    <div className="flex flex-col gap-14 sm:flex-row justify-between">
      {services.map((item, index) => (
        <div
          key={index}
          className="flex p-4 md:p-12 flex-col gap-8 shadow-md items-center"
        >
          <img src={item.img} alt={item.desc} className="max-w-[75px]" />
          <p className="leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CardServices;
