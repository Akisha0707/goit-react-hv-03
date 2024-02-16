import { useState, useEffect } from 'react';
import ContactForm from '/src/components/ContactForm/ContactForm.jsx';
import SearchBox from '/src/components/SearchBox/SearchBox.jsx';
import ContactList from '/src/components/ContactList/ContactList.jsx';
import css from './App.module.css';
// import { useId } from 'react';

const someUsers = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [users, setUser] = useState(someUsers);
  const [filterUser, setFilterUser] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-user', JSON.stringify(users), [users]);
  });

  const addNewUser = newUser => {
    setUser(allUsers => {
      return [...allUsers, newUser];
    });
  };

  const deleteUser = userId => {
    setUser(allUsers => {
      return allUsers.filter(user => user.id !== userId);
    });
  };

  // const visibleUsers = users.filter(user =>
  //   user.name.toLowerCase().includes(filterUser.toLowerCase())
  // );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addNewUser} />
      <SearchBox value={filterUser} onChange={setFilterUser} />
      <ContactList users={users} onDelete={deleteUser} />
    </div>
  );
}

export default App;
// items = { visibleUsers };
