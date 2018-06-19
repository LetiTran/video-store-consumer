import React, { Component } from 'react';
import './App.css';
import CustomerCollection from './components/CustomerCollection.js'

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
