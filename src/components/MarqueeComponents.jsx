import React, { useState, useEffect } from "react";
import Marquee from "./Marquee.tsx";
import Card from "./Card.jsx";

const MarqueeComponents = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // 2 seconds loading time
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-[54px] md:text-[64px] lg:text-[74px] poppins-semibold text-[#111111] ml-2">
      Check out my latest work
      </h1>
      <p className="py-6 text-[#7a808d] text-center">
      I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
          </p>
      <Marquee className="bg-white text-lg" reverse pauseOnHover={true}>
        <Card
          title={"Movie App!"}
          text={"Front End - Website Pencarian Film"}
          tools={"Tools: React JS, Axios"}
          img={"/src/img/Film.png"}
          href={"https://pencarian-film.vercel.app/"}
          loading={loading}
        />

        <Card
          title={"Furniture App!"}
          text={" Front End - Website Pembelian Furniture"}
          tools={" Tools: React JS, Axios"}
          img={"/src/img/Furniture.png"}
          href={"https://furnitureweb.vercel.app/"}
          loading={loading}
        />

        <Card
          title={"Job Search App!"}
          text={"Front End - Website Pencarian Kerja"}
          tools={"Tools: React JS, Axios"}
          img={"/src/img/Kerja.png"}
          href={"https://job-search-delta.vercel.app/"}
          loading={loading}
        />
      </Marquee>

      <Marquee className="text-lg" pauseOnHover={true}>
        <Card
          title={"Pokemon App!"}
          text={"Front End - Website Pokemon"}
          tools={"Tools: React JS, Axios"}
          img={"/src/img/pokemon.jpg"}
          href={"https://pokemon-fe-nine.vercel.app/"}
          loading={loading}
        />

        <Card
          title={"NY Times App!"}
          text={" Front End - Website Berita New York"}
          tools={"Tools: React JS, Axios"}
          img={"/src/img/nytimes.png"}
          href={"https://ny-times-fe.vercel.app/"}
          loading={loading}
        />

        <Card
          title={"Car Rental App!"}
          text={"Front End - Website Car Rental"}
          tools={"Tools: React JS, Axios"}
          img={"/src/img/CarRental.png"}
          href={"https://carrental-project.vercel.app/"}
          loading={loading}
        />
      </Marquee>
    </div>
  );
};

export default MarqueeComponents;
