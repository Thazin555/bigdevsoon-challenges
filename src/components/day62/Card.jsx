import React from "react";

const Card = ({img, description, name, role}) => {
  return (
    <div className="max-w-[310px] bg-slate-800 p-5 rounded-xl h-[400px] flex flex-col">
      <div>
        <div className="flex justify-between items-center mb-5">
          <svg
            height="45px"
            width="45px"
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            fill="#9ca3af"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{ __html: " .st0{fill:#9ca3af;} " }}
              />
              <g>
                <path
                  className="st0"
                  d="M148.57,63.619H72.162C32.31,63.619,0,95.929,0,135.781v76.408c0,39.852,32.31,72.161,72.162,72.161h7.559 c6.338,0,12.275,3.128,15.87,8.362c3.579,5.234,4.365,11.898,2.074,17.811L54.568,422.208c-2.291,5.92-1.505,12.584,2.074,17.81 c3.595,5.234,9.532,8.362,15.87,8.362h50.738c7.157,0,13.73-3.981,17.041-10.318l61.257-117.03 c12.609-24.09,19.198-50.881,19.198-78.072v-107.18C220.748,95.929,188.422,63.619,148.57,63.619z"
                />
                <path
                  className="st0"
                  d="M439.84,63.619h-76.41c-39.852,0-72.16,32.31-72.16,72.162v76.408c0,39.852,32.309,72.161,72.16,72.161h7.543 c6.338,0,12.291,3.128,15.87,8.362c3.596,5.234,4.365,11.898,2.091,17.811l-43.113,111.686c-2.291,5.92-1.505,12.584,2.09,17.81 c3.579,5.234,9.516,8.362,15.871,8.362h50.722c7.157,0,13.73-3.981,17.058-10.318l61.24-117.03 C505.411,296.942,512,270.152,512,242.96v-107.18C512,95.929,479.691,63.619,439.84,63.619z"
                />
              </g>
            </g>
          </svg>
          <div className="bg-gradient-to-r from-lime-400 to-cyan-400 p-0.5 rounded-bl-full">
            <img
              className="size-14 rounded-bl-full"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mb-5 h-full">
        <p className="text-lg text-gray-300">
          {description}
        </p>
      </div>
      <div className="text-gray-300 text-sm mt-auto">
        <p>{name}</p>
        <p className="text-gray-400">{role}</p>
      </div>
    </div>
  );
};

export default Card;
