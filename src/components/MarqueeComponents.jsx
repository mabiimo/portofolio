import React, { useState, useEffect } from "react";
import Marquee from "./Marquee.tsx";
import Card from "./Card.jsx";
import Kerja from '../img/Kerja.png'
import Film from '../img/tmdb-film.png'
import Furniture from '../img/Furniture.png'
import Pokemon from '../img/pokemon.jpg'
import nytimes from '../img/nytimes.png'
import car from '../img/CarRental.png'

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
          tools={"Tools: React JS, Axios, Tailwind CSS, Daisy UI"}
          img={Film}
          href={"https://tmdb-movie-mabiimo.vercel.app/"}
          loading={loading}
        />

        <Card
          title={"Furniture App!"}
          text={" Front End - Website Pembelian Furniture"}
          tools={" Tools: React JS, Axios"}
          img={Furniture}
          href={"https://furnitureweb.vercel.app/"}
          loading={loading}
        />

        <Card
          title={"Job Search App!"}
          text={"Front End - Website Pencarian Kerja"}
          tools={"Tools: React JS, Axios"}
          img={Kerja}
          href={"https://job-search-delta.vercel.app/"}
          loading={loading}
        />
      </Marquee>

      <Marquee className="text-lg" pauseOnHover={true}>
        <Card
          title={"Pokemon App!"}
          text={"Front End - Website Pokemon"}
          tools={"Tools: React JS, Axios"}
          img={Pokemon}
          href={"https://pokemon-fe-nine.vercel.app/"}
          loading={loading}
        />

        <Card
          title={"NY Times App!"}
          text={" Front End - Website Berita New York"}
          tools={"Tools: React JS, Axios"}
          img={nytimes}
          href={"https://ny-times-fe.vercel.app/"}
          loading={loading}
        />

        <Card
          title={"Car Rental App!"}
          text={"Front End - Website Car Rental"}
          tools={"Tools: React JS, Axios"}
          img={car}
          href={"https://carrental-project.vercel.app/"}
          loading={loading}
        />
      </Marquee>
    </div>
  );
};

export default MarqueeComponents;
