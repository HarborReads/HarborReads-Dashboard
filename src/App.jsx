// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import LeftBar from './component/LeftBar';
import SearchPage from './component/search/SearchPage';

import ChatBot from './component/ChatBot/ChatBot'

import RightBar from './component/RightBar/RightBar';
import Dashboard from './component/DashBoard/DashBoard';
import BookPreview from './component/BookPreview';

const user = { name: 'John Doe', image: 'profile.jpg' };


const App = () => {
  
  return (
    <Router>
      <div className="grid grid-cols-2 md:grid-cols-5">
        <LeftBar className="LeftBar col-span-1 md:col-span-1" />
        <div className="content-pane col-span-3 md:col-span-3">
          <Routes>
            <Route path="/search" element={<SearchPage />} /> {/* Default route for ContentPane */}

            <Route path="/chatbot" element={<ChatBot element={user}/>}/>
            <Route path="/" element={<Dashboard user={user} />} /> {/* Default route for ContentPane */}
            <Route path="/bookpre" element={<BookPreview/>}/>

          </Routes>
        </div>
        <RightBar className="RightBar col-span-1 md:col-span-1" />
      </div>
    </Router>
  );
  
};

export default App;

