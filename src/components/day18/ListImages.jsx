import React from "react";

const ListImages = ({ img }) => {
  return (
    <div className="flex items-center gap-10 px-5 even:bg-white/10 even:py-2">
      <img className="w-24 rounded-lg" src={img} alt="" />
      <p className="text-white">Image Title</p>
    </div>
  );
};

export default ListImages;
