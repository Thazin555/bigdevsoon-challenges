import React from "react";

const LeftCard = () => {
  return (
    <div className="w-[60%] px-10 py-16">
      <div className="w-[50%] mx-auto flex justify-between items-center mb-8">
        <div className="text-center">
          <h5 className="text-2xl font-semibold text-blue-500">NYC</h5>
          <p className="text-sm">12:30AM</p>
        </div>
        
        <div className="flex flex-col items-center relative">
        <div className="absolute bottom-5">
          <svg
            fill="#000000"
            viewBox="0 0 24 24"
            id="airplane"
            data-name="Flat Color"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-color size-5 mx-auto"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                id="primary"
                d="M11.92,19.58,15.84,14H20a2,2,0,0,0,0-4H15.84L11.92,4.42A1,1,0,0,0,11.11,4h-.93a1,1,0,0,0-1,1.16L10,10H6.38L4.68,8.29A1.05,1.05,0,0,0,4,8H3a1,1,0,0,0-.89,1.45L3.38,12,2.11,14.55A1,1,0,0,0,3,16H4a1.05,1.05,0,0,0,.71-.29L6.38,14H10l-.81,4.84a1,1,0,0,0,1,1.16h.93A1,1,0,0,0,11.92,19.58Z"
                style={{ fill: "#3b82f6" }}
              />
            </g>
          </svg>
          <div className="border border-dashed border-gray-800 border-b-transparent w-14 h-7 rounded-tl-full rounded-tr-full relative before:absolute before:bottom-0 before:-left-1 before:p-0.5 before:content-[''] before:inline-block before:bg-blue-500 before:rounded-full after:p-0.5 after:content-[''] after:inline-block after:bg-blue-500 after:rounded-full after:absolute after:-right-1 after:bottom-0"></div>
        </div>
          <p className="text-gray-600 text-sm">8hr10min</p>
        </div>
        <div className="text-center">
          <h5 className="text-2xl font-semibold text-blue-500">ROM</h5>
          <p className="text-sm">2:40PM</p>
        </div>
      </div>
      <div className="flex justify-between bg-blue-200 px-8 py-5 rounded-xl">
        <div className="text-center">
          <p className="text-xs">FULL NAME</p>
          <p className="font-bold">John Doe</p>
        </div>
        <div className="text-center">
          <p className="text-xs">SEATS NUMBER</p>
          <p className="font-bold">43C</p>
        </div>
        <div className="text-center">
          <p className="text-xs">TERMINAL</p>
          <p className="font-bold">3</p>
        </div>
        <div className="text-center">
          <p className="text-xs">CLASS</p>
          <p className="font-bold">Business</p>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
