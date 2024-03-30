import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col justify-center bg-fuchsia-200">
      <div className="max-w-md w-full mx-auto p-8 rounded-lg bg-white">
        <h1 className="text-2xl text-center font-semibold text-fuchsia-800 mb-8">
          BigDevSoon Challenges
        </h1>
        <Link
          to="/notifications"
          className="border border-fuchsia-600 block p-2 rounded mb-3 font-semibold text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white"
        >
          <p>Day 15 - Notifications</p>
        </Link>
        <Link
          to="/images-preview"
          className="border border-fuchsia-600 block p-2 rounded mb-3 font-semibold text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white"
        >
          <p>Day 18 - Images Preview</p>
        </Link>
        <Link
          to="/hosting-features"
          className="border border-fuchsia-600 block p-2 rounded mb-3 font-semibold text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white"
        >
          <p>Day 45 - Hosting Features</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
