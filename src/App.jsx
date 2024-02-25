// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import LeftBar from './component/LeftBar';
import SearchPage from './component/search/SearchPage';
import RightBar from './component/RightBar/RightBar';

const App = () => {
  return (
    <Router>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <LeftBar className="LeftBar col-span-1 md:col-span-1" />
        <div className="content-pane col-span-3 md:col-span-3">
          <Routes>
            <Route path="/" element={<SearchPage />} /> {/* Default route for ContentPane */}
          </Routes>
        </div>
        <RightBar className="RightBar col-span-1 md:col-span-1" />
      </div>
    </Router>
  );
};

export default App;
