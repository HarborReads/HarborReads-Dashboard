import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import chatbotImage from '../assets/chatbotImg.png';


const CircularProgress = ({ percentage, color }) => {
  const radius = 40;
  const strokeWidth = 7;
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
        fontSize="16px"
        fontWeight="bold"
        fill="black"
      >
        {percentage}%
      </text>
    </svg>
  );
};

const ReadingInsights = ({ username }) => {
  const [numberOfReadBooks, setNumberOfReadBooks] = useState(0);
  const [wantToReadBooks, setWantToReadBooks] = useState(0);

  useEffect(() => {
    const fetchNumberOfReadBooks = async () => {
      try {
        const response = await fetch('http://localhost:3001/insight/getNoOfReadBooks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username })
        });
        const data = await response.json();
        setNumberOfReadBooks(data.numberOfReadBooks);
      } catch (error) {
        console.error('Error fetching number of read books:', error);
      }
    };

    const fetchWantToReadBooks = async () => {
      try {
        const response = await fetch('http://localhost:3001/insight/getWTRBooks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username })
        });
        const data = await response.json();
        setWantToReadBooks(data.wantTooReadBooks);
      } catch (error) {
        console.error('Error fetching number of want to read books:', error);
      }
    };

    fetchNumberOfReadBooks();
    fetchWantToReadBooks();
  }, [username]);

  const readBooksPercentage = ((numberOfReadBooks / wantToReadBooks) * 100).toFixed(2);

  return (
    <div className="reading-insights-container bg-very-light-maroon rounded-[20px] mx-auto relative" style={{ marginBottom: "10px", textAlign: "center", overflow: "hidden", padding: "20px" }}>
      <Link to="/">
        <button className="absolute left-3 top-3 bg-white text-black px-3 py-1 rounded-full">&lt;</button>
      </Link>
      <div className="container md:flex items-center">
        <div className="bg-very-light-maroon rounded-lg shadow-md p-4 flex items-center md:w-3/4">
          <div className="mr-4">
            <h3 className="text-xl md:text-base lg:text-3xl mb-3">Get Personalized Recommendations</h3>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4">Discover your next favorite book with our friendly chatbot! Whether you're into thrillers, romance, or sci-fi, we'll tailor recommendations just for you. Start chatting now and dive into a world of captivating reads!</p>
            <Link to="/chatbot" className="bg-brown text-white px-2 py-2 rounded-lg items-center mt-5 md-2">
              Set a Challenge
              <span className="ml-2">&#10132;</span>
            </Link>
            <Link to="/challenges" className="bg-brown text-white px-2 py-2 rounded-lg items-center mt-5 md-2">
              Let's take a Quiz
              <span className="ml-2">&#10132;</span>
            </Link>
          </div>
          <div>
            <img src={chatbotImage} alt="Chatbot" className="w-74 h-55" />
          </div>
        </div>
      </div>
      <h2 className="section-subtitle text-xl font-bold text-black mb-6 font-serif">View Your Literary Milestones</h2>
      <div className="progress-container flex justify-between mb-2">
        <div className="w-[400px] h-[200px] rounded-[20px] bg-white border flex flex-row items-center mx-4" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
          <div className="p-4 flex-grow">
            <p className="text-lg font-bold text-black mb-2 font-serif">Year - 2023</p>
            <p className="text-lg font-bold text-black mb-2 font-serif">Books read</p>
            <p className="text-lg font-bold text-black mb-2 font-serif">{numberOfReadBooks} of {wantToReadBooks}</p>
          </div>
          <div className="progress-circle" style={{ width: "120px", height: "120px" }}>
            <CircularProgress percentage={readBooksPercentage} color="#ff6600" radius={60} strokeWidth={10} />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="section-subtitle text-xl font-bold text-black mb-6 font-serif">Explore Reading Communities</h2>
        <p className="text-lg font-bold text-black mb-6 font-serif">Connect with other book lovers and join discussions on Goodreads!</p>
        <a href="https://www.goodreads.com/group" target="_blank" rel="noreferrer" className="bg-brown text-white px-6 py-3 rounded-lg inline-block">Explore Reading Communities</a>
      </div>
      <div className="mt-10">
        <h2 className="section-subtitle text-xl font-bold text-black mb-6 font-serif">View Leaderboard</h2>
        <p className="text-lg font-bold text-black mb-6 font-serif">Check out the top readers on HarborReads!</p>
        <Link to="/leaderboard" className="bg-brown text-white px-6 py-3 rounded-lg inline-block">View Leaderboard</Link>
      </div>
    </div>
  );
};

export default ReadingInsights;
