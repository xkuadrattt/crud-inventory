import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

const NavLinks = () => {
  const isOpen = useSelector(
    (state: RootState) => state.sidebarMenu.toggleMenu
  );

  return (
    <nav
      className={` bg-gray-100 p-6 w-64 min-h-screen border-r border-gray-300 shadow-lg transition-transform transform ${
        isOpen
          ? `transtale-x-0 block`
          : `-translate-x-full hidden sm:block sm:translate-x-0`
      } sm:block`}
    >
      <h1 className="text-2xl font-bold mb-8 text-gray-800">Stockiesss</h1>
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            to="/dashboard"
            className="flex gap-2 items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <IoHomeOutline /> Beranda
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/products"
            className="flex gap-2 items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <AiOutlineProduct /> Products
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/category"
            className="flex gap-2 items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <BiCategory /> Kategori
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
