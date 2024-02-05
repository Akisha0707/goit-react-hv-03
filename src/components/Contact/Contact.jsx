// import { Children } from 'react';
import css from './Contact.module.css';
import { ImUser } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = ({ item, onDelete }) => {
  return (
    <>
      <div className={css.styleElement}>
        <li className={css.styleName}>
          <ImUser /> {item.name}
        </li>
        <p className={css.styleText}>
          <BsFillTelephoneFill /> {item.number}
        </p>
        <button className={css.styleButton} onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
