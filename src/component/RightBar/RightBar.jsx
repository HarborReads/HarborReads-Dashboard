import React, { useState } from "react";

function RightBar() {
  const [isRightBarOpen, setIsRightBarOpen] = useState(true);

  const toggleRightBar = () => {
    setIsRightBarOpen(!isRightBarOpen);
  };

  const closeRightBar = () => {
    setIsRightBarOpen(false);
  };

  const openRightBar = () => {
    setIsRightBarOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleRightBar}
        className="fixed top-0 right-0 z-50 p-2 text-gray-500 sm:hidden focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700"
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
        <div className="w-64 fixed top-0 right-0 bg-gray-50 dark:bg-gray-800 h-full shadow-lg">
          <div className="p-4">
            <h2 className="bg-white text-lg font-bold mb-4">New Release</h2>
            <div className="bg-white rounded-lg p-4">
              <img
                className="w-40 h-auto float-left mr-4"
                src="/public/Rectangle 97.png"
                alt=""
              />
              <p className="text-gray-800">
                Commissaire Georges Dupin’s holiday plans are rudely interrupted
                when someone pushes a noted doctor out of a top-floor window in
                the French harbor city of Concarneau. As the cantankerous but
                brilliant Dupin searches for the killer, he uncovers hidden,
                cutthroat political and social rivalries that roil beneath the
                surface.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RightBar;
