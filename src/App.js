import React, { Component } from 'react';
import './App.css';
import CustomerCollection from './components/CustomerCollection.js'
import SearchResults from './components/SearchResults.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <SearchResults />

        <CustomerCollection />
      </div>
    );
  }
}

export default App;
