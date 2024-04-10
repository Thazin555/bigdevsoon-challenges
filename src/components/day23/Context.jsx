import React from "react";

const Context = () => {
  const length = 5;
  const numbers = Array.from({ length }, (_, index) => index + 1);
  return (
    <div className="flex mt-10">
      {/* left context  */}
      <div className="w-[40%] flex items-center gap-8 relative">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="size-16"
          >
            <path
              fill="#134e4a"
              d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
            />
          </svg>
        </div>
        <div className="bg-white w-[55%] p-4 shadow-xl rounded-xl absolute top-[50%] left-5">
          <div className="flex items-center gap-3 mb-3">
            <img
              className="size-12 rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <div>
              <h1 className="font-bold text-sm">Debra D.Gilliam</h1>
              <div className="flex items-center gap-2">
              <span className="text-sm">4.8</span>
              <div className="flex items-center gap-1">
                {numbers.map((num) => (
                  <svg
                    key={num}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fbbf24"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-green-950">
            "Absolutely love this plant app! It's like having a green thumb in
            your pocket. So easy to use, with tons of helpful tips and reminders
            for plant care".
          </p>
        </div>
        <div>
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      {/* right context  */}
      <div className="w-[60%] ps-20 my-8">
        <h3 className="text-4xl text-green-800 font-serif leading-snug font-[700] mb-8">
          Make your <br /> home beautiful <br /> with plants
        </h3>
        <p className="w-[60%] text-green-800 font-[500] mb-10">
          Unlock the secrets of greenery and infuse every corner with life and
          serenity. From vibrant blooms to lush foliage, let your home reflect
          the timeless elegance of nature's bounty.
        </p>
        <div className="flex w-[50%] items-center gap-6">
          <div className="w-[50%] flex flex-col gap-3 items-center">
            <img
              className="w-full h-44 object-cover object-center rounded-xl"
              src="https://images.unsplash.com/photo-1528475563668-e15742001b92?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div>
              <button className="p-1 bg-gray-100 rounded hover:bg-gray-500 hover:text-white duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3 stroke-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-3 items-center">
            <img
              className="w-full h-44 object-cover object-center rounded-xl"
              src="https://i.pinimg.com/236x/07/f7/b0/07f7b05321785e7a1c8df63534b66ff3.jpg"
              alt=""
            />
            <div>
              <button className="p-1 bg-gray-100 rounded hover:bg-gray-500 hover:text-white duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3 stroke-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Context;
