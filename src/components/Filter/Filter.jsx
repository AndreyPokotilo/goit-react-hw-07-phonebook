import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const onFilter = event => dispatch(filterContacts(event.target.value));

  return (
    <label className={css.filterLabel}>
      <p className={css.filterTitel}>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        value={filterValue}
        onChange={onFilter}
      />
    </label>
  );
}
