import './Chat.css';
import React, { useState } from 'react';

function Chat() {
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const receiveMessage = () => {  
    setReceivedMessage(message);
  }
  return (
    <div className='Chat'>
      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button className='sendButton' onClick={receiveMessage}>送信</button>
      <p className='message'>{receivedMessage}</p>
    </div>
  );
}

export default Chat;
