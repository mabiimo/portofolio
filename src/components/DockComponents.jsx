import React from "react";
import { Dock, DockIcon } from "./Dock";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { PiGithubLogoThin } from "react-icons/pi";
import { PiDribbbleLogoLight } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";

const DockComponents = () => {
  return (
    <div className="navbar-container px-10 py-3 fixed bottom-0 left-0 w-full z-50  ">
      <Dock direction="middle">
      <DockIcon>
    <a href="https://github.com/mabiimo" target="_blank">
        <PiGithubLogoThin color="black" />
    </a>
</DockIcon>

        <DockIcon>
    <a href="https://www.instagram.com/mabiimo/" target="_blank">
          <PiInstagramLogoThin color="black" />
    </a>
        </DockIcon>
        <DockIcon>
    <a href="https://www.linkedin.com/in/muhammadaryobimo" target="_blank">
          <PiLinkedinLogoThin color="black" />
    </a>
        </DockIcon>
        <DockIcon>
    <a href="https://www.behance.net/muhammadbimo1" target="_blank">
          <PiDribbbleLogoLight color="black" />
    </a>
        </DockIcon>
        <DockIcon>
          <HiOutlineMail color="black" />
        </DockIcon>
      </Dock>
    </div>
  );
};

export default DockComponents;
