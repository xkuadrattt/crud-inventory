import { RxHamburgerMenu } from "react-icons/rx";
import AvatarProfile from "./AvatarProfile";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { handleToggle } from "../../store/slice/sidebarResposive";

const TopNavbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleMenuSidebar = () => {
    dispatch(handleToggle());
  };

  return (
    <header className="flex items-center mx-4">
      <RxHamburgerMenu
        size={20}
        className="sm:hidden cursor-pointer"
        onClick={handleMenuSidebar}
      />

      <div className="ml-auto">
        <AvatarProfile user="Sarah Connor" role="Admin" />
      </div>
    </header>
  );
};

export default TopNavbar;
