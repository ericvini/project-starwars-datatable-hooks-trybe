import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBarName() {
  const { inputName, setInputName } = useContext(StarWarsContext);
  const handleChange = ({ target }) => {
    const { value } = target;
    setInputName(value);
  };

  return (
    <label htmlFor="search-name">
      <input
        type="text"
        data-testid="name-filter"
        id="search-name"
        value={ inputName }
        onChange={ (event) => handleChange(event) }
      />
    </label>
  );
}

export default SearchBarName;
