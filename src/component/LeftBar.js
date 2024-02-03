import React from 'react';
import GroupImage from '../image/Group.png'; // Update the import path
import { LeftBarData } from './LeftBarData';

function LeftBar() {
  return (
    <div className='LeftBar'>
      <div className='AppHeader'>
        <ul className='LogoList'>
          {/* Use the imported image */}
          <img src={GroupImage} alt='App Logo' className='AppLogo' />
          <h1 className='AppName'>Harbour Reads</h1>
        </ul>
      </div>
      <ul className='List'>
        {LeftBarData.map((val, key) => (
          <li key={key} className='row' onClick={() => (window.location.pathname = val.link)}>
            {" "}
            <div id='icon'>{val.icon}</div>{" "}
            <div id='title'>{val.title}</div>
          </li>
        ))}
      </ul>
      <div>
        <h1>Chat History</h1>
      </div>
    </div>
  );
}

export default LeftBar;
