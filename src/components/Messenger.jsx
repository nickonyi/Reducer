import React, { useReducer } from 'react';
import { messageReducer, initialState } from './messageReducer';
import ContactList from './ContactList';
import Chat from './Chat';
import { contacts } from './contact';
import '../App.css';

function Messenger() {
  const [state, dispatch] = useReducer(messageReducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div className="messanger">
      <ContactList
        contacts={contacts}
        selectId={state.selectId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Messenger;
