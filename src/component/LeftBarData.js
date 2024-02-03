import HomeIcon from '@mui/icons-material/Home';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import React from "react"
import SignUp from './SignUpPage/SignUp';


export const LeftBarData =[
    {
        title : "Home",
        icon:<HomeIcon/>,
        link:"/SignUp"
    },

    {
        title : "ChatBot",
        icon:<ChatIcon/>,
        link:"/Home"
    },

    {
        title : "Search",
        icon:<SearchIcon/>,
        link:"/Home"
    },

    {
        title : "Your Library",
        icon:<LibraryAddIcon/>,
        link:"/Home"
    },

    {
        title : "Reading Insights",
        icon:<EmojiEventsIcon/>,
        link:"/Home"
    }
]
