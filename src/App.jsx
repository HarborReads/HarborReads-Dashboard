
import './App.css';
import LeftBar from './component/LeftBar';
import OpenScreen from './component/OpenScreen';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';




 import React from 'react'
import RightBar from './component/RightBar/RightBar';
import ReadingInsights from './component/ReadingInsights';
 
 function App() {
   return (
    <div className="App bg-indigo-600 w-full h-screen overflow-hidden">
      
    <LeftBar/>
    <RightBar/>
    <ReadingInsights/>
    
    </div>
   )
 }
 
 export default App
 