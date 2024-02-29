import React from "react";

const ImagesContainer = ({ children }) => {
  return (
    <div className="h-screen flex items-center bg-gray-200">
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </div>
  );
};

export default ImagesContainer;
