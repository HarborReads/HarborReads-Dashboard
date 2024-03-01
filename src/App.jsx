// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import LeftBar from './component/LeftBar';
import SearchPage from './component/search/SearchPage';
import ChatBot from './component/ChatBot/ChatBot'
import RightBar from './component/RightBar/RightBar';
import Quiz from './component/QuizData/QuizPage'
import SignIn from './component/SignIn'

const user = { id: "", name: "Mindula Apsari" };


const App = () => {
  return (
    <Router>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full h-screen overflow-hidden">
        
        <div className="content-pane col-span-3 md:col-span-3">
          <Routes>
            <Route path="/search" element={<SearchPage />} /> {/* Default route for ContentPane */}
            <Route path="/chatbot" element={<ChatBot element={user}/>}/>
          </Routes>
        </div>
       
      </div>
    </Router>
  );
};

export default App;
