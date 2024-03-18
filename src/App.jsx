import React from "react";
import "./App.css";
import { SideNav } from "./components/SideNav";
import { Content } from "./components/Content";

const App = () => {
  return (
    <div className="bg-legend h-screen pt-14 px-16 md:px-2 grid grid-cols-1 md:grid-cols-1 gap-y-4 lg:grid-cols-2">
      <SideNav />
      <Content />
    </div>
  );
};

export default App;
