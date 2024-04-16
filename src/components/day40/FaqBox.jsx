import React from "react";

const FaqBox = (props) => {
  const handleHideShow = () => {
    props.hideShow(props.id);
    // console.log(props.hide);
  };
  return (
    <div
      className={`${
        props.hide
          ? "bg-white rounded-full py-3"
          : "bg-cyan-600 text-white py-4 rounded-xl"
      } px-3   shadow-[0px_0px_10px_1px_#e5e7eb] mb-4`}
    >
      <button
        onClick={handleHideShow}
        className="flex items-center justify-between w-full"
      >
        <p className="font-semibold">{props.question}</p>
        {props.hide ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
      </button>
      <p className={`${props.hide && "hidden"} mt-3 text-gray-200`}>
        {props.answer}
      </p>
    </div>
  );
};

export default FaqBox;

{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> */
}
