import React from "react";

const NotiHeading = ({ style }) => {
  return (
    <div className={`flex items-center justify-between ${style}`}>
      <h1 className="text-lg font-semibold">Notifications</h1>
      <p className="text-gray-500">Mark as read</p>
    </div>
  );
};

export default NotiHeading;
