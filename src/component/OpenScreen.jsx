import React from 'react';
import logo from '../icons/logo.png';
import backgroundImage from '../assets/landingBg.png'; // Path to your background image

export default function OpenScreen() {
  return (
    <div className="flex justify-center items-center h-screen" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="rounded-lg shadow-lg bg-white p-8 max-w-[400px] md:max-w-[500px] mx-4 md:mx-auto">
        <div className="flex justify-center items-center mb-8">
          <img src={logo} className="h-16 md:h-20" alt="Logo" />
        </div>
        <div className="mb-8">
          <h2 className="text-center font-extrabold text-[32px] md:text-[40px] text-gray-800">Discover Books</h2>
          <h2 className="text-center font-extrabold text-[32px] md:text-[40px] text-gray-800">You'll Love!</h2>
        </div>
        <div className="flex justify-center items-center mb-8">
          <button type="submit" className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm md:text-base px-5 py-3 text-center">Sign Up</button>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-[24px] md:text-[32px] text-gray-800 mb-2">New to HarborReads?</h2>
          <button type="button" className="font-bold text-[24px] md:text-[32px] text-gray-800 underline hover:no-underline">Sign In</button>
        </div>
      </div>
    </div>
  );
}
