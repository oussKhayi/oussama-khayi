import React from "react";
import { LeftSide } from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { Nav } from "./components/Nav";

export const App2 = () => {
  return (
    <>
      <div className="bg-primary h-auto lg:h-screen p-3 md:p-8 md:px-20 grid grid-rows-1 md:grid-cols-1 lg:grid-cols-2 md:overflow-hidden">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
};
