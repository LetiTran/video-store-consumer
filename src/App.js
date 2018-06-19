import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomerCollection from './components/CustomerCollection.js'
import LibraryCollection from './components/LibraryCollection.js'
import SearchResults from './components/SearchResults.js'


class App extends Component {


  render() {
    const Library = () => (
      <LibraryCollection />
    )

    const Customers = () => (
      <CustomerCollection />
    )

    return (
      <Router>
        <div className="App">
          <header>
            <h1>THE Video Store</h1>
            <nav>

              <ul>
                <li>
                  <p>Search Placeholder</p>
                </li>
                <li>
                  <Link to="/library">Library</Link>
                </li>
                <li>
                  <Link to="/customers">Customers</Link>
                </li>
              </ul>

              <Route path="/library" component={Library} />
              <Route path="/customers" component={Customers} />
            </nav>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
