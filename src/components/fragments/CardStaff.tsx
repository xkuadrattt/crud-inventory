import { CardStaffType } from "../../model/type";
import { ParagraphUi, SubHeading } from "../ui";

const CardStaff = ({ user, role, status }: CardStaffType) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      <SubHeading style="mb-2">{user}</SubHeading>
      <ParagraphUi
        style={status === "Inactive" ? `text-red-500` : `text-green-500`}
      >
        {status}
      </ParagraphUi>
      <span className="text-gray-500 text-sm block mt-1">{role}</span>
    </div>
  );
};

export default CardStaff;
