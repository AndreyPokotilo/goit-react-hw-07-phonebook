import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import css from './ContactList.module.css';
import { useFetchContactsQuery } from 'redux/contactApi';

export function ContactList() {
  const filterValue = useSelector(getFilterValue);

  const { data } = useFetchContactsQuery();

  const onFilterSearch = () => {
    const normaliseFilter = filterValue.toLowerCase().trim();

    if (data) {
      return data.filter(({ name }) =>
        name.toLowerCase().includes(normaliseFilter)
      );
    }
  };

  return (
    <ul className={css.listContact}>
      {onFilterSearch() &&
        onFilterSearch().map(({ id, name, phone }) => (
          <li className={css.listItem} key={id}>
            <Contact name={name} number={phone} contactId={id} />
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
