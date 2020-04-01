import React from 'react';
import './App.css';
import FirstItems from './components/indexcomp'
import SearchTask from './components/SearchTask';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Stars Of Earth</h1>
      </div>
      <FirstItems />
      <SearchTask />

    </div>
  );
}
export default App;
