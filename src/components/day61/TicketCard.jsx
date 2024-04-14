import React from "react";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const TicketCard = () => {
  return (
    <div className="bg-white max-w-5xl w-full flex">
      <LeftCard />
      <RightCard />
    </div>
  );
};

export default TicketCard;
