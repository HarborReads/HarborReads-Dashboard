
import './App.css';
import LeftBar from './component/LeftBar';
import OpenScreen from './component/OpenScreen';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';




 import React from 'react'
 
 function App() {
   return (
    <div className="App bg-indigo-600 w-full h-screen overflow-hidden">
      
    <LeftBar/>
    <SignIn/>
    
    </div>
   )
 }
 
 export default App
 