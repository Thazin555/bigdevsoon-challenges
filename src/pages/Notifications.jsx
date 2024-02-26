import React from "react";
import { NotiActiveBox, NotiBox } from "../components";

const Notifications = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="flex w-full justify-center gap-14">
          <NotiBox />
          <NotiActiveBox />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
