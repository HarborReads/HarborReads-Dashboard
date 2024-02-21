import React, { useState } from 'react';
import data from './TemplateData.json';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="maincontainer w-[400px] md:w-[1000px] h-[725px] md:h-[725px] bg-black flex flex-col justify-between overflow-y-auto">
        <div className='productContainer'>
          <div className='flex justify-center items-center mt-5'>
            <input
              className='input w-[350px] md:w-[900px] h-[40px] md:h-[40px] rounded-full pl-4'
              type='text'
              placeholder='Search'
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center">
            {data
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => (
                <div className="bg-white m-4 p-4 rounded-md" key={val.id}>
                  <img src={val.image} alt="" className="h-48" />
                  <h3>{val.title}</h3>
                  <p className="price">${val.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
