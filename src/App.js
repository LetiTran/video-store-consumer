import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomerCollection from './components/CustomerCollection.js'
import LibraryCollection from './components/LibraryCollection.js'
import SearchForm from './components/SearchForm.js'
import SearchResults from './components/SearchResults.js'
import SelectionBar from './components/SelectionBar.js'
import CheckOutModal from './components/CheckOutModal.js'


class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedCustomerName: 'Please Select a Customer',
      selectedCustomerId: 0,
      selectedMovieName: 'Please Select a Movie',
      selectedMovieId: 0,
      searchQuery: '',
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });}

  selectionCustomerBarComponent = (customerName, customerId) => {
    // preventDefault();
    const updateState = {};

    if(customerName === this.state.selectedCustomerName && this.state.selectedCustomerName !== 'Please Select a Customer'){
      updateState["selectedCustomerName"] = 'Please Select a Customer';
      updateState["selectedCustomerId"] = 0;
      this.setState(updateState);
    }  else {
      updateState["selectedCustomerName"] = customerName;
      updateState["selectedCustomerId"] = customerId;
      this.setState(updateState);
    }
 }


selectionMovieBarComponent= (movieInfo) => {
  const updateState = {};

  if(movieInfo.title === this.state.selectedMovieName && this.state.selectedMovieName !== 'Please Select a Movie'){
    updateState["selectedMovieName"] = 'Please Select a Movie';
    updateState["selectedMovieId"] = 0;
    this.setState(updateState);
  }  else {
    updateState["selectedMovieName"] = movieInfo.title;
    updateState["selectedMovieId"] = movieInfo.id;
    this.setState(updateState);
  }
}

clearState =()=>{
    this.setState({
      selectedCustomerName: 'Please Select a Customer',
      selectedCustomerId: 0,
      selectedMovieName: 'Please Select a Movie',
      selectedMovieId: 0,
    });
}

  searchQuery = (query) => {
    this.setState({
      searchQuery: query,
    });
  }

  render() {
    const Library = () => (
      <LibraryCollection selectionBarComponentCallBack={this.selectionMovieBarComponent}/>
    )

    const Customers = () => (
      <CustomerCollection selectionBarComponentCallBack={this.selectionCustomerBarComponent}
      />
    )

    const Search = () => (
      <SearchResults query={this.state.searchQuery} />
    )

    return (
      <Router>
        <div className="App">
          <header>
            <h1>THE Video Store</h1>
            <nav>
              <ul>
                <li>
                  <SearchForm searchQueryCallback={this.searchQuery} />
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
            customerName={this.state.selectedCustomerName} movieName={this.state.selectedMovieName}
            customerId={this.state.selectedCustomerId}
            movieId={this.state.selectedMovieId}
            clearStateCallBack = {this.clearState}
            toggleModalCallBack = {this.toggleModal}
            />
          </header>

          <CheckOutModal show={this.state.isOpen}
          onClose={this.toggleModal} />



          <Route path="/library" component={Library} />
          <Route path="/customers" component={Customers} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
