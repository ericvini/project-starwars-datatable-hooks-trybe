import React from 'react';
import Table from './components/Table';
import SearchBarName from './components/SearchBarName';
import SearchByNumber from './components/SearchByNumber';
import Provider from './context/Provider';
import './App.css';
// project based on Thiago pederzoli code -Thx!;

function App() {
  return (
    <div className="App">
      <Provider>
        <SearchByNumber />
        <SearchBarName />
        <Table />
      </Provider>

    </div>
  );
}

export default App;
