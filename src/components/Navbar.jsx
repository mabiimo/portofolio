import React from "react";
import "../App.css"; // Ensure you have this CSS file

const Navbar = () => {
  return (
    <div className="navbar-container px-[10%] py-3 sm:px-[30%] md:px-[30%] fixed top-0 left-0 w-full z-50">
      <div className="navbar bg-white shadow-lg rounded-full ">
        <div className="flex-1">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#hero").offsetTop,
                behavior: "smooth",
              });
            }}
            className="mx-10 sm:text-sm md:text-base lg:text-md text-[#111111] "
          >
            Portfolio
          </a>
        </div>
        <div className="flex-none flex items-center">
          <p className="text-xs sm:text-sm md:text-base lg:text-md text-[#7a808d] p-4">
            Muhammad Aryo Bimo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
