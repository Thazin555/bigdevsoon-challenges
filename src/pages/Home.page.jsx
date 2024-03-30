import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen bg-gray-300">
      <div className="border">
        <h1>100 Days Challenges</h1>
        <Link to="/notifications">
          <p>Day 15 - Notifications</p>
        </Link>
        <Link to="/images-preview">
          <p>Day 18 - Images Preview</p>
        </Link>
        <Link to="/hosting-features">
          <p>Day 45 - Hosting Features</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
