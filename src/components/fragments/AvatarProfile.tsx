import { FaRegUserCircle } from "react-icons/fa";
import { ParagraphUi } from "../ui";
import { AvatarProfileUi } from "../../model/type";

const AvatarProfile = ({ role, user, ...props }: AvatarProfileUi) => {
  return (
    <div className="p-4 flex items-center gap-4 bg-white w-max" {...props}>
      <FaRegUserCircle className="text-3xl text-gray-600" />
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-gray-800">{user}</span>
        <ParagraphUi>{role}</ParagraphUi>
      </div>
    </div>
  );
};

export default AvatarProfile;
