import React from "react";
import NavBar from "../../components/day23/NavBar";
import Context from "../../components/day23/Context";

const HomePageUi = () => {
  return (
    <div className="px-28 pt-10 pb-0 h-screen overflow-y-hidden">
      <NavBar />
      <Context />
    </div>
  );
};

export default HomePageUi;
