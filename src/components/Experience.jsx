import React from "react";
import "../App.css";
import { SlArrowRight } from "react-icons/sl";

const Experience = ({title, subtitle, date, desc, img}) => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full h-full max-w-sm hover:bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <div className="collapse">
          <input
            type="checkbox"
            id={`experience-toggle-${title.replace(/\s+/g, '')}`}
            className="peer hidden"
          />
          <div className="collapse-title text-xl font-medium">
            <label
              htmlFor={`experience-toggle-${title.replace(/\s+/g, '')}`}
              className="flex items-center space-x-4 cursor-pointer"
            >
              <figure className="flex-shrink-0">
                <img
                  src={img}
                  alt={title}
                  className="h-20 w-20 object-cover mask mask-circle"
                />
              </figure>
              <div className="text-left flex-1">
                <h2 className="text-[#111111] poppins-semibold text-ellipsis text-sm lg:text-xl md:text-md overflow-hidden whitespace-nowrap">
                  {title}
                </h2>
                <p className="text-[12px] text-gray-500 text-ellipsis poppins-light overflow-hidden whitespace-nowrap">
                  {subtitle}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-gray-500 poppins-light overflow-hidden whitespace-nowrap">
                  {date}
                </p>
              </div>
            </label>
          </div>
          <div className="p-4 ">
            <p className="text-sm text-gray-700">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
