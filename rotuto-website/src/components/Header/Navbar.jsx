import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerlogo, setHeaderLogo] = useState(null);
  const [appname, setAppName] = useState("Rotuto");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    // Fetch the footer data from the API
    axios
      .get("/api/v1/users/settings")
      .then((response) => {
        // console.log(response.data);
        setHeaderLogo(response.data?.settings.logo.headerLogo);
        setAppName(response.data?.settings.appName);
      })
      .catch((error) => {
        console.error("There was an error fetching the footer data!", error);
      });
  }, []);

  return (
    <nav className=" border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {headerlogo ? (
            <img src={headerlogo} alt="logo" className="md:w-32 w-20 h-auto" />
          ) : (
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              {appname}
            </span>
          )}
        </a>
        <div className="flex md:order-2 space-x-4 rtl:space-x-reverse">
          <a
            href="https://business.rotuto.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-3 text-gray-900 rounded-full md:bg-transparent hover:bg-blue-700 hover:text-white hover:px-4 hover:py-2"
          >
            Login
          </a>
          <a
            href="https://business.rotuto.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-3 text-gray-900 rounded-full md:bg-transparent hover:bg-blue-700 hover:text-white hover:px-4 hover:py-2"
          >
            Sign-Up
          </a>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 underline"
                    : "block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 hover:underline"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/agent"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 underline"
                    : "block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 hover:underline"
                }
              >
                Ai Agents
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 underline"
                    : "block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 hover:underline"
                }
              >
                About
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 text-blue-700 underline"
                    : "block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 hover:underline"
                }
              >
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
