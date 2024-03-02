import React from 'react';
import data from '../search/TemplateData.json';

function Personallib() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="maincontainer w-[400px] md:w-[65%] h-[570px] md:h-[725px] bg-black flex flex-col justify-between overflow-y-auto">
        <div className='productContainer'>
          <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-3 flex justify-center">
            <div className="relative flex">
              <h1 className='w-full max-w-[408px] text-3xl md:text-5xl font-medium mt-5 text-white text-center'>Personal Library</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-7">
            {data.map((val, index) => (
              <div key={index} className="bg-white m-4 p-4 rounded-md">
                <img src={val.image} alt="" className="h-24 md:h-48" />
                <h3 className='text-[10px] md:text-[20px] '>{val.title}</h3>
                <p className="price">${val.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personallib;
