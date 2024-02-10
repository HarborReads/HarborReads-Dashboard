import React from 'react';
import logo from '../icons/logo.png';

export default function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="shadow-[0px_4px_28px_3px_rgba(1,1,1,1.00)] rounded-[43px] bg-white flex flex-col md:flex-row">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[500px]">
          <h2 className="text-2xl font-bold text-center mt-8 md:mt-24">Hello!</h2>
          <h2 className="text-sm md:text-lg font-bold text-center">Sign into your account!</h2>

          <div className="flex justify-center">
            <form className="max-w-sm mx-auto mt-5">

              <div className="mb-5">
                <input type="email" id="username" style={{ width: '250px' }} className="bg-gray-400 border text-sm md:text-base rounded-lg block p-2.5 md:p-3 dark:placeholder-gray-500 dark:text-white" placeholder="Email" required />
              </div>
              <div className="mb-5">
                <input type="password" id="password" style={{ width: '250px' }} className="bg-gray-400 border text-sm md:text-base rounded-lg block p-2.5 md:p-3 dark:placeholder-gray-500 dark:text-white" placeholder="Password" required />
              </div>

              <h2 className="text-sm md:text-lg mb-2 text-center">Sign into your account!</h2>

              <div className="flex justify-center">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base px-5 py-2.5 md:py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[300px] h-[200px] md:w-[300px] md:h-[500px] bg-black rounded-[43px] flex flex-col justify-center items-center mt-4 md:mt-0">
          <img src={logo} className="h-15 md:h-20" alt="Logo" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4 md:mt-8">Welcome</h2>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Back!!</h2>
        </div>
      </div>
    </div>
  );
}
