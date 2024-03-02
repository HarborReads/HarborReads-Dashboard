import React from "react";

function RightBar() {
  return (
    <div className="w-72 fixed right-0 bg-beige-200 dark:bg-white h-full "> {/* Changed bg-blue-200 to bg-beige-200 */}
      <h1>New Release</h1>

      <div>
        <div className="bg-slate-700 text-white flex flex-col h-screen">
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
