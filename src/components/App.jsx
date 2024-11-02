import ContactList from './ContactList/ContactList';
import s from './App.module.css'; 
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

export default function App() {
  return (
    <div className={s.container}> 
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}