import { useState } from 'react'
import ContactForm from '/src/components/ContactForm/ContactForm.jsx'
import SearchBox from '/src/components/SearchBox/SearchBox.jsx'
import ContactList from '/src/components/ContactList/ContactList.jsx'
import css from './App.module.css'
import { useId } from 'react'



function App() {
 
  const [user, setUser] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])

  const [filterUser, setFilterUser] = useState('')
  console.log (filterUser)
  
  return (
    <div>
        <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox filterUser={filterUser} setFilterUser={setFilterUser} />
      <ContactList user={user} setUser={setUser} filterUser={filterUser} setFilterUser={setFilterUser} />
    </div>
  )
}

export default App
