import React from 'react';

function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea value={message} />
    </section>
  );
}

export default Chat;
