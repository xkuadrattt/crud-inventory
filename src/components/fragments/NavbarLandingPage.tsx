import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavbarLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleResponsive = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      id="home"
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm"
    >
      <div className="container px-4 sm:px-0">
        <div className="flex sm:flex-row justify-between items-center relative sm:static py-3 text-gray-600">
          <span className="text-xl font-bold">Stockiesss</span>
          <nav>
            <RxHamburgerMenu
              className="sm:hidden cursor-pointer"
              onClick={handleResponsive}
            />
            <ul
              className={`transition-transform duration-300 ease-in-out sm:flex sm:items-center sm:gap-4 ${
                isMenuOpen
                  ? "flex flex-col sm:flex-row gap-4 absolute top-12 right-0 left-0 bg-white p-4 shadow-lg transform translate-y-0 opacity-100 sm:static sm:bg-transparent sm:shadow-none sm:p-0 sm:translate-y-0"
                  : "hidden sm:static sm:bg-transparent sm:shadow-none sm:p-0"
              }`}
            >
              <li>
                <a
                  href="#home"
                  className="hover:border-b hover:text-black hover:border-b-purple-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="hover:border-b hover:text-black hover:border-b-purple-500"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#feature"
                  className="hover:border-b hover:text-black hover:border-b-purple-500"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:border-b hover:text-black hover:border-b-purple-500"
                >
                  About
                </a>
              </li>
              <li>
                <button className="px-2 py-1 rounded-md border hover:text-black border-purple-500 hover:bg-purple-200">
                  <Link to={`/`}>Sign Up</Link>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarLandingPage;
