import { useSelector } from "react-redux";
import { LinkUi } from "../ui";
import { RootState } from "../../store/store";

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
          <LinkUi
            href="#"
            style="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Beranda
          </LinkUi>
        </li>
        <li>
          <LinkUi
            href="#"
            style="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Products
          </LinkUi>
        </li>
        <li>
          <LinkUi
            href="#"
            style="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Kategori
          </LinkUi>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
