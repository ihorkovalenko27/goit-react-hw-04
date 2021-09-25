import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      toast.error('Enter your request, please!');
      return;
    }

    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormbutton}>
          <span className={s.SearchFormbuttonlabel}>Search</span>
        </button>

        <input
          className={s.SearchForminput}
          type="text"
          name="searchName"
          value={searchName}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
