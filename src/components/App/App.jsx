import { useState } from 'react';
import ContactForm from '/src/components/ContactForm/ContactForm.jsx';
import SearchBox from '/src/components/SearchBox/SearchBox.jsx';
import ContactList from '/src/components/ContactList/ContactList.jsx';
import css from './App.module.css';
import { useId } from 'react';

function App() {
  const [users, setUser] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filterUser, setFilterUser] = useState('');

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

  const visibleUsers = users.filter(user =>
    user.name.toLowerCase().includes(filterUser.toLowerCase())
  );

  console.log(visibleUsers);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addNewUser} />
      <SearchBox value={filterUser} onChange={setFilterUser} />
      <ContactList users={users} onChange={setUser} onDelete={deleteUser} items={visibleUsers} />
    </div>
  );
}

export default App;

// const [feedback, setFeedback] = useState(() => {

//     const savedClicks = window.localStorage.getItem('saved-clicks')
//     if (savedClicks !== null) {
//       return JSON.parse(savedClicks);
//     } return {};

//   })

// useEffect(() => {
//   window.localStorage.setItem('saved-clicks', JSON.stringify(feedback))
// });
