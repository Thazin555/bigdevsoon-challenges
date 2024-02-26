import React from "react";
import NotiButton from "./NotiButton";
import NotiHeading from "./NotiHeading";

const NotiBox = () => {
  return (
    <div className="relative w-full max-w-sm">
      <div className="rounded-lg bg-white p-5 shadow-[0px_0px_10px_3px_#d1d5db]">
        <NotiButton />
        <NotiHeading />
        <p className="mb-3 mt-7 text-center text-sm font-semibold text-gray-500">
          You don't have any notifications yet
        </p>
      </div>
    </div>
  );
};

export default NotiBox;
