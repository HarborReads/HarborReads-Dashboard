import React, { useState } from 'react';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);

  const updateChat = (messageText) => {
    if (messageText.trim() === "") return;

    const newMessage = {
      text: messageText,
      from: 'user'
    };

    // Update messages with the current state
    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Simulate bot typing for demonstration purposes
    setBotTyping(true);
    setTimeout(() => {
      const botMessage = {
        text: 'This is a bot response.',
        from: 'bot'
      };

      // Update messages again using the previous state
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setBotTyping(false);
    }, 1000);
  };

  return (
    <div className='flex justify-center items-center'>
      <div className="w-[1000px] h-[725px] md:w-[1000px] md:h-[725px]  bg-white flex flex-col justify-between">
        <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          {messages.map((message, index) => (
            <div key={index} className={`flex items-end ${message.from === 'bot' ? '' : 'justify-end'}`}>
              <div className={`flex flex-col space-y-2 text-md leading-tight max-w-lg mx-2 ${message.from === 'bot' ? 'order-2 items-start' : 'order-1 items-end'}`}>
                <div>
                  <span className={`px-4 py-3 rounded-xl inline-block ${message.from === 'bot' ? 'rounded-bl-none bg-gray-100 text-gray-600' : 'rounded-br-none bg-blue-500 text-white'}`}>{message.text}</span>
                </div>
              </div>
              <img src={message.from === 'bot' ? 'https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png' : 'https://i.pravatar.cc/100?img=7'} alt="" className="w-6 h-6 rounded-full" />
            </div>
          ))}
          {botTyping && (
            <div className="flex items-end">
              <div className="flex flex-col space-y-2 text-md leading-tight mx-2 order-2 items-start">
                <div><img src="https://support.signal.org/hc/article_attachments/360016877511/typing-animation-3x.gif" alt="..." className="w-16 ml-6" /></div>
              </div>
            </div>
          )}
        </div>
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-3">
          <div className="relative flex">
            <input type="text" placeholder="Say something..." autoComplete="off" autoFocus={true} onKeyDown={(e) => { if (e.key === 'Enter') { updateChat(e.target.value); e.target.value = ''; } }} className="text-md w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 pr-16 bg-gray-100 border-2 border-gray-200 focus:border-blue-500 rounded-full py-2" />
            <div className="absolute right-2 items-center inset-y-0 hidden sm:flex">
              <button type="button" className="inline-flex items-center justify-center rounded-full h-8 w-8 transition duration-200 ease-in-out text-white bg-blue-500 hover:bg-blue-600 focus:outline-none" onClick={(e) => { const inputElement = e.target.parentElement.previousElementSibling; updateChat(inputElement.value); inputElement.value = ''; }}>
                <i className="mdi mdi-arrow-right text-xl leading-none"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
