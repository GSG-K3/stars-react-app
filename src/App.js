import React, { Component } from "react";
import './App.css';
import FirstItems from './components/indexcomp'
import SearchTask from './components/SearchTask';
class App extends Component {
  state = { showMainHome: true }
  onSearchClick = () => {
    this.setState({ showMainHome: false })
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>Stars Of Earth</h1>
          <SearchTask onSearchClick={this.onSearchClick} />
        </div>
        {this.state.showMainHome && <FirstItems />}
      </div>
    );
  }
}
export default App;