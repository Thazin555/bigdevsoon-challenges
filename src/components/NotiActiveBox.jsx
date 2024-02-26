import React from "react";
import NotiButton from "./NotiButton";
import NotiHeading from "./NotiHeading";
import NotiCard from "./NotiCard";

const NotiActiveBox = () => {
  return (
    <div className="relative w-full max-w-sm">
      <div className="rounded-lg bg-white py-5 shadow-[0px_0px_10px_3px_#d1d5db]">
        <NotiButton className="absolute right-2 top-[7px] z-50 rounded-full bg-red-600 p-[3px]" />
        <NotiHeading style={"mb-4 px-5 text-sm"} />
        <div className="divide-y divide-gray-300">
          {/* 1st  */}
          <NotiCard
            src={
              "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
          {/* 2nd  */}
          <div className="flex items-center gap-4 bg-gray-100 px-5 py-2">
            <div className="relative">
              <img
                className="h-10 w-10 rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
              />
              <span className="absolute -top-1 right-0 inline-block rounded-full bg-yellow-500 p-[3px]">
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
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
              </span>
            </div>
            <div>
              <p className="mb-0.5 text-sm">
                <span className="font-semibold">Ryan</span> mentioned you in{" "}
                <span className="font-semibold">comment.</span>
              </p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          {/* 3rd  */}
          <div className="flex items-start gap-4 px-5 py-2">
            <div className="relative mt-1">
              <img
                className="h-10 w-10 rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              />
              <span className="absolute -top-1 right-0 inline-block rounded-full bg-blue-700 p-[3px]">
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
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </span>
            </div>
            <div>
              <p className="mb-0.5 text-sm">
                <span className="font-semibold">Leslie Wahl</span> send you a{" "}
                <span className="font-semibold">friend request.</span>
              </p>
              <p className="text-xs text-gray-500">1 day ago</p>
              <div className="mt-2 flex gap-3">
                <button className="grow rounded bg-purple-700 py-1 text-xs font-semibold text-white">
                  Accept
                </button>
                <button className="grow rounded bg-purple-700 py-1 text-xs font-semibold text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
          {/* 4th  */}
          <div className="flex items-start gap-4 px-5 py-2">
            <div className="relative mt-1 w-20">
              <img
                className="h-10 w-10 rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              />
              <span className="absolute -top-1 right-0 inline-block rounded-full bg-green-500 p-[3px]">
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
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </span>
            </div>
            <div>
              <p className="mb-0.5 text-sm">
                <span className="font-semibold">Leslie Wahl</span> send you a{" "}
                <span className="font-semibold">friend request.</span>
              </p>
              <p className="text-xs text-gray-500">2 days ago</p>
              <div className="mb-3 mt-5 rounded-md border-2 border-gray-200 bg-gray-100 p-2">
                <div className="flex items-center gap-2">
                  <img
                    className="h-14 w-14 rounded-md object-cover"
                    src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW50fGVufDB8fDB8fHww"
                  />
                  <div>
                    <a href="#" className="text-xs text-gray-500">
                      Techtalk.me
                    </a>
                    <h3 className="text-sm font-semibold text-purple-700">
                      App Generator - The technology-agnostic way
                    </h3>
                  </div>
                </div>
                <p className="mt-1 text-[10px] text-gray-500">
                  Even after two years of R&amp;D work. AppSeed is still a super
                  young concept and we expect a slow adoption in the next few...
                </p>
              </div>
              <div className="rounded-md border-2 border-gray-200 bg-gray-100 p-2">
                <div className="flex items-center gap-2">
                  <img
                    className="h-10 w-14 rounded-md object-cover"
                    src="https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
                  />
                  <div className="grow">
                    <h3 className="text-sm font-semibold text-purple-700">
                      Background Images
                    </h3>
                    <p className="text-xs text-gray-500">ZIP - 1.4GB</p>
                  </div>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 stroke-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 px-5">
          <button className="w-full rounded-md bg-purple-500 py-2 text-sm font-semibold text-white">
            See all notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotiActiveBox;
