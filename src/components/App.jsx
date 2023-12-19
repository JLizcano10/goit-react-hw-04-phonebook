import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleNameSubmit = (name, number) => {
    const nameAlreadyExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameAlreadyExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      name,
      id: nanoid(),
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilter = e => {
    const searchName = e.target.value;
    setFilter(searchName);
  };

  const handleDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        gap: 20,
        padding: 10,
        fontSize: 25,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm submit={handleNameSubmit} />
      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
