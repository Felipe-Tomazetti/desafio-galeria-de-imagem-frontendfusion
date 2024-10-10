import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-transparent shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">MyLogo</a>
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href={"/home"}
            className={`${
              isActive("/home")
                ? "bg-blue-700 px-4 py-2 rounded-md text-white font-bold"
                : "hover:text-gray-600 transition-colors duration-300 font-bold py-2"
            }`}
          >
            Home
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M3.75 12h16.5M3.75 6h16.5M3.75 18h16.5"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="/home"
              className="hover:text-gray-600 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/favoritos"
              className="hover:text-gray-600 transition-colors duration-300"
            >
              Imagens Favoritas
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
