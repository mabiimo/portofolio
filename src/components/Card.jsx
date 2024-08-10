import React from "react";

const Card = ({ title, text, tools, img, href, loading }) => {
  if (loading) {
    return (
      <a
        className="card bg-base-100 image-full w-80 md:w-96 shadow-xl relative overflow-hidden transition-transform duration-500"
      >
        <figure className="h-56 md:h-64">
          <div className="skeleton h-full w-full"></div>
        </figure>
        <div className="card-body relative z-10 p-4">
          <div className="group flex flex-col h-full">
            <div className="flex-grow">
              <div className="skeleton h-6 w-3/4 mb-2"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-white duration-500 opacity-0 group-hover:opacity-70"></div>
      </a>
    );
  }

  return (
    <a
      target="_blank"
      href={href}
      className="card bg-base-100 image-full w-80 md:w-96 shadow-xl relative overflow-hidden transition-transform duration-500"
    >
      <figure className="h-56 md:h-64">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body relative z-10 p-4">
        <div className="group flex flex-col h-full">
          <div className="flex-grow">
            <h2 className="card-title text-lg">{title}</h2>
            <p className="text-white group-hover:block md:hidden text-left align-left">
              {text}
            </p>
          </div>
          <p className="text-white group-hover:block md:hidden text-left align-left">
            {tools}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-white duration-500 opacity-0 group-hover:opacity-70"></div>
    </a>
  );
};

export default Card;
