import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputNumbers, setInputNumbers] = useState([]);
  const [filterdPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planetsList = await response.json();
      setData(planetsList.results);
      setFilteredPlanets(planetsList.results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filter = data
      .filter(({ name }) => name.includes(inputName));
    setFilteredPlanets(filter);
  }, [data, inputName]);

  useEffect(() => {
    const zero = 0;
    if (inputNumbers.length > zero) {
      inputNumbers.map(({
        column: filterColumn,
        comparison: filterComparison,
        number: filterNumber }) => {
        if (filterComparison === 'maior que') {
          setFilteredPlanets([...data.filter(
            (planet) => planet[filterColumn] > filterNumber,
          )]);
        }
        if (filterComparison === 'menor que') {
          setFilteredPlanets([...data.filter(
            (planet) => planet[filterColumn] < filterNumber,
          )]);
        }

        if (filterComparison === 'igual a') {
          setFilteredPlanets([...data.filter(
            (planet) => Number(planet[filterColumn]) === filterNumber,
          )]);
        }
        return data;
      });
    }
  }, [data, inputNumbers, setFilteredPlanets]);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        inputName,
        setInputName,
        filterdPlanets,
        inputNumbers,
        setInputNumbers,
        setFilteredPlanets,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
