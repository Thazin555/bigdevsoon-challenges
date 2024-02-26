import React from "react";

const NotiCard = ({src}) => {
  return (
    <div className="flex items-center gap-4 bg-gray-100 px-5 py-2">
      <div className="relative">
        <img
          className="h-10 w-10 rounded-full object-cover object-center"
          src={src}
        />
        <span className="absolute -top-1 right-0 inline-block rounded-full bg-blue-400 p-[3px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-3 w-3 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
        </span>
      </div>
      <div>
        <p className="mb-0.5 text-sm">
          <span className="font-semibold">Jane Anne</span> joined to{" "}
          <span className="font-semibold">"Design"</span> Group.
        </p>
        <p className="text-xs text-gray-500">2 min ago</p>
      </div>
    </div>
  );
};

export default NotiCard;
