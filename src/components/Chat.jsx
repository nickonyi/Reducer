import React from 'react';

function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'chat to ' + contact.name}
        onChange={(e) => {
          dispatch({ type: 'edited_message', message: e.target.value });
        }}
      />
      <br />
      <button
        className="chat-btn"
        onClick={() => {
          alert(`Sending "${message}" to ${contact.email}`);
          dispatch({ type: 'sent_message' });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}

export default Chat;
