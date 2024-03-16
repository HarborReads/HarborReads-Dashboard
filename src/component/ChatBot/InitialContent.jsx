import React, { useState, useEffect } from 'react';
import SendIcon from '@mui/icons-material/PresentToAll';
import './ChatBot.css';

function InitialContent({userName,updateChatType,updateChat}) {
  const [currentChatType,setCurrentChatType]=useState('');
  const handleButtonClick = (value,messageText) => {
    updateChatType(value);
    setCurrentChatType(value);
  };

  const handleInitialMessage=()=>{
    const messageText = getMessageText(); // Get the appropriate message text based on chatType
    updateChat(messageText);
  }

  useEffect(()=>{
    handleInitialMessage();
  },[currentChatType]);

  const getMessageText = () => {
    // Return the appropriate message text based on chatType
    switch (currentChatType) {
      case 'newReadersChat':
        return "Hi!, I'm a new reader. Help me find a book.";
      case 'avidReadersChat':
        return "Hi!, I'm an avid reader. Help me find a book.";
      case 'bookChat':
        return "Hi!, let's have a chat about books.";
      default:
        return '';
    }
  };

  useEffect

  
  return (
    <div className="flex flex-col justify-center items-center h-full  animate-fadeI">
      <div className="p-3 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-700">
          Hello, {userName}!
        </h1>
        <p className="text-2xl md:text-4xl font-bold text-slate-500">How can I help you today?</p>
      </div>
      <div className="chatgrid text-slate-500" >
        <button className="button md:h-[9.375rem] h-[6rem]" style={{ fontSize: '1.25rem'}} onClick={()=>{handleButtonClick("newReadersChat","Hi!, I'm a new reader Help me find a book.")}}>
          New to reading?<br/> Need help finding a book?
          <SendIcon className="arrow" />
          <span className="click-to-send">Click to send</span>
        </button>
        <button className="button md:h-[9.375rem] h-[5.625rem]" style={{ fontSize: '1.25rem'}} onClick={()=>{handleButtonClick("avidReadersChat","Hi!, I'm an avid reader. Help me find a book.")}}>
          Love reading?<br/> Let's find your next book!
          <SendIcon className="arrow" />
          <span className="click-to-send" >Click to send</span>
        </button>
        <button className="button md:h-[9.375rem] h-[5.625rem] " style={{ fontSize: '1.25rem '}} onClick={()=>{handleButtonClick("bookChat","Hi!,lets have a chat about books.")}}>
          Interested in chatting about books?
          <SendIcon className="arrow" />
          <span className="click-to-send">Click to send</span>
        </button>
      </div>
    </div>
  );
}

export default InitialContent;
