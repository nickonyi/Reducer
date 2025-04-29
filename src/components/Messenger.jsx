import React, { useReducer } from 'react';
import { messageReducer, initialState } from './messageReducer';
import ContactList from './ContactList';
import Chat from './Chat';
import { contacts } from './contact';

function Messenger() {
  const [state, dispatch] = useReducer(messageReducer, initialState);
  const message = state.messages[state.selectId];
  const contact = contacts.find((c) => c.id === state.selectId);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectId={state.selectId}
        dispatch={dispatch}
        message={message}
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
