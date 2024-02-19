import React from "react";

function RightBar() {
  return (
    <div className="w-72 fixed right-0  bg-gray-50 dark:bg-gray-800 h-full">
      <h1>New Release</h1>

      <div>
        <div className="w-64 rounded-lg bg-white">
          {" "}
          <img
            className="w-32 h-auto float-left"
            src="/public/Rectangle 97.png"
            alt=""
          />
          <li>
            {" "}
            Commissaire Georges Dupin’s holiday plans are rudely interrupted
            when someone pushes a noted doctor out of a top-floor window in the
            French harbor city of Concarneau. As the cantankerous but brilliant
            Dupin searches for the killer, he uncovers hidden, cutthroat
            political and social rivalries that roil beneath the surface.
          </li>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
