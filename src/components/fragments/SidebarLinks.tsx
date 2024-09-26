import { LinkUi } from "../ui";

const NavLinks = () => {
  return (
    <nav className="bg-gray-100 p-6 w-64 min-h-screen border-r border-gray-300 shadow-lg hidden sm:block">
      <h1 className="text-2xl font-bold mb-8 text-gray-800">Stockiesss</h1>
      <ul className="flex flex-col gap-4">
        <li>
          <LinkUi
            href="#"
            style="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
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
            Stock History
          </LinkUi>
        </li>
        <li>
          <LinkUi
            href="#"
            style="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Suppliers
          </LinkUi>
        </li>
        <li>
          <LinkUi
            href="#"
            style="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Warehouse
          </LinkUi>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
