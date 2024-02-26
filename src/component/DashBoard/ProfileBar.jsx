import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProfileBar.css';

const ProfileBar = ({ user }) => {
  const [showName, setShowName] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add event listener to listen for clicks outside of the options box
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="profile-bar flex items-center justify-between bg-gray-200 p-4 rounded-lg shadow relative">
      <div className="flex items-center space-x-4">
        <div className="flex items-center relative">
          <img
            src={"https://media.istockphoto.com/id/1502422361/photo/design-professionals-using-a-laptop-together-in-an-office.jpg?b=1&s=612x612&w=0&k=20&c=V4JWz4y5HfafpdFEoJL-De7bb-Vj6tNN2goF9m9UFrA="}
            alt="Profile"
            className="rounded-full h-40 w-40 p-2 border-4 border-white hover:scale-110 transition duration-300"
          />
        </div>
        <div className="ml-2">
          <p className="text-gray-700 text-2xl font-bold">Profile</p>
          {showName && (
            <p className="text-gray-900 text-5xl font-bold typing-animation">{user.name}</p>
          )}
        </div>
      </div>
      {/* Ellipsis menu */}
      <div ref={menuRef} className="absolute top-0 right-0 mt-0.5 md:mt-1 mr-4">
        <button className="ellipsis-btn text-2xl md:text-3xl font-bold" onClick={toggleMenu}>
          <span className="text-gray-900">...</span>
        </button>
        {menuOpen && (
          <div className="absolute top-0 right-0 mt-10 w-32 bg-transparent rounded-lg shadow-lg overflow-hidden z-10">
            <Link to="/edit-profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Edit Profile</Link>
            <Link to="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Log Out</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileBar;
