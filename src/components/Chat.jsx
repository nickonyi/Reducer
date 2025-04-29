import React from 'react';

function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea value={message} placeholder={'chat to ' + contact.name} />
      <br />
      <button className="chat-btn">Send to {contact.email}</button>
    </section>
  );
}

export default Chat;
