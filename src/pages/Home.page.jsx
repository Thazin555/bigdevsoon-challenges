import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const links = [
    {
      id: 1,
      url: "/notifications",
      title: "Day 15 - Notifications",
    },
    {
      id: 2,
      url: "/images-preview",
      title: "Day 18 - Images Preview",
    },
    {
      id: 3,
      url: "/hosting-features",
      title: "Day 45 - Hosting Features",
    },
    {
      id: 4,
      url: "/home-page-ui",
      title: "Day 23 - Home Page",
    },
    {
      id: 5,
      url: "/flight-ticket",
      title: "Day 61 - Flight Ticket",
    },
    {
      id: 6,
      url: "/testimonial",
      title: "Day 62 - Testimonial",
    },
  ];

  return (
    <div className="h-screen flex flex-col justify-center bg-fuchsia-200">
      <div className="max-w-md w-full mx-auto p-8 rounded-lg bg-white">
        <h1 className="text-2xl text-center font-semibold text-fuchsia-800 mb-8">
          BigDevSoon Challenges
        </h1>
        {links.map(({ id, url, title }) => (
          <Link
            key={id}
            to={url}
            className="border border-fuchsia-600 block p-2 rounded mb-3 font-semibold text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white duration-200"
          >
            <p>{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
