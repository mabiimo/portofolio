import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GridPattern from "./components/Grid"; // Import GridPattern
import "./App.css";
import TextRevealByWord from "./components/TextReveal";
import IconCloud from "./components/GlobeIcon";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import MarqueeComponents from "./components/MarqueeComponents";
import Tab from "./components/Tab";
import Experience from "./components/Experience";
import { AnimatedList } from "./components/AnimatedList";
import AnimatedCardList from "./components/AnimatedCardList";
import DockComponents from "./components/DockComponents";
import AnimatedCircularProgressBar from "./components/LoadingPage"; // Import the loading component

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      let progressValue = 0;
      const interval = setInterval(() => {
        progressValue += 1;
        setProgress(progressValue);
        if (progressValue >= 100) {
          clearInterval(interval);
          setLoading(false);
        }
      },); // Adjust the interval as needed
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <AnimatedCircularProgressBar
          max={100}
          value={progress}
          min={0}
          gaugePrimaryColor="#e0e0e0"
          gaugeSecondaryColor="#e9e9e9"
          className="text-center"
        />
      </div>
    );
  }

  return (
    <div className="relative bg-white poppins-light text-center">
      {/* Main Content */}
      <div className="relative overflow-y">
        <div className="navbar-container px-10 py-14 fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-gray-100 to-transparent" />
        <Navbar className="fixed top-0 left-0 w-full overflow-y-scroll overflow-x-scroll z-50" />
        <div className="navbar-container px-10 py-14 fixed bottom-0 left-0 w-full z-50 bg-gradient-to-t from-gray-100 to-transparent" />
      </div>
      
      {/* Wrapper with GridPattern */}
      <div className="relative mt-[-100px] py-5 text-center justify-center align-center">
        {/* GridPattern component in the background */}
        <Hero />
        <div className="relative">
          <GridPattern
            width={40}
            height={40}
            strokeDasharray="5,5"
            className="absolute inset-0"
            x={0}
            y={0}
          />
          <div className="relative z-10">
            <TextRevealByWord
              className="hidden md:block text-[55px] sm:text-[55px] md:text-[76px] lg:text-[66px] xl:text-[74px] 2xl:text-[84px] poppins-semibold text-[#111111] ml-2"
              text="Muhammad Aryo Bimo"
            />
            <p className="text-center md:hidden text-[56px] sm:text-base md:hidden lg:hidden xl:hidden 2xl:hidden poppins-semibold text-[#111111] text-[55px] ml-2">
              Muhammad Aryo Bimo
            </p>
          </div>
        </div>
        
        <div className="my-1">
          <AnimatedCardList />
          <h1 className="text-center ms-4 text-[#7a808d] text-[24px] md:text-[24px] lg:text-[44px] poppins-medium text-[#111111]">
            Skills
          </h1>
          <IconCloud
            iconSlugs={[
              "react",
              "typescript",
              "javascript",
              "html5",
              "css",
              "php",
              "laravel",
              "mysql",
              "mariadb",
              "figma",
              "ajax",
              "git",
              "github",
              "tailwindcss",
              "vscode",
              "ajax",
              "jquery",
            ]}
            maxSpeed={0.01}
          />
          <MarqueeComponents />
          {/* <Tab /> */}
        </div>
        <DockComponents />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
