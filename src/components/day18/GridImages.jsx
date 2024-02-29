import React from "react";

const GridImages = ({ img }) => {
  return (
    // <div className="bg-black/90 grid grid-cols-3 gap-4 p-5 rounded-b-md">
    <div>
      <img className="w-full rounded-lg" src={img} alt="" />
    </div>
  );
};

export default GridImages;
