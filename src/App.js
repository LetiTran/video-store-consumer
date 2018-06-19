import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomerCollection from './components/CustomerCollection.js'
import LibraryCollection from './components/LibraryCollection.js'
import SelectionBar from './components/SelectionBar.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedCustomer: 'Please Select a Customer',
    };
  }

  selectionBarComponent = (customerName) => {
    // preventDefault();
    const updateState = {};

    if(customerName === this.state.selectedCustomer && this.state.selectedCustomer !== 'Please Select a Customer'){
      updateState["selectedCustomer"] = 'Please Select a Customer',
      this.setState(updateState);
    }  else {
      updateState["selectedCustomer"] = customerName;
      this.setState(updateState);
    }
 }

  render() {
    const Library = () => (
      <LibraryCollection />
    )

    const Customers = () => (
      <CustomerCollection selectionBarComponentCallBack={this.selectionBarComponent}
      />
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
            </nav>

            <SelectionBar
            customerName={this.state.selectedCustomer}
            />
          </header>

          <Route path="/library" component={Library} />
          <Route path="/customers" component={Customers} />
        </div>
      </Router>
    );
  }
}

export default App;
