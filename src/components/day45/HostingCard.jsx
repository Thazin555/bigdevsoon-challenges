import React from "react";

const HostingCard = ({ icon, title, description }) => {
  return (
    <div className="max-w-[280px] group border border-gray-400 rounded-xl p-4 hover:bg-gradient-to-br from-[#6200ff] to-[#EC6EAD] hover:border-white duration-300">
      <div className="border border-black inline-block p-2 rounded-xl bg-white mb-3 group-hover:border-white">
        <img src={icon} className="size-8" />
      </div>
      <div className="group-hover:text-white">
        <h3 className="font-semibold text-lg mb-3">{title}</h3>
        <p className="text-sm text-gray-500 h-20 line-clamp-4 mb-3 group-hover:text-gray-300">
          {description}
        </p>
        <a href="#" className="font-semibold text-sm">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default HostingCard;
