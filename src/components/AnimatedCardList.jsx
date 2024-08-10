import React from "react";
import Experience from "./Experience";
import { AnimatedList } from "./AnimatedList";

const AnimatedCardList = () => {
  return (
    <div
      className="poppins-light w-full max-w-full h-[900px] md:h-[500px] mx-auto overflow-hidden relative "
      id="about"
    >
      {/*  */}
      <div className="hidden md:block   text-[#111111] ml-2">
        <div className="bg-white p-4 ">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-left ms-4  text-[#7a808d] text-[24px] md:text-[14] lg:text-[20px] poppins-medium text-[#111111]">
                Education
              </h1>
              {/* <AnimatedList className="" delay={4000}> */}
              <Experience
                title={"Universitas Gunadarma"}
                subtitle={"Informatics Engineering"}
                desc={"Agustus 2018 - Agustus 2022"}
                img={"../src/img/LOGO UNIV GUNDAR-min.png"}
              />
              <Experience
                title={"SMA Bakti Idhata"}
                subtitle={"Nature Science Studies"}
                desc={"2015 - 2018"}
                img={"../src/img/logo-bi.jpg"}
              />
              {/* </AnimatedList> */}
            </div>

            <div>
            <h1 className="text-left ms-4  text-[#7a808d] text-[24px] md:text-[14] lg:text-[20px] poppins-medium text-[#111111]">
                Experience
              </h1>
              {/* <AnimatedList className="" delay={6000}> */}
              <Experience
                title={"Tiket.com"}
                subtitle={"Product Designer - 3D Illustrator"}
                desc={"Agustus 2021 - Februari 2022"}
                img={"../src/img/1_yctF4evMrTgmduK06dTIxQ.jpg"}
              />
              <Experience
                title={"Mastersystem Infotama"}
                subtitle={"PHP Developer Fullstack"}
                desc={"Agustus 2023 - Present"}
                img={"../src/img/PT-Mastersystem-Infotama-Tbk.webp"}
              />
              {/* </AnimatedList> */}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center block md:hidden sm:text-base poppins-light  ml-2">
        <p className="mx-4 text-left text-[#7a808d]">Education</p>
        {/* <AnimatedList delay={2000}> */}
          <Experience
            title={"SMA Bakti Idhata"}
            subtitle={"Nature Science Studies"}
            desc={"2015 - 2018"}
            img={"../src/img/logo-bi.jpg"}
          />
          <Experience
            title={"Universitas Gunadarma"}
            subtitle={"Informatics Engineering"}
            desc={"Agustus 2018 - Agustus 2022"}
            img={"../src/img/LOGO UNIV GUNDAR-min.png"}
          />
        {/* </AnimatedList> */}
        <p className="mx-4 text-left">Experience</p>
        {/* <AnimatedList delay={2000}> */}
          <Experience
            title={"Tiket.com"}
            subtitle={"Product Designer - 3D Illustrator"}
            desc={"Agustus 2021 - Februari 2022"}
            img={"../src/img/1_yctF4evMrTgmduK06dTIxQ.jpg"}
          />
          <Experience
            title={"Mastersystem Infotama"}
            subtitle={"PHP Developer Fullstack"}
            desc={"Agustus 2023 - Present"}
            img={"../src/img/PT-Mastersystem-Infotama-Tbk.webp"}
          />
        {/* </AnimatedList> */}
      </div>
      {/*  */}
    </div>
  );
};

export default AnimatedCardList;
