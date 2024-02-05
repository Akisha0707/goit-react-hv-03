import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

const ContactList = ({ users }) => {
  return (
    <ul className={css.userList}>
      {users.map(item => {
        return <Contact key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ContactList;
