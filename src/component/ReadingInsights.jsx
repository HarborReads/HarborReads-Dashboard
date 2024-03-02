import React from "react";

const CircularProgress = ({ percentage, color }) => {
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20px"
        fontWeight="bold"
        fill="black"
      >
        {percentage}%
      </text>
    </svg>
  );
};

const ReadingInsights = () => {
  return (
    <div
      className="reading-insights-container"
      style={{ marginBottom: "20px" }}
    >
      <p className="topic-title w-[px] h-[69px] text-5xl font-sans text-center text-white flex items-center justify-center">
        Reading Insights
      </p>
      <div
        className="section-box"
        style={{
          width: "900px", // Adjusted width
          height: "700px",
          borderRadius: "20px",
          backgroundColor: "#171616",
          boxShadow: "0px 8px 16px rgba(245, 173, 173, 0.7)",
          position: "relative", // Added position relative
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center horizontally
          justifyContent: "flex-start", // Align items to the top
          marginLeft: "auto", // Push box to the right
          marginRight: "auto", // Push box to the left
          marginBottom: "20px", // Margin from bottom
        }}
      >
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            alignItems: "center",
            gap: "100px",
          }}
        >
          {/* Container for buttons */}
          <button className="section-button text-4xl font-medium text-white bg-blue-500 hover:bg-blue-700 px-8 py-4 rounded-md">
            Set Challenges
          </button>
          <button className="section-button text-4xl font-medium text-white bg-blue-500 hover:bg-blue-700 px-20 py-4 rounded-md">
            Quiz
          </button>
        </div>

        <p
          className="section-subtitle text-4xl font-bold text-center text-white"
          style={{ marginTop: "25px", marginBottom: "25px" }}
        >
          Progress
        </p>

        {/* Wrapping elements inside box shadow */}
        <div
          className="w-[472px] h-[195px] rounded-[20px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border border-black"
          style={{
            boxShadow: "0px 8px 16px rgba(0,0,0,0.5)",
            marginTop: "50px",
            marginBottom: "80px",
            padding: "20px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <p className="w-[124px] h-10 text-xl font-bold text-left text-white">
            Year - 2023
          </p>
          <p className="w-[124px] h-10 text-xl font-bold text-left text-white">
            Books read
          </p>
          <p className="w-[124px] h-[23px] text-xl font-bold text-left text-white">
            5 of 12
          </p>
          {/* Percentage text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress percentage={41} color="#ff6600" />
          </div>
        </div>

        <div
          className="w-[472px] h-[195px] rounded-[20px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border border-black"
          style={{
            boxShadow: "0px 8px 16px rgba(0,0,0,0.5)",
            marginBottom: "20px",
            padding: "20px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <p className="w-[124px] h-10 text-xl font-bold text-left text-white">
            Year - 2023
          </p>
          <p className="w-[124px] h-10 text-xl font-bold text-left text-white">
            Pages read
          </p>
          <p className="w-[124px] h-[23px] text-xl font-bold text-left text-white">
            55 of 270
          </p>
          {/* Percentage text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CircularProgress percentage={65} color="#ff6600" />
          </div>
        </div>

        <svg
          width={161}
          height={160}
          viewBox="0 0 161 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[161px] h-40 relative"
          preserveAspectRatio="none"
        >
          {/* SVG path and mask */}
        </svg>
      </div>

      {/* Additional divs with box shadow */}
      <div
        className="w-[472px] h-[195px] rounded-[20px] bg-white border border-black"
        style={{
          boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
          marginBottom: "20px",
        }}
      />
      <div
        className="w-[472px] h-[195px] rounded-[20px] bg-white border border-black"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      />
    </div>
  );
};

export default ReadingInsights;
