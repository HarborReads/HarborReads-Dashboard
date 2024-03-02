import React, { useState } from "react";

function RightBar() {
  const [isRightBarOpen, setIsRightBarOpen] = useState(true);

  const toggleRightBar = () => {
    setIsRightBarOpen(!isRightBarOpen);
  };

  return (
    <div>
      <button
        onClick={toggleRightBar}

        className="fixed top-0 right-0 z-50 p-2 text-gray-500 sm:hidden focus:outline-none hover:bg-bg-#C19A6B  dark:hover:bg-gray-700"

      >
        <span className="sr-only">Toggle Right Bar</span>
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isRightBarOpen ? "M6 18L18 6M6 6l12 12" : "M18 18L6 6M18 6l-12 12"
            }
          />
        </svg>
      </button>
      {isRightBarOpen && (

        <div className="w-64 fixed top-0 right-0 bg-white h-full shadow-lg">
          <div className="p-4">
            <h3 className="text-black text-lg font-bold mb-4">New Releases</h3>
            <div className="flex flex-col space-y-4">
              <img
                className="w-full h-46"
                src="src\assets\RightBar.png"
                alt=""
              />
              <img
                className="w-full h-46"
                src="/public/Rectangle 97.png"
                alt=""
              />
              <img
                className="w-full h-auto"
                src="/public/Rectangle 97.png"
                alt=""
              />

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RightBar;
