import React from "react";

 const Footer = () => {
  return (
    
    <footer className="bg-white text-white relative mt-0 w-full pt-20 py-4 bottom-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Div */}
        <div className="mb-4 md:mb-0">
          <img
            src="../src/assets/images/Logo.png"
            alt="Logo"
            className="h-16 ml-16"
          />
        </div>

        {/* Menu Links  */}
        <nav className="flex flex-wrap justify-center md:justify-end">
          <a href="#" className="text-black text-[18px] font-semibold  mx-6">
            About
          </a>
          <a href="#" className="text-black text-[20px] font-semibold mx-6">
            Privacy Policy
          </a>
          <a href="#" className="text-black text-[20px] font-semibold mx-6">
            Licensing
          </a>
          <a href="#" className="text-black text-[20px] font-semibold mx-6">
            Contact
          </a>
        </nav>
      </div>
      <hr className="border-t-2 border-gray-400 my-4" />
      <div className="text-center text-bold text-xl text-gray-400">
        &copy; 2023 RefiniX. All Rights Reserved!
      </div>

     
    </footer>
  );
};

export default Footer;