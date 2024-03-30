import React from "react";

const HostingContainer = ({ children }) => {
  return (
    <div className="max-w-[1200px] mx-auto h-screen flex flex-col justify-center">
      {children}
    </div>
  );
};

export default HostingContainer;
