import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useFetchContactsQuery } from 'redux/contactApi';

import css from './App.module.css';

export function App() {
  const { data } = useFetchContactsQuery();

  return (
    <div className={css.container}>
      <h1 className={css.titel}>Phonebook</h1>
      <div className={css.contactSection}>
        <div className={css.formSection}>
          <ContactForm />
        </div>

        <div className={css.listSection}>
          <h2 className={css.titelContacts}>Contacts</h2>
          <Filter />
          {data && data.length > 0 ? (
            <ContactList />
          ) : (
            <p className={css.message}>Add a new contact!</p>
          )}
        </div>
      </div>
    </div>
  );
}
