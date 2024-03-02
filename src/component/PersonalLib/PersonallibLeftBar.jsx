import React from 'react';

function PersonallibLeftBar() {
  const buttons = [
    "BookShelves",
    "All",
    "Read",
    "Currently Reading",
    "Want to Read"
  ];

  const buttonList = buttons.map((button, index) => (
    <li key={index}>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <span className="text-white mb-2">{button}</span>
      </a>
    </li>
  ));

  return (
    <div className="h-full w-64 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <div className='flex justify-center items-center mt-3 mb-5'>
            <h1 className='text-white text-[30px] underline '>My Books</h1>
          </div>
      <aside >
        <ul>
          {buttonList}
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
             
            </a>
          </li>
        </ul>
        <div>
        <h1 className='text-white text-[20px] underline'>Name</h1>
        <h1 className='text-white text-[15px] mt-3'>Add a Shelf :</h1>
        <input className='text-[15px] rounded-2xl mr-2'></input>
        <button className='text-white text-[15px] bg-blue-500 rounded-xl w-[40px]'>Add</button>
      </div>

      </aside>

    </div>
  );
}

export default PersonallibLeftBar;
