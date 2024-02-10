import React from 'react';
import logo from '../icons/logo.png';

export default function OpenScreen() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-[10px] border border-white bg-black w-[400px] md:w-[500px] h-[500px] md:h-[600px]">
        <div className="flex justify-center items-center mt-10 md:mt-20">
          <img src={logo} className="h-15 md:h-20" alt="Logo" />
        </div>
        <div>
          <h2 className="text-center font-extrabold text-[24px] md:text-[32px] text-white">Discover Books</h2>
          <h2 className="text-center font-extrabold text-[24px] md:text-[32px] text-white">You'll Love!</h2>
        </div>
        <div className="flex justify-center items-center">
          <button type="submit" className="text-white bg-green-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base w-100px md:w-auto px-5 py-2.5 md:py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
        </div>
        <div>
          <h2 className="text-center font-extrabold text-[24px] md:text-[32px] text-white mt-8 md:mt-10">New to HarborReads</h2>
          <h2 className="text-center font-extrabold text-[24px] md:text-[32px] text-white">Sign in</h2>
        </div>
      </div>
    </div>
  );
}
