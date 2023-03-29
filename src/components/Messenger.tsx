import * as React from 'react';

export interface IAppProps {
}

export function Messenger (props: IAppProps) {
  return (
    <div className='chat-container'>
       <div className="chat-header">
        <h1>Chat Main Page</h1>
        <p>Welcome to the chat room</p>
      </div>

      <div className="chat-messages">
        <div className="message">
          <div className="message-avatar">
            <img src="avatar1.jpg" alt="Avatar" />
          </div>
          <div className="message-content">
            <h2>User 1</h2>
            <p>Hey, how's it going?</p>
          </div>
        </div>
        <div className="message">
          <div className="message-avatar">
            <img src="avatar2.jpg" alt="Avatar" />
          </div>
          <div className="message-content">
            <h2>User 2</h2>
            <p>Not bad, thanks. How about you?</p>
          </div>
        </div>
        <div className="message">
          <div className="message-avatar">
            <img src="avatar1.jpg" alt="Avatar" />
          </div>
          <div className="message-content">
            <h2>User 1</h2>
            <p>Doing pretty well, thanks for asking.</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Type your message here..." />
        <button>Send</button>
      </div>
    </div>
  );
}

