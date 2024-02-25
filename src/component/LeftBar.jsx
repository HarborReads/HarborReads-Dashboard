import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import team from '../icons/team.png';
import chatbot from '../icons/chatbot.png';
import search from '../icons/Search.png';
import home from '../icons/home.png';
import library from '../icons/library.png';

import '../App.css'

const navItems = [
  { to: '/', icon: home, text: 'Home' },
  { to: '/chatbot', icon: chatbot, text: 'Chatbot' },
  { to: '/search', icon: search, text: 'Search' },
  { to: '/library', icon: library, text: 'Your Library' },
  { to: '/insights', icon: team, text: 'Reading Insights' },
];

const NavItem = ({ to, icon, text }) => (
  <li>
    <Link to={to} className="flex items-center py-2 px-4 hover:bg-gray-700">
      <img src={icon} className="h-6 mr-2" alt={text} />
      {text}
    </Link>
  </li>
);

function LeftBar() {
   return (
     <div className="left-bar-container">
       <aside className="bg-slate-700 text-white flex flex-col h-screen"> {/* Changed background color and text color */}
         <div className="p-4 flex items-center">
           <img src={logo} className="h-50" alt="Logo" />
         </div>
         <nav className="py-4 flex-grow"> {/* Added flex-grow class */}
           <ul>
             {navItems.map((item, index) => (
               <NavItem key={index} {...item} />
             ))}
           </ul>
         </nav>
       </aside>
     </div>
   );
 }
export default LeftBar;
