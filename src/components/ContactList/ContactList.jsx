import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectNameFilter);
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchStr.toLowerCase().trim())
  );

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;