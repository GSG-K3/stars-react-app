import React from 'react';
import './App.css';
import FirstItems from './components/indexcomp'
import SearchTask from './components/SearchTask';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Stars Of Earth</h1>
      <SearchTask />
      </div>
      <FirstItems />

    </div>
  );
}
export default App;
