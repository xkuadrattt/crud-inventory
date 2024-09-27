import { staff } from "../../../data/staff";
import CardStaff from "../../fragments/CardStaff";

const CardsStaff = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {staff.map((item, index) => (
          <CardStaff
            user={`${item.firstName} ${item.lastName}`}
            status={item.status}
            role={item.position}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default CardsStaff;
