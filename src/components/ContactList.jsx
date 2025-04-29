import React from 'react';

function ContactList({ contacts, selectId, dispatch, message }) {
  console.log(contacts);

  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button className="select-btn">
              {selectId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ContactList;
