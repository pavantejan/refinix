// eslint-disable-next-line no-unused-vars
import React from "react";

const Navbar = () => {
  return (
    <>
  <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src="../src/assets/images/Logo.png"
              className="h-10 mr-3 "
              alt="Cognizant Logo"
            />
            {/* <span className="self-center text-xl align-baseline font-semibold whitespace-nowrap dark:text-white">
              Refini<span className="font-bold">X</span>
            </span> */}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
