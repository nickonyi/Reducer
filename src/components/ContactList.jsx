import React from 'react';

function ContactList({ contacts, selectId, dispatch }) {
  console.log(contacts);

  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className="select-btn"
              onClick={() => {
                dispatch({ type: 'changed_selection', contactId: contact.id });
              }}
            >
              {selectId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ContactList;
