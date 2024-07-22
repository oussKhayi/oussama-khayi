import React from "react";
import { LeftSide } from "./components/LeftSide";
import RightSide from "./components/RightSide";
import {
  GrAppsRounded,
  GrBriefcase,
  GrContact,
  GrDeploy,
  GrUser,
} from "react-icons/gr";

import "./App.css";

const App = () => {
  return (
    <>
{/*       <div class="mouse" id=""scrollIcon></div> */}
      <div className="bg-primary h-auto lg:h-screen p-3 md:p-8 md:px-20 grid grid-rows-1 md:grid-cols-1 lg:grid-cols-2 md:overflow-hidden pb-12">
        <LeftSide />
        <RightSide />
      </div>
      <div className="fixed w-full bottom-0 lg:hidden bg-primary border-t-[0.01px] border-t-secondary bg-opacity-70 text-gray-400 pt-1">
        <ul className="p-2 flex justify-around">
          <li className="cursor-pointer hover:text-white hover:scale-110">
            <a
              href="#about"
              className="cursor-pointer hover:text-white hover:scale-110"
            >
              <GrUser className="text-xl" />
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-110">
            <a
              href="#experience"
              className="cursor-pointer hover:text-white hover:scale-110"
            >
              <GrBriefcase className="text-xl" />
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-110">
            <a
              href="#skills"
              className="cursor-pointer hover:text-white hover:scale-110"
            >
              <GrDeploy className="text-xl" />
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-110">
            <a
              href="#projects"
              className="cursor-pointer hover:text-white hover:scale-110"
            >
              <GrAppsRounded className="text-xl" />
            </a>
          </li>
          <li className="cursor-pointer hover:text-white hover:scale-110">
            <a href="#contact" className="cursor-pointer">
              <GrContact className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;
