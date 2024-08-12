import React from "react";
import "../App.css";
import WordRotate from "./Word.tsx";
import Particles from "./Particle.tsx";
import BlurIn from "./BlurIn.tsx";
import pdf from "../assets/CV_Muhammad Aryo Bimo.pdf";
import { Link } from "react-router-dom";
const Hero = () => {
  const words = ["Frontend", "Backend", "Design"];

  return (
    <div
      className="hero min-h-screen flex items-center justify-center relative px-[70px] pt-[170px]"
      id="hero"
    >
      <Particles
        quantity={500}
        staticity={50}
        color="#111111"
        className="absolute inset-0 z-0"
      />
      <div className="hero-content flex flex-col items-center text-center relative z-10">
        <div className="w-full max-w-[600px]">
          <div className="flex items-center justify-center text-center">
            <div className="text-left">
              <h1 className="text-[25px] poppins-thin text-[#111111] mb-[-10px]">
                Hello There!
              </h1>
              <h1 className="text-[10px] font-semibold text-[#111111] mb-2 mt-3 ">
                <BlurIn word="I'm Muhammad Aryo Bimo" duration={3} />
              </h1>
            </div>
            <span className="text-[74px] ml-4">👏</span>
          </div>
          <div className="text-3xl">
            <WordRotate words={words} />
          </div>
          <p className="py-3 text-[#7a808d] text-center">
            I am an informatics engineering student. I am an energetic,
            ambitious person and responsible. I am extremely motivated to
            constantly develop my skills and grow professionally.
          </p>
        </div>
        <div className="flex justify-center gap-5 ">
          <button
            className="btn rounded-full"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#about").offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Get Started
          </button>
          <a
            className="btn btn-outline rounded-full "
            href={pdf}
            target="_blank"
          >
           Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
