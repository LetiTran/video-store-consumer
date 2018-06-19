import React, { Component } from 'react';
import './App.css';
import CustomerCollection from './components/CustomerCollection.js'
import LibraryCollection from './components/LibraryCollection.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <CustomerCollection />
      </div>
    );
  }
}

export default App;
