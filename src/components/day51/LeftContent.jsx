import React from "react";
import FitImg from '../../asset/images/fit-buddy.png';

const LeftContent = () => {
  return (
    <div className="w-[50%] relative">
      <div className="border border-red-700 w-[358px] h-[278px] rounded-[30px] mx-auto flex justify-center items-center">
        <div className="border border-red-700 w-[339px] h-[259px] rounded-[30px] flex justify-center items-center">
          <div className="w-80 h-60 rounded-[30px] bg-gradient-to-br from-amber-400 to-fuchsia-600"></div>
        </div>
      </div>
      <img src={FitImg} className="absolute top-0 bottom-0 left-0 right-0 m-auto h-[420px]" alt="" />
    </div>
  );
};

export default LeftContent;
