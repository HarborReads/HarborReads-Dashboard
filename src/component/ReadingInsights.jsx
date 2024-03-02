import React from "react";

const CircularProgress = ({ percentage, color }) => {
  const radius = 40; // Increased radius for larger circles
  const strokeWidth = 7; // Increased stroke width for larger circles
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
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
        fontSize="16px" // Adjusted font size for larger circles
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
    <div className="reading-insights-container h-100%" style={{ marginBottom: "10px", textAlign: "center", background: "linear-gradient(to bottom, #FFFFFF 0%, #A24857 250%)", overflow: "hidden" }}>
      <h1 className="topic-title text-3xl font-sans text-black mb-4 mt-6" style={{ height: "50px" }}>Reading Insights</h1>
      <h2 className="topic-title text-4xl font-bold font-sans text-black mb-4 mt-6" style={{ transition: "transform 0.5s ease" , height: "50px"}}>🎯 Set Goals, Track Progress</h2>
      <p className="interactive-text text-lg font-bold text-black mb-2">Ready to take charge of your reading journey ?</p>
      <div style={{ width: "80%", margin: "0 auto" }}> {/* Centered div with 80% width */}
        <p className="mb-4">
        Trust us as your guide leading each chapter to fulfill your reading dreams. 
        </p>
        <p className="mb-4">Join us on a journey of endless wonder and discovery !</p>
      </div>
      <div className="button-container mb-6">
      <button className="section-button text-l font-medium text-black bg-white hover:bg-C4A484 px-8 py-4 rounded-md mr-4">Set Challenges</button>

      <button className="section-button text-l font-medium text-black bg-white hover:bg-C4A484 px-8 py-4 rounded-md">Quiz</button>
      </div>
      <h2 className="section-subtitle text-xl font-bold text-black mb-6">View Your Literary Milestones </h2>
      <div className="progress-container flex justify-between mb-2">
        <div className="w-[400px] h-[200px] rounded-[20px] bg-white border  flex flex-row items-center mx-4" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
          <div className="p-4 flex-grow">
            <p className="text-lg font-bold text-black mb-2">Year - 2023</p>
            <p className="text-lg font-bold text-black mb-2">Books read</p>
            <p className="text-lg font-bold text-black mb-2">5 of 12</p>
          </div>
          <div className="progress-circle" style={{ width: "120px", height: "120px" }}>
            <CircularProgress percentage={41} color="#ff6600" radius={60} strokeWidth={10} />
          </div>
        </div>
        <div className="w-[400px] h-[200px] rounded-[20px] bg-white border  flex flex-row items-center mx-4" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
          <div className="p-4 flex-grow">
            <p className="text-lg font-bold text-black mb-2">Year - 2023</p>
            <p className="text-lg font-bold text-black mb-2">Pages read</p>
            <p className="text-lg font-bold text-black mb-2">55 of 270</p>
          </div>
          <div className="progress-circle" style={{ width: "120px", height: "120px" }}>
            <CircularProgress percentage={70} color="#ff6600" radius={60} strokeWidth={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingInsights;
