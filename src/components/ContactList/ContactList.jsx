import Contact from '../Contact/Contact.jsx'
import css from './ContactList.module.css'

const ContactList = ({ user }) => {
    
    return (
      
    <ul className={css.userList}>
            {user.map((item) => { return <Contact key={item.id} item={item} />})}
    </ul>
            
    )
}


export default ContactList