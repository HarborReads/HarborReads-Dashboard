import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LeftBar from './component/LeftBar';
import SearchPage from './component/search/SearchPage';
import ChatBot from './component/ChatBot/ChatBot';
import RightBar from './component/RightBar/RightBar';
import Dashboard from './component/DashBoard/DashBoard';
import BookPreview from './component/BookPreview';
import ReadingInsights from './component/ReadingInsights';
import EditProfile from './component/EditProfile';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

import './App.css';



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [signinMsg, setSigninMsg] = useState('');
  const [signupMsg, setSignUpMsg] = useState('');
  const [auth,setAuth]=useState("signin");
  const [firstVisit, setFirstVisit] = useState(true); // Track if it's the user's first visit
  const [userName,setUserName]=useState('YOU');
  const [currentSession,setCurrentSession]=useState({hh:"hh"});

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem('visited');
    if (visited) {
      setFirstVisit(false);
    } else {
      localStorage.setItem('visited', 'true');
    }
  }, []);

  const handleSignIn = async (username, password) => {
    try {
      const response = await fetch('http://localhost:3001/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"username": username, "password":password }),
      });

      const data = await response.json();
      if (response.ok) {
        if (data.message === 'Login successful') {
          setIsAuthenticated(true);
          setSigninMsg('Login successful');
          setCurrentSession(data.userSession);
          console.log("heyy")
          console.log(data.userSession);
          console.log(currentSession);
          console.log('Authenticated:', isAuthenticated); // Add this line
        } else {
          setSigninMsg('Invalid username or password');
        }
      } else {
        // Handle non-200 status code
        setSigninMsg('Failed to sign in');
      }
    } catch (error) {
      // Handle fetch error
      setSigninMsg('Failed to sign in');
    }
  };

  const handleSignUp = async (username, email,password) => {
    try {
      const response = await fetch('http://localhost:3001/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"username": username, "email":email, "password":password }),
      });
      const data = await response.json();
    if (response.ok) {
      setIsAuthenticated(true);
      console.log(data.session);
      setCurrentSession(data.session);
      setSignUpMsg('User created successfully');
      // Redirect to dashboard
    } else {
      setSignUpMsg(data.error || 'Failed to sign up');
    }
  } catch (error) {
    setSignUpMsg('Failed to sign up');
  }
  };
  console.log('IsAuthenticated:', isAuthenticated);

  // Accessing user data
const getUserData = async () => {
  try {
    const response = await fetch('http://localhost:3001/user/username', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"userSession": currentSession}),
    });
    const data = await response.json();
    setUserName(data);
    console.log('User data:', data);
  } catch (error) {
    console.error('Failed to get user data', error);
  }
};

useEffect(() => {
    getUserData();
}, [currentSession]);

  return (
    <Router>
      <Routes>
        <Route path="/" element=
          {firstVisit ? (
            <SignUp handleSignUp={handleSignUp} signupMsg={signupMsg} setAuth={setAuth} />
          ) : isAuthenticated ? (
            <AuthenticatedRoutes userName={userName} />
          ) : (
            auth === 'signin' ? (
              <SignIn handleSignIn={handleSignIn} signinMsg={signinMsg} setAuth={setAuth} />
            ) : (
              <SignUp handleSignUp={handleSignUp} signupMsg={signupMsg} setAuth={setAuth} />
            )
          )}>
        </Route>
        <Route path="*" element={<AuthenticatedRoutes userName={userName} />} />
      </Routes>
    </Router>
  );
};


const AuthenticatedRoutes = ({userName}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5">
      <LeftBar className="LeftBar col-span-1 md:col-span-1" />
      <div className="content-pane col-span-3 md:col-span-3">
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/chatbot" element={<ChatBot element={userName}/>} />
          <Route path="/bookpre" element={<BookPreview />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path='/' element={<Dashboard userName={userName} />} />
        </Routes>
      </div>
      <RightBar className="RightBar col-span-1 md:col-span-1" />
    </div>
  );
};

export default App;

